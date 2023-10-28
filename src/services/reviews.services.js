import axios from '@/utils/axios';
const addReview = payload => {
  return axios.post(`/apartments/${payload.id}/reviews`, payload.body);
};
const removeReview = payload => {
  return axios.delete(`/orders/${payload.apartmentId}/reviews/${payload.reviewId}`);
};
const getReviews = id => {
  return axios.get(`/apartments/${id}/reviews`);
};
export { getReviews, addReview, removeReview };
