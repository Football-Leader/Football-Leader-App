<template>
  <div>
    <scorer-table />
    <completed-games-table />
  </div>
</template>

<script>
  import ScorerTable from '@/components/resultsView/ScorerTable';
  import CompletedGamesTable from '@/components/resultsView/CompletedGamesTable';

  export default {
    name: 'stats-view',
    components: {
      ScorerTable,
      CompletedGamesTable,
    },
  }
</script>

<style scoped>
  td {
    padding: 5px;
    border: 1px solid #bdbdbd;
  }
</style>
