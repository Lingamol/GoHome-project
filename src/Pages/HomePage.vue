<template>
  <SectionSpacer>
    <ContainerApp>
      <main class="homepage">
        <ApartmentFilterForm
          @submit="logger"
          :optionItems="cities"
          :resetFilter="resetFilter"
          class="homepage__filter"
        />

        <ApartmentsList
          :items="apartmentsToShow(apartments, filter)"
          :title="'Подборка согласно выбора'"
        >
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :id="apartment.id"
              :key="apartment.id"
              :rating="apartment.rating"
              :descr="apartment.descr"
              :price="apartment.price"
              :imgSrc="apartment.imgUrl"
            /> </template
        ></ApartmentsList>
      </main>
    </ContainerApp>
    <!-- </ContentApp> -->
  </SectionSpacer>
</template>
<script>
// import ContentApp from '../components/Shared/ContentApp';
import SectionSpacer from '../components/Shared/SectionWithHeaderSpacer.vue';
import ContainerApp from '../components/Shared/ContainerApp.vue';
import ApartmentFilterForm from '../components/Apartment/ApartmentFilterForm';
import ApartmentsList from '../components/Apartment/ApartmentsList';
import ApartmentsItem from '../components/Apartment/ApartmentsItem';
// import { apartments } from '../components/Apartment/apartments';
import { getApartmentsList } from '../services/apartments.services';

export default {
  name: 'HomePage',
  components: {
    SectionSpacer,
    ContainerApp,
    ApartmentFilterForm,
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      apartments: [],
      optionsCities: [],
      select: '',
      text: '',
      filter: { city: '', price: '' },
    };
  },
  computed: {
    cities() {
      return [{ value: '', label: 'Город', selected: true }, ...this.optionsCities];
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
  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
      this.optionsCities = data
        .map(item => item.location.city)
        .filter((city, index, array) => array.indexOf(city) === index);
      console.log('get apartments data ', data);
      console.log('get cities ', this.optionsCities);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
<style module>
.homepage {
}
</style>
