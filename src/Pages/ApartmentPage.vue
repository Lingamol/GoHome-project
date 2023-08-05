<template>
  <ContentApp>
    <main class="apartment-page">
      <!-- <h1>Apartment Page!</h1>
      <h2>{{ this.$route.query.name }}</h2> -->
      <!-- <h2>Апартаменти № {{ apartment.title }}</h2> -->
      <ApartmentsMainInfo :apartment="apartment" class="apartment-page__main-info" />
      <div class="apartment-page__bar">
        <ApartmentsOwner :owner="apartment.owner" class="apartment-page__owner" />
        <ReviewsApartments :reviews="reviews" class="apartment-page__reviews" />
      </div>
    </main>
  </ContentApp>
</template>

<script>
import ContentApp from '../components/Shared/ContentApp';
import { apartments } from '../components/Apartment/apartments';
import ApartmentsMainInfo from '../components/Apartment/ApartmentsMainInfo';
import ApartmentsOwner from '../components/Apartment/ApartmentsOwner';
import ReviewsApartments from '../components/Reviews/ReviewsApartments';
import { reviews } from '../components/Reviews/reviews.js';
export default {
  name: 'ApartmentPage',
  components: { ContentApp, ApartmentsMainInfo, ApartmentsOwner, ReviewsApartments },
  computed: {
    apartment() {
      return apartments.find(apartment => apartment.id === this.$route.params.id);
    },
  },
  data() {
    return { reviews };
  },
  // mounted() {
  //   console.log('this.$router :', this.$router);
  //   console.log('this.$route:', this.$route);
  //   console.log('this.$route.params.id', this.$route.params.id);
  //   console.log('this.$route.query.name', this.$route.query.name);
  //   console.log('this.apartment', this.apartment);
  // },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 72px;
  display: flex;
  align-items: flex-start;
  &__main-info {
    margin-right: 30px;
  }
  &__bar {
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
