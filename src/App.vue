<template>
  <div id="app">
    <!-- <notifications /> -->
    <NotificationsApp />
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header/Header';
import AppFooter from './components/Footer/Footer';
import NotificationsApp from './components/Notifications/NotificationsApp';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: { AppFooter, AppHeader, NotificationsApp },
  computed: { ...mapGetters('auth', ['isLoggedIn']) },
  mounted() {
    // console.log('isLoggedIn:', this.isLoggedIn);
    // console.log('isLoggedIn:', this.$store.getters['auth/isLoggedIn']);
    // console.log('store', this.$store.state.userName);
    // setTimeout(() => {
    //   this.$store.commit('changeName', 'Oleh');
    // }, 1000);
    // this.$notify({
    //   title: 'Important message',
    //   text: 'Hello user! This is a notification!',
    // });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
.content {
  flex-grow: 1;
  width: 100%;
}
</style>

<!-- <template>
  <div :id="$style.app">
    <div class="content">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
// import AppHeader from './components/Header/Header';
import AppFooter from './components/Footer/Footer';
// import ContentApp from './components/Shared/ContentApp';
// import ApartmentFilterForm from './components/Apartment/ApartmentFilterForm';
// import ApartmentsList from './components/Apartment/ApartmentsList';
// import ApartmentsItem from './components/Apartment/ApartmentsItem';
// import { apartments } from './components/Apartment/apartments';

export default {
  name: 'App',
  components: {
    // AppHeader,
    AppFooter,
    // ContentApp,
    // ApartmentFilterForm,
    // ApartmentsList,
    // ApartmentsItem,
  },
  // data() {
  //   return {
  //     apartments,
  //     select: '',
  //     text: '',
  //     filter: { city: '', price: '' },
  //   };
  // },
  // computed: {
  //   cities() {
  //     return [
  //       { value: '', label: 'Город', selected: true },
  //       'Odessa',
  //       'Kyiv',
  //       'Vinnitsya',
  //       'Kharkiv',
  //       'Lviv',
  //     ];
  //   },
  // },
  // methods: {
  //   handleClick() {
  //     console.log('EmitClick');
  //   },
  //   logger(value) {
  //     console.log('filter before', this.filter);
  //     this.filter = { city: value.city, price: value.price };
  //     console.log('Form data', value);
  //     console.log('filter after', this.filter);
  //   },
  //   apartmentsToShow(items, filter) {
  //     const { price, city } = filter;
  //     if (!price && !city) {
  //       return items;
  //     }
  //     console.log('city', city);
  //     console.log('type', typeof price, price);
  //     return city && price
  //       ? items
  //           .filter(item => item.location.city === filter.city)
  //           .filter(item => item.price >= Number(price))
  //       : !city && price
  //       ? items.filter(item => item.price >= Number(price))
  //       : items.filter(item => item.location.city === filter.city);
  //   },
  //   resetFilter() {
  //     this.filter = { city: '', price: '' };
  //   },
  // },
};
</script>
<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: aqua;
  /* padding-top: 60px; */
}
.content {
  background-color: blue;
  flex-grow: 1;
}
</style> -->
