<template>
  <div class="goal-item">
    <soccer-icon :size="16" :fill-color="goal.isSelfGoal ? 'red' : 'black'" />
    {{formatTime(goal.time)}}' {{getPlayerName(goal.author)}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SoccerIcon from 'vue-material-design-icons/Soccer.vue';

export default {
  name: 'goal-item',
  props: {
    goal: Object,
  },
  components: {
    SoccerIcon,
  },
  computed: {
    ...mapState(['players']),
  },
  methods: {
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
  .goal-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
