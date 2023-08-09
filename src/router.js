import VueRouter from 'vue-router';
// import HomePage from './Pages/HomePage.vue';
// import ApartmentPage from './Pages/ApartmentPage.vue';
// import ErrorPage from './Pages/ErrorPage.vue';
// import LoginPage from './Pages/LoginPage.vue';
// import RegisterPage from './Pages/RegisterPage.vue';
// import TestPage from './Pages/TestPage.vue';
// import OrdersPage from './Pages/OrdersPage.vue';
import store from './store';

const HomePage = () => import('./Pages/HomePage.vue');
const ApartmentPage = () => import('./Pages/ApartmentPage.vue');
const ErrorPage = () => import('./Pages/ErrorPage.vue');
const LoginPage = () => import('./Pages/LoginPage.vue');
const RegisterPage = () => import('./Pages/RegisterPage.vue');
const TestPage = () => import('./Pages/TestPage.vue');
const OrdersPage = () => import('./Pages/OrdersPage.vue');

const routes = [
  { path: '/', component: HomePage, name: 'home-page' },
  { path: '/login', component: LoginPage, name: 'login-page', hideForAuth: true },
  { path: '/register', component: RegisterPage, name: 'register-page', hideForAuth: true },
  { path: '/orders', component: OrdersPage, name: 'orders-page', meta: { requiresAuth: true } },
  {
    path: '/apartments/:id',
    component: ApartmentPage,
    name: 'apartment',
    meta: { requiresAuth: true },
  },
  { path: '/test', component: TestPage, name: 'test-page' },
  { path: '*', component: ErrorPage, name: 'error-page' },
];
const router = new VueRouter({ routes, mode: 'history' });
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/isLoggedIn'];
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      // next('/login');
      next({ name: 'login-page' });
    }
  }
  if (to.matched.some(record => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      // next('/');
      next({ name: 'home-page' });
    }
  }
  next();
});

export default router;
