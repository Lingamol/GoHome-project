<template>
  <section class="reviews">
    <ReviewsHeading
      :countReviews="reviews.length"
      :averageRaiting="averageRaiting(reviews)"
      class="reviews__header"
    />
    <ul>
      <ReviewsItem
        v-for="review in reviews"
        :key="review.id"
        :review="review"
        class="reviews__item"
      />
    </ul>
    <ReadMoreBtn @click="handleReadMore" class="reviews__button">Читать еще...</ReadMoreBtn>
  </section>
</template>

<script>
import ReviewsItem from './ReviewItem/ReviewItem.vue';
import ReviewsHeading from './ReviewsHeading/ReviewsHeading.vue';
import ReadMoreBtn from '../ButtonMain/ButtonMain';

export default {
  name: 'ReviewsApartments',
  components: { ReviewsItem, ReviewsHeading, ReadMoreBtn },
  props: { reviews: { type: Array, require: true } },
  data() {
    return { items: 4 };
  },
  //   computed: {
  //     totalRaiting() {
  //       return (
  //         reviews.reduce((total, review) => {
  //           return total + review.raiting;
  //         }, 0) / reviews.length
  //       );
  //     },

  methods: {
    handleReadMore() {
      alert('ReadMore Clicked');
    },
    averageRaiting(reviews) {
      return (
        reviews.reduce((total, review) => {
          return total + review.raiting;
        }, 0) / reviews.length
      );
    },
  },
  //   mounted() {
  //     console.log('reviews', this.reviews);
  //   },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.reviews {
  &__header {
    padding: 20px 24px 10px 20px;
    background: $secondary-bg-color;
  }

  &__button {
    width: 100%;
    padding: 10px 20px 14px;
    background: $secondary-bg-color;
    color: $text-color-black;
  }
}
</style>
