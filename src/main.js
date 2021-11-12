import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from '@components/Home.vue';
import FileReader from '@components/FileReader.vue'
import Buefy from 'buefy';


Vue.use(VueRouter);
Vue.use(Buefy);
Vue.config.productionTip = false;

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/file', name: 'file', component: FileReader }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
