<template>
  <div>
    <div v-for="(game, index) in completedGames" :key="index" class="game">
      <div class="team-name">
        <div>{{getTeam(game.firstTeam.id).name}}</div>
        <div v-for="(goal, index) in game.firstTeam.goals" :key="index">
          {{formatTime(goal.time)}}' {{getPlayerName(goal.author)}}
        </div>
      </div>
      <div>{{game.firstTeam.goals.length}} - {{game.secondTeam.goals.length}}</div>
      <div class="team-name">
        <div>{{getTeam(game.secondTeam.id).name}}</div>
        <div v-for="(goal, index) in game.secondTeam.goals" :key="index">
          {{formatTime(goal.time)}}' {{getPlayerName(goal.author)}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'completed-games',
    computed: {
      ...mapState(['currentGameDay', 'players']),
      completedGames() {
        return this.currentGameDay.completedGames;
      },
    },
    methods: {
      getTeam(teamId) {
        return this.currentGameDay.teams.find(t => t.id === teamId);
      },
      getPlayerName(playerId) {
        return this.players.find((p) => p.id === playerId).name;
      },
      formatTime(sec) {
        return `${Math.floor(sec / 60 + 1)} мин`;
      },
    },
  }
</script>

<style scoped>
  .game {
    display: flex;
    padding: 5px;
  }

  .team-name {
    font-weight: bold;
  }
</style>
