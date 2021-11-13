<template>
  <div id="app" class="columns is-multiline">
    <Header class="column is-full" />
    <Sidebar class="column is-one-quarter" />    
    <div class="app_page--content column is-three-quarters">
      <router-view></router-view>
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

<style>
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
