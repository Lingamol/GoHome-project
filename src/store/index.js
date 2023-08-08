import Vuex from 'vuex';
import Vue from 'vue';
import authModule from './modules/auth';
import apartmentsModule from './modules/apartments';
import createPersistedState from 'vuex-persistedstate';
// Vue.config.devtools = true;
Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.use(Vuex);
const dataState = createPersistedState({ paths: ['auth.token'] });

const store = new Vuex.Store({
  modules: { auth: authModule, apartments: apartmentsModule },
  plugins: [dataState],
});
export default store;
