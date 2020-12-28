<template>
  <div>
    <select-beginners-modal :visible="selectBeginnersModalIsVisible"
                            @ok="createFirstGame" />
    <div v-if="!selectBeginnersModalIsVisible">
      <table style="width: 100%">
        <colgroup>
          <col span="1" style="width: 40%;">
          <col span="1" style="width: 20%;">
          <col span="1" style="width: 40%;">
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
              Начать игру
            </button>
            <div v-else class="time-left">
              {{timeLeftFormatted}}
            </div>
            <div class="complete-day-btn">
              <a-button type="danger" size="small" @click="completeTheDay">
                <a-icon type="close-circle" /> Завершить день
              </a-button>
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
    <div>
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

export default {
  name: 'game-form-view',
  components: {
    SelectBeginnersModal,
    TeamInMatchColumn,
    GameScore,
    CompletedGames,
  },
  data() {
    return {
      currentGameHasStarted: false,
      timeLeft: 7 * 60,
      timeoutId : null,
      intervalId: null,
    };
  },
  methods: {
    ...mapMutations(['initFirstGame', 'completeTheCurrentGame']),
    async tryEndTheGame() {
      const { firstTeam, secondTeam } = this.currentGameDay.currentGame;
      if (this.timeLeft === 0 || firstTeam.goals.length === 2 || secondTeam.goals.length === 2) {
        if (this.currentGameHasStarted) {
          await this.completeTheCurrentGame();
        }

        clearTimeout(this.timeoutId);
        clearInterval(this.intervalId);
        this.timeLeft = 7 * 60;
        this.currentGameHasStarted = false;
      }
    },
    startCurrentGame() {
      this.currentGameHasStarted = true;
      this.intervalId = setInterval(() => {
        this.timeLeft -= 1;
      }, 1000);

      this.timeoutId = setTimeout(() => {
        clearInterval(this.intervalId);
        this.timeLeft = 0;
        this.tryEndTheGame();
      }, 1000 * 7 * 60);
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
        time: 7 * 60 - this.timeLeft,
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
</style>
