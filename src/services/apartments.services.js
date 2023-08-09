import axios from '@/utils/axios';
const getApartmentsList = () => {
  return axios.get('/apartments');
};
const getApartmentsById = id => {
  return axios.get(`/apartments/${id}`);
};
export { getApartmentsList, getApartmentsById };
