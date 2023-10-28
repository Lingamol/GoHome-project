import axios from '@/utils/axios';
const loginUser = payload => {
  return axios.post('/users/login', payload);
};
const registerUser = payload => {
  return axios.post('/users/register', payload);
};
const logout = () => {
  return axios.post('/users/logout');
};
const currentUser = () => {
  return axios.post('/users/current');
};

export { loginUser, registerUser, logout, currentUser };
