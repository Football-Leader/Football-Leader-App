<template>
  <button class="start-the-game-btn" @click="$emit('click')">
    <play-circle-outline-icon fill-color="white" />
    <div>Начать игру</div>
  </button>
</template>

<script>
import PlayCircleOutlineIcon from 'vue-material-design-icons/PlayCircleOutline.vue';

export default {
  name: 'start-game-btn',
  components: {
    PlayCircleOutlineIcon,
  },
}
</script>

<style scoped>
.start-the-game-btn {
  margin-top: 50px;
  padding: 8px 2px;
  background: #1890ff;
  color: white;
  border: 1px solid #1890ff;
  border-radius: 2px;
}
</style>
