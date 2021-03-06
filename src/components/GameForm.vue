<template>
  <div>
    <select-beginners-modal :visible="selectBeginnersModalIsVisible" @ok="createFirstGame" />
    <self-goal-form-modal :visible="selfGoalFormIsVisible"
                          :current-game="currentGameDay.currentGame"
                          @cancel="closeSelfGoalForm"
                          @goal="handleGoal"/>
    <div v-if="!selectBeginnersModalIsVisible" class="current-game-form">
      <table style="width: 100%">
        <colgroup>
          <col span="1" style="width: 35%;">
          <col span="1" style="width: 30%;">
          <col span="1" style="width: 35%;">
        </colgroup>
        <tr>
          <td>
            <team-in-match-column :team-in-match="currentGameDay.currentGame.firstTeam"
                                  :game-has-started="gameIsLive"
                                  @goal="playerId => handleGoal(currentGameDay.currentGame.firstTeam.id, playerId)"/>
          </td>
          <td>
            <game-score />
            <start-game-btn @click="startCurrentGame" v-if="gameNotStarted" />
            <time-left v-else-if="gameIsStarted" :time-left="timeLeft" />
            <div v-else-if="lastAttach">
              <div>Последняя атака</div>
              <button @click="tryEndTheGame">Завершить игру</button>
            </div>
            <div v-else>
              <button @click="completeTheCurrentGameAndInitNew">Начать следующую игру</button>
            </div>
          </td>
          <td>
            <team-in-match-column :team-in-match="currentGameDay.currentGame.secondTeam"
                                  :game-has-started="gameIsLive"
                                  @goal="playerId => handleGoal(currentGameDay.currentGame.secondTeam.id, playerId)"/>
          </td>
        </tr>
      </table>
      <current-goals />
      <div class="control-panel">
        <control-panel-btn v-if="gameIsLive" color="black" :icon="selfGoalIcon" label="Автогол" @click.native="showSelfGoalForm" />
        <control-panel-btn color="red" :icon="closeIcon" label="Завершить день" @click.native="completeTheDay" />
      </div>
    </div>
    <div style="margin-top: 50px;">
      <completed-games />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import SelectBeginnersModal from '@/components/gameForm/selectBeginnersModal';
import SelfGoalFormModal from '@/components/gameForm/selfGoalFormModal';
import TeamInMatchColumn from '@/components/gameForm/teamInMatchColumn';
import GameScore from '@/components/gameForm/gameScore';
import CompletedGames from '@/components/gameForm/completedGames';
import CurrentGoals from '@/components/gameForm/currentGoals';

import CloseCircleOutlineIcon from 'vue-material-design-icons/CloseCircleOutline.vue';
import EmoticonDeadOutlineIcon from 'vue-material-design-icons/EmoticonDeadOutline.vue';

import StartGameBtn from './primitives/startGameBtn.vue';
import ControlPanelBtn from './primitives/controlPanelBtn.vue';
import TimeLeft from './primitives/timeLeftLabel.vue';

import { generateId } from '@/utils/generateId';
import { clone } from '@/utils/clone';

const GAME_STATUSES = {
  NOT_STARTED_YET: 0,
  HAS_STARTED: 1,
  LAST_ATTACK: 2,
  COMPLETED: 3,
};

export default {
  name: 'game-form-view',
  components: {
    SelectBeginnersModal,
    SelfGoalFormModal,
    TeamInMatchColumn,
    GameScore,
    CompletedGames,
    ControlPanelBtn,
    StartGameBtn,
    TimeLeft,
    CurrentGoals,
  },
  data() {
    return {
      gameStatus: GAME_STATUSES.NOT_STARTED_YET,
      timeLeft: null, // this.GAME_DURATION_MINUTES * 60
      timeoutId : null,
      intervalId: null,
      selfGoalFormIsVisible: false,
    };
  },
  created() {
    this.timeLeft = this.GAME_DURATION_MINUTES * 60;
  },
  methods: {
    ...mapMutations(['initFirstGame', 'completeTheCurrentGame']),
    checkIfEnoughGoalsAreScored() {
      const { firstTeam, secondTeam } = this.currentGameDay.currentGame;

      return firstTeam.goals.length === this.AMOUNT_OF_GOALS_TO_FINISH || secondTeam.goals.length === this.AMOUNT_OF_GOALS_TO_FINISH;
    },
    async tryEndTheGame() {
      if (this.timeLeft === 0 || this.checkIfEnoughGoalsAreScored()) {
        if (this.gameIsStarted || this.lastAttach) {
          await this.markCurrentGameAsCompleted();
          //await this.completeTheCurrentGame();
        }

        clearTimeout(this.timeoutId);
        clearInterval(this.intervalId);
      }
    },
    startCurrentGame() {
      this.gameStatus = GAME_STATUSES.HAS_STARTED;
      this.intervalId = setInterval(() => {
        this.timeLeft -= 1;
      }, 1000);

      this.timeoutId = setTimeout(() => {
        clearInterval(this.intervalId);
        this.timeLeft = 0;
        this.gameStatus = GAME_STATUSES.LAST_ATTACK;
      }, 1000 * this.GAME_DURATION_MINUTES * 60);
    },
    createFirstGame({ firstTeamId, secondTeamId }) {
      this.initFirstGame({
        game: {
          firstTeam: {
            id: firstTeamId,
            goals: [],
          },
          secondTeam: {
            id: secondTeamId,
            goals: [],
          },
        },
      });
    },
    async handleGoal(teamId, playerId, isSelfGoal = false) {
      const goal = {
        author: playerId,
        time: this.GAME_DURATION_MINUTES * 60 - this.timeLeft,
        isSelfGoal,
        id: generateId(),
      };

      const updatedGame = clone(this.currentGameDay.currentGame);
      if (updatedGame.firstTeam.id === teamId) {
        updatedGame.firstTeam.goals.push(goal);
      } else {
        updatedGame.secondTeam.goals.push(goal);
      }

      await this.initFirstGame({
        game: updatedGame,
      });

      this.tryEndTheGame();
    },
    completeTheDay() {
      this.$confirm({
        title: `Время аренды зала вышло, либо все уже поломались и устали? Давайте завершим играть!`,
        okText: 'Да, заканчиваем',
        cancelText: 'Я перепутал, ещё есть время поиграть',
        onOk: async () => {
          this.timeLeft = 0;
          await this.tryEndTheGame();
          await this.$router.push({name: 'stats'});
        },
      });
    },
    showSelfGoalForm() {
      this.selfGoalFormIsVisible = true;
    },
    closeSelfGoalForm() {
      this.selfGoalFormIsVisible = false;
    },
    markCurrentGameAsCompleted() {
      this.gameStatus = GAME_STATUSES.COMPLETED;
    },
    async completeTheCurrentGameAndInitNew() {
      await this.completeTheCurrentGame();
      this.timeLeft = this.GAME_DURATION_MINUTES * 60;
      this.gameStatus = GAME_STATUSES.NOT_STARTED_YET;
    },
  },
  computed: {
    ...mapState(['currentGameDay', 'players', 'settings']),
    GAME_DURATION_MINUTES() {
      return this.settings.gameDuration;
    },
    AMOUNT_OF_GOALS_TO_FINISH() {
      return this.settings.goalsToCompleteCount;
    },
    selfGoalIcon() {
      return EmoticonDeadOutlineIcon;
    },
    closeIcon() {
      return CloseCircleOutlineIcon;
    },
    selectBeginnersModalIsVisible() {
      return !this.currentGameDay.currentGame;
    },
    firstTeamGoals() {
      return this.currentGameDay.currentGame?.firstTeam.goals;
    },
    secondTeamGoals() {
      return this.currentGameDay.currentGame?.secondTeam.goals;
    },
    gameNotStarted() {
      return this.gameStatus === GAME_STATUSES.NOT_STARTED_YET;
    },
    gameIsStarted() {
      return this.gameStatus === GAME_STATUSES.HAS_STARTED;
    },
    gameIsCompleted() {
      return this.gameStatus === GAME_STATUSES.COMPLETED;
    },
    lastAttach() {
      return this.gameStatus === GAME_STATUSES.LAST_ATTACK;
    },
    gameIsLive() {
      return this.gameIsStarted || this.lastAttach || this.gameIsCompleted
        && this.currentGameDay.currentGame.firstTeam.goals.length < this.AMOUNT_OF_GOALS_TO_FINISH
        && this.currentGameDay.currentGame.secondTeam.goals.length < this.AMOUNT_OF_GOALS_TO_FINISH;
    },
  },
}
</script>

<style scoped>
  .complete-day-btn {
    margin-top: 50px;
  }

  .control-panel {
    display: flex;
    position: absolute;
    bottom: 5px;
  }

  .control-panel .icon {
    display: flex;
    align-items: center;
    border: 1px solid;
    box-shadow: #1890ff;
  }

  .current-game-form {
    height: calc(100vh - var(--header-height));
  }
</style>
