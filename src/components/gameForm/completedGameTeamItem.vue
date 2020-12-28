<template>
  <div>
    <div class="team-name" :class="{ won }">{{getTeam(teamId).name}}</div>
    <div class="goals">
      <div v-for="(goal, index) in goals" :key="index">
        {{formatTime(goal.time)}}' {{getPlayerName(goal.author)}}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'completed-game-team-item',
    props: {
      teamId: String,
      goals: Array,
      won: Boolean,
    },
    computed: {
      ...mapState(['currentGameDay', 'players']),
    },
    methods: {
      getTeam(teamId) {
        return this.currentGameDay.teams.find(t => t.id === teamId);
      },
      formatTime(time) {
        return `${Math.floor(time / 60 + 1)} мин`;
      },
      getPlayerName(author) {
        return this.players.find((p) => p.id === author).name;
      },
    },
  }
</script>

<style scoped>
  .team-name {
    font-size: 13px;
    margin-bottom: 10px;
  }

  .team-name.won {
    font-weight: bold;
  }

  .goals {
    font-size: 10px;
  }
</style>
