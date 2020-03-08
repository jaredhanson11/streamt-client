<template>
  <b-container fluid>
    <b-row class="flex-nowrap" id="app">
      <TheSidenav />
      <TheBody />
    </b-row>
  </b-container>
</template>

<script>
import TheSidenav from '@/components/common/TheSidenav.vue'
import TheBody from '@/components/common/TheBody.vue'
export default {
  name: 'App',
  components: { TheSidenav, TheBody }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  overflow: hidden;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
}
</style>
