<template>
  <a-modal :visible="visible"
           :footer="null"
           title="Выберите игрока какой команды так накосячил">
    <table style="width: 100%">
      <colgroup>
        <col span="1" style="width: 40%;">
        <col span="1" style="width: 20%;">
        <col span="1" style="width: 40%;">
      </colgroup>
      <tr>
        <td class="team-in-match-column">
          <team-in-match-column :team-in-match="currentGame.firstTeam"
                                game-has-started
                                @goal="playerId => handleGoal(currentGame.secondTeam.id, playerId)" />
        </td>
        <td>

        </td>
        <td class="team-in-match-column">
          <team-in-match-column :team-in-match="currentGame.secondTeam"
                                game-has-started
                                @goal="playerId => handleGoal(currentGame.firstTeam.id, playerId)" />
        </td>
      </tr>
    </table>
    <div>
      <button @click="$emit('cancel')">Отмена</button>
    </div>
  </a-modal>
</template>

<script>
import teamInMatchColumn from '@/components/gameForm/teamInMatchColumn.vue';

export default {
  name: 'self-goal-form-modal',
  props: {
    currentGame: Object,
    visible:Boolean,
  },
  components: {
    teamInMatchColumn,
  },
  methods: {
    handleGoal(teamId, playerId) {
      this.$emit('goal', teamId, playerId, true);
      this.$emit('cancel');
    },
  },
}
</script>

<style scoped>
  .team-in-match-column {
    vertical-align: bottom;
  }
</style>
