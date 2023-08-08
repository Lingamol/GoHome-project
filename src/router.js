import VueRouter from 'vue-router';
import HomePage from './Pages/HomePage.vue';
import ApartmentPage from './Pages/ApartmentPage.vue';
import ErrorPage from './Pages/ErrorPage.vue';
import LoginPage from './Pages/LoginPage.vue';
import RegisterPage from './Pages/RegisterPage.vue';
import TestPage from './Pages/TestPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home-page' },
  { path: '/login', component: LoginPage, name: 'login-page' },
  { path: '/register', component: RegisterPage, name: 'register-page' },
  { path: '/apartments/:id', component: ApartmentPage, name: 'apartment' },
  { path: '/test', component: TestPage, name: 'test-page' },
  { path: '*', component: ErrorPage, name: 'error-page' },
];
const router = new VueRouter({ routes, mode: 'history' });

export default router;
