<template>
  <div>
    <select-beginners-modal :visible="selectBeginnersModalIsVisible"
                            @ok="createFirstGame" />
    <div class="current-game" v-if="!selectBeginnersModalIsVisible">
      <a-row>
        <team-in-match-column :team-in-match="currentGameDay.currentGame.firstTeam" />
        <a-col :span="8">
          <div class="score">{{firstTeamScore}}:{{secondTeamScore}}</div>

          <a-button block class="start-the-game-btn" type="primary" @click="startCurrentGame" v-if="!currentGameHasStarted">Начать игру!!!</a-button>
          <div v-else class="time-left">
            {{timeLeftFormatted}}
          </div>
        </a-col>
        <team-in-match-column :team-in-match="currentGameDay.currentGame.secondTeam" />
      </a-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import SelectBeginnersModal from '@/components/gameForm/selectBeginnersModal';
import TeamInMatchColumn from '@/components/gameForm/teamInMatchColumn';

export default {
  name: 'game-form-view',
  components: {
    SelectBeginnersModal,
    TeamInMatchColumn,
  },
  data() {
    return {
      currentGameHasStarted: false,
      timeLeft: 7 * 60,
    };
  },
  methods: {
    ...mapMutations(['initFirstGame']),
    startCurrentGame() {
      this.currentGameHasStarted = true;
      const counterId = setInterval(() => {
        this.timeLeft -= 1;
      }, 1000);

      setTimeout(() => {
        clearInterval(counterId);
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
    firstTeamScore() {
      return this.currentGameDay.currentGame.firstTeam.goals.length;
    },
    secondTeamScore() {
      return this.currentGameDay.currentGame.secondTeam.goals.length;
    },
  },
}
</script>

<style scoped>
  .team-name {
    font-size: 20px;
  }

  .score {
    font-size: 30px;
  }

  .start-the-game-btn {
    margin-top: 50px;
  }

  .time-left {
    margin-top: 50px;
    font-size: 25px;
  }
</style>
