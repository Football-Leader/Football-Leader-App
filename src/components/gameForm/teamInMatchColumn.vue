<template>
  <div>
    <div class="team-name">{{team.name}}</div>
    <div class="team-players">
      <button   class="player-btn"
                v-for="playerId in team.players"
                :key="playerId"
                :disabled="!gameHasStarted"
                @click="handlePlayerClick(playerId)">
        {{getPlayerName(playerId)}}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'team-in-match-column',
  props: {
    teamInMatch: Object,
    gameHasStarted: Boolean,
  },
  methods: {
    getPlayerName(playerId) {
      return this.players.find(({ id }) => id === playerId).name;
    },
    handlePlayerClick(playerId) {
      this.$confirm({
        title: `${this.getPlayerName(playerId)} забил гол, вы уверены?`,
        onOk: () => {
          this.$emit('goal', playerId);
        },
        okText: 'Да',
        cancelText: 'Я перепутал',
      });
    },
  },
  computed: {
    ...mapState(['currentGameDay', 'players']),
    team() {
      return this.currentGameDay.teams.find(({ id }) => this.teamInMatch.id === id);
    },
  },
}
</script>

<style scoped>
  .team-name {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .team-players {
    display: flex;
    flex-direction: column;
  }

  .player-btn {
    border: 1px solid gainsboro;
    height: 60px;
    background: #eaecef;
    padding: 8px 0;
    color: black;
    margin: 5px 0;
  }
</style>
