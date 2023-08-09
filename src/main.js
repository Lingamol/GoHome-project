import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import Notifications from 'vue-notification';
import store from './store/index';
import './assets/scss/index.scss';
Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Notifications);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
