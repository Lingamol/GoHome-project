<template>
  <div class="reviews-heading">
    <h3 class="reviews-heading__title">Суммарный рейтинг</h3>
    <div class="reviews-heading__raiting">
      <p class="reviews-heading__count">{{ countReviews }} отзывов</p>
      <StarRaiting :raiting="averageRaiting" />
    </div>
  </div>
</template>

<script>
import StarRaiting from '../../StarRaiting/StarRaiting';

export default {
  name: 'ReviewsHeading',
  props: {
    countReviews: { type: Number, requaire: true },
    averageRaiting: { type: Number, requaire: true },
  },
  components: { StarRaiting },
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
  &__raiting {
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
