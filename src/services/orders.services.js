import axios from '@/utils/axios';
const bookApartment = payload => {
  return axios.post('/orders', payload);
};
const removeOrder = id => {
  return axios.delete(`/orders/${id}`);
};
const getOrders = () => {
  return axios.get('/orders');
};
export { bookApartment, getOrders, removeOrder };
