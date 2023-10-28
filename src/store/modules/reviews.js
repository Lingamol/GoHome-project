import { getReviews, removeReview, addReview } from '@/services/reviews.services';

const initialState = {
  reviewsList: [],
  isLoadingReviews: false,
  errorReviews: null,
};

export default {
  namespaced: true,
  state: { ...initialState },
  mutations: {
    /////////////////////get/////////////////////////////
    setReviewsList(state, reviews) {
      state.reviewsList = reviews;
    },
    setIsLoadingReviews(state, isLoading) {
      state.isLoadingReviews = isLoading;
    },
    setErrorReviews(state, error) {
      state.errorReviews = error;
    },
    ///////////////////////add//////////////////////////////////
    AddReview(state, payload) {
      state.reviewList.unshift(payload);
    },
    setIsLoadingAddReview(state, isLoading) {
      state.isLoadingAddReview = isLoading;
    },
    setErrorAddReview(state, error) {
      state.errorAddReview = error;
    },
  },
  actions: {
    async getReviewsList(context, payload) {
      const { commit } = context;
      try {
        commit('setErrorReviews', null);
        commit('setIsLoadingReviews', true);
        const { data } = await getReviews(payload);
        commit('setReviewsList', data);
      } catch (error) {
        commit('setErrorReviews', error);
      } finally {
        commit('setIsLoadingReviews', false);
      }
    },
    async removeReview(context, payload) {
      const { commit } = context;
      try {
        commit('setErrorRemoveReview', null);
        commit('setIsLoadinRemoveReview', true);
        await removeReview(payload);
        commit('setRemoveReview', payload);
      } catch (error) {
        commit('setErrorRemoveReview', error);
      } finally {
        commit('setIsLoadinRemoveReview', false);
      }
    },
    async addReview(context, payload) {
      const { body, apartment } = payload;
      const { commit } = context;
      try {
        commit('setErrorAddReview', null);
        commit('setIsLoadingAddReview', true);
        await addReview(body);
        commit('AddReview', apartment);
      } catch (error) {
        commit('setErrorAddReview', error);
      } finally {
        commit('setIsLoadingAddReview', false);
      }
    },
  },
  getters: {
    getStateReviews(state) {
      return state.reviewsList;
    },
    getStateLoadingReviews(state) {
      return state.isLoadingReviews;
    },
    getStateErrorReviews(state) {
      return state.errorReviews;
    },

    getStatesLoadingRemoveReview(state) {
      return state.isLoadingRemoveReview;
    },
    getStateErrorRemoveReviews(state) {
      return state.errorRemoveReview;
    },

    getStateErrorAddReviews(state) {
      return state.errorAddReview;
    },
    getStateIsLoadingAddReview(state) {
      return state.isLoadingAddReview;
    },
  },
};
