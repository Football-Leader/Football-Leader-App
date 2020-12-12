<template>
  <div class="menu">
    <router-link :to="{ name: 'players' }" v-slot="{ navigate }">
      <a-button type="primary" block @click="navigate" class="button">
        Игроки
      </a-button>
    </router-link>

    <router-link :to="{ name: 'game' }" v-slot="{ navigate }">
      <a-button block @click="navigate" class="button">
        Начать новый день
      </a-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'menu-view',
  }
</script>

<style scoped>
  .menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    margin: 100px 0;
    align-items: center;
  }

  .button {
    margin: 10px 0;
  }
</style>
