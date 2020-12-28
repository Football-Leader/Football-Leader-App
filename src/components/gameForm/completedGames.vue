<template>
  <table class="games-table">
    <caption>Завершённые игры</caption>
    <colgroup>
      <col span="1" style="width: 40%;">
      <col span="1" style="width: 20%;">
      <col span="1" style="width: 40%;">
    </colgroup>
    <tr>
      <th>Команда 1</th>
      <th>Счёт</th>
      <th>Команда 2</th>
    </tr>
    <tr v-for="(game, index) in completedGames" :key="index">
      <td>
        <completed-game-team-item :team-id="game.firstTeam.id"
                                  :goals="game.firstTeam.goals"
                                  :won="firstTeamWon(game)" />
      </td>
      <td>
        {{ game.firstTeam.goals.length }} - {{ game.secondTeam.goals.length }}
      </td>
      <td>
        <completed-game-team-item :team-id="game.secondTeam.id"
                                  :goals="game.secondTeam.goals"
                                  :won="secondTeamWon(game)" />
      </td>
    </tr>
  </table>
</template>

<script>
  import { mapState } from 'vuex';

  import CompletedGameTeamItem from './completedGameTeamItem';

  export default {
    name: 'completed-games',
    components: {
      CompletedGameTeamItem,
    },
    computed: {
      ...mapState(['currentGameDay']),
      completedGames() {
        return this.currentGameDay.completedGames;
      },
    },
    methods: {
      firstTeamWon(game) {
        return game.firstTeam.goals.length > game.secondTeam.goals.length;
      },
      secondTeamWon(game) {
        return game.secondTeam.goals.length > game.firstTeam.goals.length;
      },
    },
  }
</script>

<style scoped>
  .games-table {
    width: 100%;
    table-layout: fixed;
    border: 1px solid gainsboro;
  }

  .games-table caption {
    caption-side: top;
    text-align: center;
  }

  .games-table th {
    padding: 20px;
    font-size: 15px;
  }

  .games-table td {
    padding: 10px;
    border: 1px solid gainsboro;
  }

  .games-table tr:nth-child(2n + 1) {
    background: #48383808;
  }
</style>
