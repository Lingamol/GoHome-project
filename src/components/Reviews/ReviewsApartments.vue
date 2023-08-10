<template>
  <section class="reviews">
    <ReviewsHeading
      :countReviews="amountReviews"
      :averageRating="averageRating"
      class="reviews__header"
    />
    <ul>
      <ReviewsItem
        v-for="review in currentReviews"
        :key="review.id"
        :review="review"
        class="reviews__item"
      />
    </ul>
    <ReadMoreBtn @click="toggleRewievs" class="reviews__button">{{ buttonText }}</ReadMoreBtn>
  </section>
</template>

<script>
import ReviewsItem from './ReviewItem/ReviewItem.vue';
import ReviewsHeading from './ReviewsHeading/ReviewsHeading.vue';
import ReadMoreBtn from '../ButtonMain/ButtonMain';
import { REVIEWS_LIMIT } from '../../variables.js';

export default {
  name: 'ReviewsApartments',
  components: { ReviewsItem, ReviewsHeading, ReadMoreBtn },
  props: { reviews: { type: Array, requaired: true } },

  data() {
    return { REVIEWS_LIMIT, reviwsLimit: REVIEWS_LIMIT };
  },
  computed: {
    averageRating() {
      // return (
      //   this.reviews.reduce((total, review) => {
      //     return total + review.rating;
      //   }, 0) / this.reviews.length
      // );
      return 1;
    },
    amountReviews() {
      return this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviwsLimit);
    },
    buttonText() {
      return this.reviwsLimit === this.reviews.length ? 'Свернуть' : 'Читать еще...';
    },
  },
  methods: {
    // handleReadMore() {
    //   alert('ReadMore Clicked');
    // },
    toggleRewievs() {
      this.reviwsLimit === this.reviews.length
        ? (this.reviwsLimit = REVIEWS_LIMIT)
        : (this.reviwsLimit = this.reviews.length);
    },
  },
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
    font-family: inherit;
  }
}
</style>
