<template>
  <SectionSpacer class="apartment-page">
    <ContainerApp class="apartment-page__container">
      <ErrorMessage
        v-if="isErrorApartment"
        :message="isErrorApartment"
        class="apartment-page__error"
      />
      <CircleLoader
        v-if="isLoadingApartment"
        class="apartment-page__loader"
        :width="STYLE.SIZE.PAGE_LOADER_SIZE"
        :height="STYLE.SIZE.PAGE_LOADER_SIZE"
        :color="STYLE.COLORS.MAIN_COLOR"
      />
      <div v-if="!isLoadingApartment && !isErrorApartment" class="apartment-page-content">
        <!-- <LoaderApp v-if="!apartment" class="loader" /> -->
        <main class="apartment-page">
          <ApartmentsMainInfo :apartment="apartment" class="apartment-page__main-info" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner :owner="apartment.owner" class="apartment-page__owner" />
            <ReviewsApartments :reviews="reviews" class="apartment-page__reviews" />
          </div>
        </main>
      </div>
    </ContainerApp>
  </SectionSpacer>
</template>

<script>
// import ContentApp from '../components/Shared/ContentApp';
// import { apartments } from '../components/Apartment/apartments';
import SectionSpacer from '../components/Shared/SectionWithHeaderSpacer.vue';
import ContainerApp from '../components/Shared/ContainerApp.vue';
import ApartmentsMainInfo from '../components/Apartment/ApartmentsMainInfo';
import ApartmentsOwner from '../components/Apartment/ApartmentsOwner';
import ReviewsApartments from '../components/Reviews/ReviewsApartments';
import { reviews } from '../components/Reviews/reviews.js';
// import { getApartmentsById } from '@/services/apartments.services';

import { mapActions, mapGetters } from 'vuex';
import CircleLoader from '../components/Loaders/CircleLoader';
import ErrorMessage from '../components/Shared/ErrorMessage.vue';
import { STYLE } from '../variables';
export default {
  name: 'ApartmentPage',
  // import { apartments } from '../components/Apartment/apartments';

  components: {
    ApartmentsMainInfo,
    ReviewsApartments,
    ApartmentsOwner,

    SectionSpacer,
    ContainerApp,
    CircleLoader,
    ErrorMessage,
  },
  // computed: {
  //   apartment() {
  //     return apartments.find(apartment => apartment.id === this.$route.params.id);
  //   },
  // },
  data() {
    return { reviews, STYLE };
  },
  methods: {
    ...mapActions('apartments', ['getSelectedApartment']),
  },
  computed: {
    ...mapGetters('apartments', [
      'getStateSelectedtApartment',
      'getStateIsLoadingSelectedApartment',
      ' getStateErrorSelectedApatrtment',
    ]),

    apartment() {
      // return this.$store.state.getters['apartments/getApartments'];
      return this.getStateSelectedtApartment;
    },
    isLoadingApartment() {
      // return this.$store.state.apartments.isLoadingSelectedApartment;
      return this.getStateIsLoadingSelectedApartment;
    },
    isErrorApartment() {
      // return this.$store.state.apartments.errorSelectedApartment;
      return this.getStateErrorSelectedApatrtment;
    },
  },

  beforeCreate() {
    // console.log('beforeCreate this.apartment ', this.apartment);
  },
  async created() {
    await this.getSelectedApartment(this.$route.params.id);
    // try {
    //   const { data } = await getApartmentsById(this.$route.params.id);
    //   console.log(data);
    //   this.apartment = data;
    // } catch (error) {
    //   console.error(error);
    // }
    // console.log('Created this.apartment ', this.apartment);
  },
  beforeMount() {
    // console.log('beforeMount el', this.$el);
  },
  mounted() {
    // console.log('Mount el', this.$el);
    // console.log('this.$router :', this.$router);
    // console.log('this.$route:', this.$route);
    // console.log('this.$route.params.id', this.$route.params.id);
    // console.log('this.$route.query.name', this.$route.query.name);
    // console.log('this.apartment', this.apartment);
  },
  beforeDestroy() {
    // console.log('beforeDestroy el', this.$el);
  },
  destroyed() {
    // console.log('destroy el', this.$el);
  },
};
</script>

<style lang="scss" scoped>
.apartment-page-content {
  padding-top: 60px;
}

.apartment-page {
  padding-bottom: 72px;
  display: flex;
  align-items: flex-start;

  &__container {
    /* position: relative; */
  }
  &__error,
  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__main-info {
    margin-right: 30px;
  }
  &__additional-info {
    display: flex;
    flex-direction: column;
  }
  &__owner {
    min-width: 350px;
  }
  &__reviews {
    margin-top: 20px;
    max-width: 350px;
  }
}
</style>
