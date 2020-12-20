<template>
  <div class="score">
    {{score}}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'game-score',
  computed: {
    ...mapState(['currentGameDay']),
    score() {
      const { firstTeam, secondTeam } = this.currentGameDay.currentGame;

      return `${firstTeam.goals.length}:${secondTeam.goals.length}`;
    },
  },
}
</script>

<style scoped>
  .score {
    font-size: 30px;
  }
</style>
