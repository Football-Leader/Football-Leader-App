<template>
  <div class="control-panel-btn" :style="{ 'border-color': color }">
    <component :is="icon" :fill-color="color" />
    <span :style="{ color }">{{label}}</span>
  </div>
</template>

<script>
export default {
  name: 'control-panel-btn',
  props: {
    label: String,
    color: String,
    icon: Object,
  },
}
</script>

<style scoped>
  .control-panel-btn {
    display: flex;
    align-items: center;
    margin: 0 5px;
    background: white;
    padding: 5px;
    border: 1px solid;
    border-radius: 2px;
  }

  .control-panel-btn span {
    margin-left: 5px;
  }
</style>
