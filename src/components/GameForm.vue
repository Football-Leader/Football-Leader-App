<template>
  <div>
    <select-beginners-modal :visible="selectBeginnersModalIsVisible"
                            @ok="createFirstGame" />
    <div v-if="!selectBeginnersModalIsVisible">
      <table style="width: 100%">
        <colgroup>
          <col span="1" style="width: 35%;">
          <col span="1" style="width: 30%;">
          <col span="1" style="width: 35%;">
        </colgroup>
        <tr>
          <td>
            <team-in-match-column :team-in-match="currentGameDay.currentGame.firstTeam"
                                  :game-has-started="currentGameHasStarted"
                                  @goal="playerId => handleGoal(currentGameDay.currentGame.firstTeam.id, playerId)"/>
          </td>
          <td>
            <game-score />
            <button class="start-the-game-btn"
                      type="primary"
                      @click="startCurrentGame"
                      v-if="!currentGameHasStarted"
                      size="large">
              <play-circle-outline-icon fill-color="white" />
              <div>Начать игру</div>
            </button>
            <div v-else class="time-left">
              {{timeLeftFormatted}}
            </div>
          </td>
          <td>
            <team-in-match-column :team-in-match="currentGameDay.currentGame.secondTeam"
                                  :game-has-started="currentGameHasStarted"
                                  @goal="playerId => handleGoal(currentGameDay.currentGame.secondTeam.id, playerId)"/>
          </td>
        </tr>
      </table>
    </div>
    <div class="control-panel">
      <control-panel-btn color="black" :icon="selfGoalIcon" label="Автогол" />
      <control-panel-btn color="red" :icon="closeIcon" label="Завершить день" @click.native="completeTheDay" />
    </div>
    <div style="margin-top: 50px;">
      <completed-games />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import SelectBeginnersModal from '@/components/gameForm/selectBeginnersModal';
import TeamInMatchColumn from '@/components/gameForm/teamInMatchColumn';
import GameScore from '@/components/gameForm/gameScore';
import CompletedGames from '@/components/gameForm/completedGames';

import MenuIcon from 'vue-material-design-icons/Menu.vue';
import CloseCircleOutlineIcon from 'vue-material-design-icons/CloseCircleOutline.vue';
import EmoticonDeadOutlineIcon from 'vue-material-design-icons/EmoticonDeadOutline.vue';
import PlayCircleOutlineIcon from 'vue-material-design-icons/PlayCircleOutline.vue';
import ControlPanelBtn from './primitives/controlPanelBtn.vue';

const GAME_DURATION_MINUTES = 1;
const AMOUNT_OF_GOALS_TO_FINISH = 2;

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
    TeamInMatchColumn,
    GameScore,
    CompletedGames,
    ControlPanelBtn,
    PlayCircleOutlineIcon,
  },
  data() {
    return {
      currentGameHasStarted: false,
      gameStatus: GAME_STATUSES.NOT_STARTED_YET,
      timeLeft: GAME_DURATION_MINUTES * 60,
      timeoutId : null,
      intervalId: null,
    };
  },
  methods: {
    ...mapMutations(['initFirstGame', 'completeTheCurrentGame']),
    checkIfEnoughGoalsAreScored() {
      const { firstTeam, secondTeam } = this.currentGameDay.currentGame;

      return firstTeam.goals.length === AMOUNT_OF_GOALS_TO_FINISH || secondTeam.goals.length === AMOUNT_OF_GOALS_TO_FINISH;
    },
    async tryEndTheGame() {
      if (this.timeLeft === 0 || this.checkIfEnoughGoalsAreScored()) {
        if (this.currentGameHasStarted) {
          await this.completeTheCurrentGame();
        }

        clearTimeout(this.timeoutId);
        clearInterval(this.intervalId);
        this.timeLeft = GAME_DURATION_MINUTES * 60;
        this.currentGameHasStarted = false;
      }
    },
    startCurrentGame() {
      this.currentGameHasStarted = true;
      this.gameStatus = GAME_STATUSES.HAS_STARTED;
      this.intervalId = setInterval(() => {
        this.timeLeft -= 1;
      }, 1000);

      this.timeoutId = setTimeout(() => {
        clearInterval(this.intervalId);
        this.timeLeft = 0;
        this.tryEndTheGame();
      }, 1000 * GAME_DURATION_MINUTES * 60);
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
    async handleGoal(teamId, playerId) {
      const goal = {
        author: playerId,
        time: GAME_DURATION_MINUTES * 60 - this.timeLeft,
      };

      const updatedGame = JSON.parse(JSON.stringify(this.currentGameDay.currentGame));
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
  },
  computed: {
    ...mapState(['currentGameDay', 'players']),
    menuIcon() {
      return MenuIcon;
    },
    selfGoalIcon() {
      return EmoticonDeadOutlineIcon;
    },
    closeIcon() {
      return CloseCircleOutlineIcon;
    },
    timeLeftFormatted() {
      const minutes = Math.floor(this.timeLeft / 60);
      let seconds = `${this.timeLeft % 60}`;

      if (seconds.length === 1) {
        seconds = `0${seconds}`;
      }

      if (minutes) {
        return `Осталось ${minutes}:${seconds}`;
      }

      return `Осталось ${seconds} секунд`;
    },
    selectBeginnersModalIsVisible() {
      return !this.currentGameDay.currentGame;
    },
  },
}
</script>

<style scoped>
  .start-the-game-btn {
    margin-top: 50px;
    padding: 8px 2px;
    background: #1890ff;
    color: white;
    border: 1px solid #1890ff;
    border-radius: 2px;
  }

  .time-left {
    margin-top: 50px;
    font-size: 25px;
  }

  .complete-day-btn {
    margin-top: 50px;
  }

  .control-panel {
    display: flex;
    margin-top: 10px;
  }

  .control-panel .icon {
    display: flex;
    align-items: center;
    border: 1px solid;
    box-shadow: #1890ff;
  }
</style>
