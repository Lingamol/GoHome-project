<template>
  <SectionSpacer class="homepage">
    <ContainerApp class="homepage__container">
      <ErrorMessage
        v-if="errorApatrtmentsList"
        :message="errorApatrtmentsList"
        class="homepage__error"
      />
      <CircleLoader
        v-if="isLoadingApartmentsList"
        class="homepage__loader"
        :width="STYLE.SIZE.PAGE_LOADER_SIZE"
        :height="STYLE.SIZE.PAGE_LOADER_SIZE"
        :color="STYLE.COLORS.MAIN_COLOR"
      />
      <main v-if="!isLoadingApartmentsList && !errorApatrtmentsList" class="homepage__content">
        <ApartmentFilterForm
          @submit="logger"
          :optionItems="cities"
          :resetFilter="resetFilter"
          class="homepage__filter"
        />

        <ApartmentsList :items="apartmentsToShow" :title="'Подборка согласно выбора'">
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
import CircleLoader from '../components/Loaders/CircleLoader';
import ErrorMessage from '../components/Shared/ErrorMessage.vue';
import { STYLE } from '../variables';
// import { apartments } from '../components/Apartment/apartments';
// import { getApartmentsList } from '../services/apartments.services';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  components: {
    SectionSpacer,
    ContainerApp,
    ApartmentFilterForm,
    ApartmentsList,
    ApartmentsItem,
    CircleLoader,
    ErrorMessage,
  },
  data() {
    return {
      STYLE,
      apartments: [],
      optionsCities: [],
      select: '',
      text: '',
      filter: { city: '', price: '' },
    };
  },
  computed: {
    ...mapGetters('apartments', [
      'getStateCities',
      'getStateApartments',
      'getStateIsLoadingApartmentsList',
      'getStateErrorApatrtmentsList',
    ]),
    apartmentsList() {
      return this.getStateApartments;
    },
    isLoadingApartmentsList() {
      // return this.$store.state.apartments.isLoadingApartmentsList;
      return this.getStateIsLoadingApartmentsList;
    },
    errorApatrtmentsList() {
      // return this.$store.state.apartments.errorApatrtmentsList;
      return this.getStateErrorApatrtmentsList;
    },
    cities() {
      return [{ value: '', label: 'Город', selected: true }, ...this.getStateCities];
    },
    apartmentsToShow() {
      // const apartments = this.$store.state.apartments.apartmentsList;
      const apartments = this.apartmentsList;
      // console.log('ap', apartments);
      const { price, city } = this.filter;
      if (!price && !city) {
        return apartments;
      }

      return city && price
        ? apartments
            .filter(item => item.location.city === this.filter.city)
            .filter(item => item.price >= Number(price))
        : !city && price
        ? apartments.filter(item => item.price >= Number(price))
        : apartments.filter(item => item.location.city === this.filter.city);
    },
  },
  methods: {
    ...mapActions('apartments', ['getApartmentsList']),

    handleClick() {
      console.log('EmitClick');
    },
    logger(value) {
      console.log('filter before', this.filter);
      this.filter = { city: value.city, price: value.price };
      console.log('Form data', value);
      console.log('filter after', this.filter);
    },
    // apartmentsToShow(items, filter) {
    //   const { price, city } = filter;
    //   if (!price && !city) {
    //     return items;
    //   }

    //   return city && price
    //     ? items
    //         .filter(item => item.location.city === filter.city)
    //         .filter(item => item.price >= Number(price))
    //     : !city && price
    //     ? items.filter(item => item.price >= Number(price))
    //     : items.filter(item => item.location.city === filter.city);
    // },
    resetFilter() {
      this.filter = { city: '', price: '' };
    },
  },
  async created() {
    /////////////////////////////////////////////////////////////////////////////
    // try {
    //   const { data } = await getApartmentsList();
    //   this.apartments = data;
    //   this.optionsCities = data
    //     .map(item => item.location.city)
    //     .filter((city, index, array) => array.indexOf(city) === index);
    //   console.log('get apartments data ', data);
    //   console.log('get cities ', this.optionsCities);
    // } catch (error) {
    //   console.error(error);
    // }
    ///////////////////////////////////////////////////////////////////////////////
    await this.getApartmentsList({});

    this.optionsCities = this.$store.state.apartments.apartmentsList
      .map(item => item.location.city)
      .filter((city, index, array) => array.indexOf(city) === index);
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.homepage {
  /* &__container {

  } */
  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
