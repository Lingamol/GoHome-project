<template>
  <div class="reviews-heading">
    <h3 class="reviews-heading__title">Суммарный рейтинг</h3>
    <div class="reviews-heading__rating">
      <p class="reviews-heading__count">{{ countReviews }} {{ pluralText(countReviews) }}</p>
      <StarRating :rating="averageRating" />
    </div>
  </div>
</template>

<script>
import StarRating from '../../StarRating/StarRating';

export default {
  name: 'ReviewsHeading',
  props: {
    countReviews: { type: Number, requaired: true },
    averageRating: { type: Number, requaired: true },
  },
  components: { StarRating },
  methods: {
    pluralText(quantity) {
      return quantity === 1 ? 'отзыв' : quantity <= 4 ? 'отзыва' : 'отзывов';
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 7px;
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__count {
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
