<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from './common/HeaderBar'
export default {
  name: 'App',
  components: {
    HeaderBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
