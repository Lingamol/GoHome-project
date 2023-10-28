const initialState = {
  apartmentsFilter: { price: 0, location: { city: '' } },
};

export default {
  namespaced: true,
  state: { ...initialState },
  mutations: {
    setApartmentsFilter(state, payload) {
      const { price, location } = payload;
      state.apartmentsFilter.price = price;
      state.apartmentsFilter.location.city = location.city;
    },
    // setApartmentsFilterLocation(state, location) {

    // },
  },

  getters: {
    getApartmentsFilter(state) {
      return state.apartmentsFilter;
    },
    // getApartmentsFilterLocation(state) {
    //   return state.location.city;
    // },
  },
};
