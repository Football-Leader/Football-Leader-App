<template>
  <table class="completed-games-table">
    <caption>Турнирная таблица</caption>
    <colgroup>
      <col span="1" style="width: 40%">
      <col span="1" style="width: 5%">
      <col span="1" style="width: 5%">
      <col span="1" style="width: 5%">
      <col span="1" style="width: 5%">
      <col span="1" style="width: 5%">
      <col span="1" style="width: 5%">
      <col span="1" style="width: 5%">
      <col span="1" style="width: 5%">
    </colgroup>
    <tr>
      <th>Команда</th>
      <th>И</th>
      <th>В</th>
      <th>Н</th>
      <th>П</th>
      <th>З</th>
      <th>П</th>
      <th>Р</th>
      <th>О</th>
    </tr>
    <tr v-for="teamStat in teamStats" :key="teamStat.id">
      <td>{{ teamStat.name }}</td>
      <td>{{ teamStat.games }}</td>
      <td>{{ teamStat.wins }}</td>
      <td>{{ teamStat.draw }}</td>
      <td>{{ teamStat.loses }}</td>
      <td>{{ teamStat.scored }}</td>
      <td>{{ teamStat.failed }}</td>
      <td>{{ teamStat.scored - teamStat.failed }}</td>
      <td>{{ teamStat.points }}</td>
    </tr>
  </table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'completed-games-table',
  computed: {
    ...mapState(['currentGameDay']),
    teamStats() {
      const teams = this.currentGameDay.teams.map((team) => {
        return {
          id: team.id,
          name: team.name,
          games: 0,
          wins: 0,
          draw: 0,
          loses: 0,
          scored: 0,
          failed: 0,
          points: 0,
        };
      });

      const teamsMap = {};
      teams.forEach((team) => teamsMap[team.id] = team);

      this.currentGameDay.completedGames.forEach((completedGame) => {
        let { firstTeam, secondTeam } = completedGame;
        if (firstTeam.goals.length < secondTeam.goals.length) {
          [firstTeam, secondTeam] = [secondTeam, firstTeam];
        }

        teamsMap[firstTeam.id].games += 1;
        teamsMap[firstTeam.id].scored += firstTeam.goals.length;
        teamsMap[firstTeam.id].failed += secondTeam.goals.length;

        teamsMap[secondTeam.id].games += 1;
        teamsMap[secondTeam.id].scored += secondTeam.goals.length;
        teamsMap[secondTeam.id].failed += firstTeam.goals.length;

        if (firstTeam.goals.length === secondTeam.goals.length) {
          teamsMap[firstTeam.id].points += 1;
          teamsMap[firstTeam.id].draw += 1;

          teamsMap[secondTeam.id].points += 1;
          teamsMap[secondTeam.id].draw += 1;
        } else {
          teamsMap[firstTeam.id].wins += 1;
          teamsMap[firstTeam.id].points += 3;
          teamsMap[secondTeam.id].loses += 1;
        }
      });

      return Object.values(teamsMap).sort((a, b) => {
        if (a.points > b.points) {
          return -1;
        }

        if (b.points > a.points) {
          return 1;
        }

        const diffA = a.scored - a.failed;
        const diffB = b.scored - b.failed;

        if (diffA > diffB) {
          return -1;
        }

        if (diffB > diffA) {
          return 1;
        }

        if (a.scored > b.scored) {
          return -1;
        }

        if (b.scored > a.scored) {
          return 1;
        }

        if (a.games > b.games) {
          return -1;
        }

        if (b.games > a.games) {
          return 1;
        }

        return 0;
      });
    },
  },
}
</script>

<style scoped>
.completed-games-table {
  table-layout: fixed;
  width: 100%;
  border: 1px solid gainsboro;
}

.completed-games-table caption {
  caption-side: top;
  text-align: center;
}

.completed-games-table tr:nth-child(2n + 1) {
  background: #48383808;
}

.completed-games-table td {
  border: 1px solid gainsboro;
  padding: 5px;
}
</style>
