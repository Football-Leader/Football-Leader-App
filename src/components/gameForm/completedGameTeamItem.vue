<template>
  <div>
    <div class="team-name" :class="{ won }">{{getTeam(teamId).name}}</div>
    <div class="goals">
      <goal-item v-for="(goal, index) in goals" :key="index" :goal="goal" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import GoalItem from '../primitives/goalItem.vue';

  export default {
    name: 'completed-game-team-item',
    props: {
      teamId: String,
      goals: Array,
      won: Boolean,
    },
    components: {
      GoalItem,
    },
    computed: {
      ...mapState(['currentGameDay']),
    },
    methods: {
      getTeam(teamId) {
        return this.currentGameDay.teams.find(t => t.id === teamId);
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
