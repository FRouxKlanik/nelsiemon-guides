import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from '@components/Home.vue';
import FileReader from '@components/FileReader.vue'
import Buefy from 'buefy';
import "buefy/dist/buefy.css";
import config from '@config/content.config';

Vue.use(VueRouter);
Vue.use(Buefy);
Vue.config.productionTip = false;

const rootPath = process.env.NODE_ENV === 'production' ? '/guides' : '/';

const homeRoute = { path: '/', name: 'home', component: Home };

// Add a new route to the router for each page of the category
const parsePages = (currentRoutes, page) => {
  const routeToAdd = { path: `/${page.category}/${page.name}`, name: page.name, component: FileReader, props: { filename: page.name } };
  const newRoutes = [...currentRoutes];
  newRoutes.push(routeToAdd);
  return newRoutes;
}

// Calls the parsePages method for each category of the config object
const parseCategory = (currentRoutes, category) => {
  return category.pages.reduce(parsePages, currentRoutes);
}

const routes = config.reduce(parseCategory, [homeRoute]);

const router = new VueRouter({
  routes,
  mode: 'history',
  base: rootPath,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
