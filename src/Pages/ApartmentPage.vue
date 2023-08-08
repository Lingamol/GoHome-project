<template>
  <SectionSpacer
    ><ContainerApp>
      <div class="apartment-page-content">
        <LoaderApp v-if="!apartment" class="loader" />
        <main v-if="apartment" class="apartment-page">
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
import { getApartmentsById } from '@/services/apartments.services';
import LoaderApp from '../components/Loader/LoaderApp';
export default {
  name: 'ApartmentPage',
  // import { apartments } from '../components/Apartment/apartments';
  // import { apartments } from '../components/Apartment/apartments';
  components: {
    ApartmentsMainInfo,
    ReviewsApartments,
    ApartmentsOwner,
    LoaderApp,
    SectionSpacer,
    ContainerApp,
  },
  // computed: {
  //   apartment() {
  //     return apartments.find(apartment => apartment.id === this.$route.params.id);
  //   },
  // },
  data() {
    return { reviews, apartment: null };
  },
  beforeCreate() {
    console.log('beforeCreate this.apartment ', this.apartment);
  },
  async created() {
    try {
      const { data } = await getApartmentsById(this.$route.params.id);
      console.log(data);
      this.apartment = data;
    } catch (error) {
      console.error(error);
    }
    // console.log('Created this.apartment ', this.apartment);
  },
  beforeMount() {
    console.log('beforeMount el', this.$el);
  },
  mounted() {
    console.log('Mount el', this.$el);
    // console.log('this.$router :', this.$router);
    // console.log('this.$route:', this.$route);
    // console.log('this.$route.params.id', this.$route.params.id);
    // console.log('this.$route.query.name', this.$route.query.name);
    // console.log('this.apartment', this.apartment);
  },
  beforeDestroy() {
    console.log('beforeDestroy el', this.$el);
  },
  destroyed() {
    console.log('destroy el', this.$el);
  },
};
</script>

<style lang="scss" scoped>
.apartment-page-content {
  padding-top: 60px;
  position: relative;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
}
.apartment-page {
  padding-bottom: 72px;
  display: flex;
  align-items: flex-start;
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
