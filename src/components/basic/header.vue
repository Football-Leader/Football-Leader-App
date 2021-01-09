<template>
  <header class="app-header">
    <slot />
  </header>
</template>

<script>
  export default {
    name: 'app-header',
  }
</script>

<style scoped>
  .app-header {
    height: var(--header-height);
    background: #001529;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
