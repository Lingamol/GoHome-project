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
export { loginUser, registerUser, logout };
