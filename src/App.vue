<template>
  <div id="app">
    <a-layout>
      <a-layout-header class="layout-header">
        Футбольный предводитель
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
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
</style>
