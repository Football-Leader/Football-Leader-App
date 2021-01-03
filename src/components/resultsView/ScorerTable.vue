<template>
  <table class="scorers-table">
    <caption>Таблица бомбардиров</caption>
    <colgroup>
      <col span="1" style="width: 70%">
      <col span="1" style="width: 30%">
    </colgroup>
    <tr>
      <th>Игрок</th>
      <th>Забил</th>
    </tr>
    <tr v-for="scorer in scorers" :key="scorer.id">
      <td col="3" class="name">
        {{scorer.name}}
        <div class="team-name">({{scorer.team.name}})</div></td>
      <td col="1">{{scorer.scored}}</td>
    </tr>
  </table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'scorer-table',
  computed: {
    ...mapState(['currentGameDay', 'players']),
    scorers() {
      const allGoals = [];
      this.currentGameDay.completedGames.forEach((completedGame) => {
        allGoals.push(...completedGame.firstTeam.goals);
        allGoals.push(...completedGame.secondTeam.goals);
      });

      const allGoalsMap = {};
      allGoals.filter(goal => !goal.isSelfGoal).forEach((goal) => {
        const author = goal.author;
        if (!allGoalsMap[author]) {
          allGoalsMap[author] = 1;
        } else {
          allGoalsMap[author] += 1;
        }
      });

      return Object.keys(allGoalsMap).map((authorId) => {
        const team = this.currentGameDay.teams.find((team) => team.players.includes(authorId));
        return {
          id: authorId,
          name: this.players.find((player) => player.id === authorId).name,
          scored: allGoalsMap[authorId],
          team,
        }
      }).sort((a, b) => {
        if (a.scored > b.scored) {
          return -1;
        }

        if (b.scored > a.scored) {
          return 1;
        }

        return 0;
      });
    },
  },
}
</script>

<style scoped>
  .scorers-table {
    table-layout: fixed;
    width: 100%;
    border: 1px solid gainsboro;
  }

  .scorers-table caption {
    caption-side: top;
    text-align: center;
  }

  .scorers-table tr:nth-child(2n + 1) {
    background: #48383808;
  }

  .scorers-table td {
    border: 1px solid gainsboro;
    padding: 5px;
  }

  .scorers-table .name {
    text-align: left;
    font-weight: bold;
    font-size: 12px;
  }

  .scorers-table .team-name {
    font-weight: normal;
    font-size: 10px;
  }
</style>
