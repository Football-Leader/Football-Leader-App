<template>
  <div>
    <select-beginners-modal :visible="selectBeginnersModalIsVisible"
                            @ok="createFirstGame" />
    <div class="current-game" v-if="!selectBeginnersModalIsVisible">
      <a-row>
        <a-col :span="8">
          <div class="team-name">{{firstTeamName}}</div>
          <div class="team-players">
            <a-button block v-for="playerId in firstTeamPlayers" :key="playerId">{{getPlayerName(playerId)}}</a-button>
          </div>
        </a-col>
        <a-col :span="8">
          <div class="score">{{firstTeamScore}}:{{secondTeamScore}}</div>

          <a-button block class="start-the-game-btn" type="primary" @click="startCurrentGame" v-if="!currentGameHasStarted">Начать игру!!!</a-button>
          <div v-else class="time-left">
            {{timeLeftFormatted}}
          </div>
        </a-col>
        <a-col :span="8">
          <div class="team-name">{{secondTeamName}}</div>
          <div class="team-players">
            <a-button block v-for="playerId in secondTeamPlayers" :key="playerId">{{getPlayerName(playerId)}}</a-button>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import SelectBeginnersModal from '@/components/gameForm/selectBeginnersModal';

export default {
  name: 'game-form-view',
  components: {
    SelectBeginnersModal,
  },
  data() {
    return {
      currentGameHasStarted: false,
      timeLeft: 7 * 60,
    };
  },
  methods: {
    ...mapMutations(['initFirstGame']),
    getTeamName(teamId) {
      return this.getTeamById(teamId).name;
    },
    getPlayerName(playerId) {
      return this.players.find(({ id }) => id === playerId).name;
    },
    getTeamById(teamId) {
      return this.currentGameDay.teams.find(({ id }) => id === teamId);
    },
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
          firstTeamId,
          secondTeamId,
          firstTeamScore: 0,
          secondTeamScore: 0,
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
    firstTeamName() {
      const teamId = this.currentGameDay.currentGame.firstTeamId;
      return this.getTeamName(teamId);
    },
    secondTeamName() {
      const teamId = this.currentGameDay.currentGame.secondTeamId;
      return this.getTeamName(teamId);
    },
    firstTeamScore() {
      return this.currentGameDay.currentGame.firstTeamScore;
    },
    secondTeamScore() {
      return this.currentGameDay.currentGame.secondTeamScore;
    },
    firstTeamPlayers() {
      return this.getTeamById(this.currentGameDay.currentGame.firstTeamId).players;
    },
    secondTeamPlayers() {
      return this.getTeamById(this.currentGameDay.currentGame.secondTeamId).players;
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
