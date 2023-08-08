import { getApartmentsList, getApartmentsById } from '@/services/apartments.services';

const initialState = {
  apartmentsList: [],
  isLoadingApartmentsList: false,
  errorApatrtmentsList: null,
  selectedApartment: {},
  isLoadingSelectedApartment: false,
  errorSelectedApartment: null,
};

export default {
  namespaced: true,
  state: { ...initialState },
  mutations: {
    setApartmentsList(state, apartments) {
      state.apartmentsList = apartments;
    },
    setIsLoadingApatrtmentsList(state, isLoading) {
      state.isLoadingApartmentsList = isLoading;
    },
    setErrorApatrtmentsList(state, error) {
      state.errorApatrtmentsList = error;
    },
    setSelectedApartment(state, apartment) {
      state.selectedApartment = apartment;
    },
    setIsLoadingSelectedApartment(state, isLoading) {
      state.isLoadingSelectedApartment = isLoading;
    },
    setErrorSelectedApartment(state, error) {
      state.errorSelectedApartment = error;
    },
  },
  actions: {
    async getApartmentsList(context, payload) {
      const { commit } = context;
      try {
        commit('setErrorApatrtmentsList', null);
        commit('setIsLoadingApatrtmentsList', true);
        const { data } = await getApartmentsList(payload);
        // const { apartments } = data;
        commit('setApartmentsList', data);
      } catch (error) {
        commit('setErrorApatrtmentsList', error);
        this.$notify({
          type: 'error',
          title: 'Произошла ошибка!',
          text: error.message,
        });
      } finally {
        commit('setIsLoadingApatrtmentsList', false);
      }
    },
    async getSelectedApartment(context, payload) {
      const { commit } = context;
      try {
        commit('setErrorSelectedApartment', null);
        commit('setIsLoadingSelectedApartment', true);
        const { data } = await getApartmentsById(payload);
        // const { apartments } = data;
        commit('setSelectedApartment', data);
      } catch (error) {
        commit('setErrorSelectedApartment', error);
        this.$notify({
          type: 'error',
          title: 'Произошла ошибка!',
          text: error.message,
        });
      } finally {
        commit('setIsLoadingSelectedApartment', false);
      }
    },
  },
  getters: {
    getStateCities(state) {
      return state.apartmentsList
        .map(item => item.location.city)
        .filter((city, index, array) => array.indexOf(city) === index);
    },
    getStateApartments(state) {
      return state.apartmentsList;
    },
    getStateIsLoadingApartmentsList(state) {
      return state.isLoadingApartmentsList;
    },
    getStateErrorApatrtmentsList(state) {
      return state.errorApatrtmentsList;
    },
    getStateSelectedtApartment(state) {
      return state.selectedApartment;
    },
    getStateIsLoadingSelectedApartment(state) {
      return state.isLoadingSelectedApartment;
    },
    getStateErrorSelectedApatrtment(state) {
      return state.errorSelectedApartment;
    },
  },
};
