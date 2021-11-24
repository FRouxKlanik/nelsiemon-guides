<template>
  <div id="app">
    <div class="columns">
      <Header class="column is-full" />
    </div>
    <div class="columns">
      <Sidebar class="column is-one-quarter" />    
      <div class="app_page--content column is-three-quarters">
        <router-view></router-view>
      </div>
    </div>    
  </div>
</template>

<script>
import Header from '@components/Header.vue';
import Sidebar from '@components/Sidebar.vue';

export default {
  name: 'App',
  components: { Header, Sidebar },
}
</script>

<style lang="scss">
body {
  background-image: url('./assets/img/texture_crystal_background.jpg');
  margin: 0px !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 1200px;
  padding: 0px 0px 12px 0px;
  margin: auto;
  background-color: white;
  min-height: 1080px;
}

#app h1 {
  text-align: center;
}
</style>
