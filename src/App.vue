<template>
  <div :id="$style.app">
    <AppHeader />
    <ContentApp>
      <ApartmentFilterForm @submit="logger" :optionItems="cities" />
      <ApartmentsList
        :items="apartmentsToShow(apartments, filter)"
        :title="'Подборка согласно выбора'"
      >
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            @click.native="handleClick"
            :id="apartment.id"
            :key="apartment.id"
            :raiting="apartment.raiting"
            :description="apartment.description"
            :price="apartment.price"
            :imgSrc="apartment.imgSrc"
          /> </template
      ></ApartmentsList>
    </ContentApp>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header/Header';
import AppFooter from './components/Footer/Footer';
import ContentApp from './components/Shared/ContentApp';
import ApartmentFilterForm from './components/Apartment/ApartmentFilterForm';
import ApartmentsList from './components/Apartment/ApartmentsList';
import ApartmentsItem from './components/Apartment/ApartmentsItem';
import { apartments } from './components/Apartment/apartments';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    ContentApp,
    ApartmentFilterForm,
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      apartments,
      select: '',
      text: '',
      filter: { city: '', price: '' },
    };
  },
  computed: {
    cities() {
      return [
        { value: '', label: 'Город', selected: true },
        'Odessa',
        'Kyiv',
        'Vinnitsya',
        'Kharkiv',
        'Lviv',
      ];
    },
  },
  methods: {
    handleClick() {
      console.log('EmitClick');
    },
    logger(value) {
      console.log('filter before', this.filter);
      this.filter = { city: value.city, price: value.price };
      console.log('Form data', value);
      console.log('filter after', this.filter);
    },
    apartmentsToShow(items, filter) {
      const { price, city } = filter;
      if (!price && !city) {
        return items;
      }
      console.log('city', city);
      console.log('type', typeof price, price);
      return city && price
        ? items
            .filter(item => item.location.city === filter.city)
            .filter(item => item.price >= Number(price))
        : !city && price
        ? items.filter(item => item.price >= Number(price))
        : items.filter(item => item.location.city === filter.city);
    },
  },
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
}
</style>
