import { loginUser, registerUser } from '@/services/auth.services';

const initialState = { user: '', token: '' };

export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    },
  },
  mutations: {
    // setUserData(state, payload) {
    //   state.user = payload;
    // },
    setUserData(state, userData) {
      state.user = userData;
    },

    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login(context, payload) {
      const { commit } = context;
      const { data } = await loginUser(payload);
      const { user, token } = data;
      commit('setUserData', user);
      commit('setToken', token);
    },
    async registerUser(context, payload) {
      const { commit } = context;
      const { data } = await registerUser(payload);
      const { user, token } = data;
      commit('setUserData', user);
      commit('setToken', token);
    },
  },
};
