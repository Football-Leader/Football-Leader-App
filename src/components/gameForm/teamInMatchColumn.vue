<template>
  <a-col :span="8">
    <div class="team-name">{{team.name}}</div>
    <div class="team-players">
      <a-button block v-for="playerId in team.players" :key="playerId">
        {{getPlayerName(playerId)}}
      </a-button>
    </div>
  </a-col>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'team-in-match-column',
  props: {
    teamInMatch: Object,
  },
  methods: {
    getPlayerName(playerId) {
      return this.players.find(({ id }) => id === playerId).name;
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
  }
</style>
