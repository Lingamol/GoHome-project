import { getOrders, removeOrder, bookApartment } from '@/services/orders.services';

const initialState = {
  ordersList: [],
  isLoadingOrders: false,
  errorOrders: null,
  isLoadingRemoveOrder: false,
  errorRemoveOrder: null,
  isLoadingAddOrder: false,
  errorAddOrder: null,
};

export default {
  namespaced: true,
  state: { ...initialState },
  mutations: {
    /////////////////////get/////////////////////////////
    setOrdersList(state, orders) {
      state.ordersList = orders;
    },
    setIsLoadingOrders(state, isLoading) {
      state.isLoadingOrders = isLoading;
    },
    setErrorOrders(state, error) {
      state.errorOrders = error;
    },
    ///////////////////////remove////////////////////////
    setRemoveOrder(state, orderId) {
      console.log('list', state.ordersList);
      const index = state.ordersList.findIndex(order => order.id === orderId);
      state.ordersList.splice(index, 1);
    },
    setIsLoadinRemoveOrder(state, isLoading) {
      state.isLoadingRemoveOrder = isLoading;
    },
    setErrorRemoveOrder(state, error) {
      state.errorRemoveOrder = error;
    },
    ///////////////////////add//////////////////////////////////
    AddOrder(state, payload) {
      state.ordersList.unshift(payload);
    },
    setIsLoadingAddOrder(state, isLoading) {
      state.isLoadingAddOrder = isLoading;
    },
    setErrorAddOrder(state, error) {
      state.errorAddOrder = error;
    },
  },
  actions: {
    async getOrdersList(context, payload) {
      const { commit } = context;
      try {
        commit('setErrorOrders', null);
        commit('setIsLoadingOrders', true);
        const { data } = await getOrders(payload);
        commit('setOrdersList', data);
      } catch (error) {
        commit('setErrorOrders', error);
      } finally {
        commit('setIsLoadingOrders', false);
      }
    },
    async removeOrder(context, payload) {
      const { commit } = context;
      try {
        commit('setErrorRemoveOrder', null);
        commit('setIsLoadinRemoveOrder', true);
        await removeOrder(payload);
        commit('setRemoveOrder', payload);
      } catch (error) {
        commit('setErrorRemoveOrder', error);
      } finally {
        commit('setIsLoadinRemoveOrder', false);
      }
    },
    async addOrder(context, payload) {
      const { body, apartment } = payload;
      const { commit } = context;
      try {
        commit('setErrorAddOrder', null);
        commit('setIsLoadingAddOrder', true);
        await bookApartment(body);
        commit('AddOrder', apartment);
      } catch (error) {
        commit('setErrorAddOrder', error);
      } finally {
        commit('setIsLoadingAddOrder', false);
      }
    },
  },
  getters: {
    getStateOrders(state) {
      return state.ordersList;
    },
    getStateLoadingOrders(state) {
      return state.isLoadingOrders;
    },
    getStateErrorOrders(state) {
      return state.errorOrders;
    },

    getStatesLoadingRemoveOrder(state) {
      return state.isLoadingRemoveOrder;
    },
    getStateErrorRemoveOrder(state) {
      return state.errorRemoveOrder;
    },

    getStateErrorAddOrder(state) {
      return state.errorAddOrder;
    },
    getStateIsLoadingAddOrder(state) {
      return state.isLoadingAddOrder;
    },
  },
};
