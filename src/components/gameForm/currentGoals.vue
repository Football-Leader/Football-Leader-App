<template>
  <table style="width: 100%; table-layout: fixed">
    <colgroup>
      <col span="1" style="width: 45%;">
      <col span="1" style="width: 10%;">
      <col span="1" style="width: 45%;">
    </colgroup>
    <tr>
      <td class="goal-item-cell">
        <div v-for="goal in firstTeamGoals" :key="goal.id">
          <goal-item :goal="goal" />
          <close-icon :size="16" fill-color="red" class="close" @click="handleCancelation(goal)" />
        </div>
      </td>
      <td></td>
      <td class="goal-item-cell">
        <div v-for="goal in secondTeamGoals" :key="goal.id">
          <goal-item :goal="goal" />
          <close-icon :size="16" fill-color="red" class="close" @click="handleCancelation(goal)" />
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import GoalItem from '../primitives/goalItem.vue';

import { mapState, mapMutations } from 'vuex';
import CloseIcon from 'vue-material-design-icons/Close.vue';

import { clone } from '@/utils/clone';

export default {
  name: 'current-goals',
  components: {
    GoalItem,
    CloseIcon,
  },
  computed: {
    ...mapState(['currentGameDay', 'players']),
    firstTeamGoals() {
      return this.currentGameDay.currentGame?.firstTeam.goals;
    },
    secondTeamGoals() {
      return this.currentGameDay.currentGame?.secondTeam.goals;
    },
  },
  methods: {
    ...mapMutations(['initFirstGame']),
    handleCancelation(goal) {
      const author = this.players.find(p => p.id === goal.author)?.name;

      const onOk = async () => {
        const updatedGame = clone(this.currentGameDay.currentGame);
        updatedGame.firstTeam.goals = updatedGame.firstTeam.goals.filter(g => g.id !== goal.id);
        updatedGame.secondTeam.goals = updatedGame.secondTeam.goals.filter(g => g.id !== goal.id);

        await this.initFirstGame({ game: updatedGame });
      };

      this.$confirm({
        title: `Вы уверены, что нужно отменить гол, который забил ${author}?`,
        okText: 'Да, отменяем',
        cancelText: `Нет, ${author} правда забил`,
        onOk,
      });
    },
  },
}
</script>

<style scoped>
.goal-item-cell > div {
  display: flex;
  align-items: center;
  width: 100%;
}

.goal-item-cell > div > .close {
  transform: translate(4px, 4px);
}
</style>
