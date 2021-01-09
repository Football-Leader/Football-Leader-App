<template>
  <div id="app">
    <a-layout>
      <app-header>
        Футбольный предводитель
      </app-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>

import AppHeader from './components/basic/header';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
  created() {
    window.vueRouter = this.$router;
    console.log('this', this);
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
}

.layout-header {
  color: white;
}

:root {
  --header-height: 64px;
}
</style>
