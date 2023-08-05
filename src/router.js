import VueRouter from 'vue-router';
import HomePage from './Pages/HomePage.vue';
import ApartmentPage from './Pages/ApartmentPage.vue';
import ErrorPage from './Pages/ErrorPage.vue';
import LoginPage from './Pages/LoginPage.vue';
import RegisterPage from './Pages/RegisterPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'homepage' },
  { path: '/login', component: LoginPage, name: 'loginpage' },
  { path: '/register', component: RegisterPage, name: 'registerpage' },
  { path: '/apartments/:id', component: ApartmentPage, name: 'apartment' },
  { path: '*', component: ErrorPage, name: 'error-page' },
];
const router = new VueRouter({ routes, mode: 'history' });

export default router;
