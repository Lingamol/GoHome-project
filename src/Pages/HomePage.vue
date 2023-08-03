<template>
  <!-- <main class="homepage"> -->
  <ContentApp>
    <ApartmentFilterForm @submit="logger" :optionItems="cities" :resetFilter="resetFilter" />
    <ApartmentsList
      :items="apartmentsToShow(apartments, filter)"
      :title="'Подборка согласно выбора'"
    >
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :id="apartment.id"
          :key="apartment.id"
          :raiting="apartment.raiting"
          :description="apartment.description"
          :price="apartment.price"
          :imgSrc="apartment.imgSrc"
        /> </template
    ></ApartmentsList>
  </ContentApp>
  <!-- </main> -->
</template>
<script>
import ContentApp from '../components/Shared/ContentApp';
import ApartmentFilterForm from '../components/Apartment/ApartmentFilterForm';
import ApartmentsList from '../components/Apartment/ApartmentsList';
import ApartmentsItem from '../components/Apartment/ApartmentsItem';
import { apartments } from '../components/Apartment/apartments';

export default {
  name: 'HomePage',
  components: {
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
    resetFilter() {
      this.filter = { city: '', price: '' };
    },
  },
};
</script>
<style module></style>
