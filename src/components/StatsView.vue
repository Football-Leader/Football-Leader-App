<template>
  <div>
    <scorer-table />
    <a-divider />
    <completed-games-table />
    <div style="position: absolute; bottom: 0; width: 100%;">
      Техническая информация:
      <textarea :value="debugInfo" style="width: 100%; font-size: 10px;"/>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import ScorerTable from '@/components/resultsView/ScorerTable';
  import CompletedGamesTable from '@/components/resultsView/CompletedGamesTable';

  export default {
    name: 'stats-view',
    components: {
      ScorerTable,
      CompletedGamesTable,
    },
    computed: {
      ...mapState(['currentGameDay', 'players']),
      scorers() {
        const allGoals = [];
        this.currentGameDay.completedGames.forEach((completedGame) => {
          allGoals.push(...completedGame.firstTeam.goals);
          allGoals.push(...completedGame.secondTeam.goals);
        });

        const allGoalsMap = {};
        allGoals.forEach((goal) => {
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
      debugInfo() {
        return JSON.stringify(this.currentGameDay);
      },
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
  td {
    padding: 5px;
    border: 1px solid #bdbdbd;
  }
</style>
