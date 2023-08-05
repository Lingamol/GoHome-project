<template>
  <li class="review-item">
    <div class="review-item__header">
      <ReviewAvatar :avatarUrl="review.avatarUrl" class="review-item__user-avatar" />
      <div class="review_item__title">
        <p class="review-item__author">{{ review.name }}</p>
        <StarRaiting :raiting="review.raiting" />
      </div>
    </div>
    <p class="review-item__text">{{ textElipses(review.text, 140) }}</p>
  </li>
</template>

<script>
import StarRaiting from '../../StarRaiting/StarRaiting';
import ReviewAvatar from '../ReviewAvatar/ReviewAvatar.vue';

export default {
  name: 'ReviewsItem',
  props: {
    // id: { type: String, requaire: true },
    review: { type: Object, requaire: true },
  },
  components: { StarRaiting, ReviewAvatar },
  methods: {
    textElipses(text, maxLength) {
      if (text.length < maxLength) {
        return text;
      }
      return text.slice(0, maxLength) + '...';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
.review-item {
  /* max-width: 350px;
  height: 200px;
  background: red; */
  padding: 20px;
  height: 196px;
  border-top: 2px solid $secondary-bg-color;
  border-left: 2px solid $secondary-bg-color;
  border-right: 2px solid $secondary-bg-color;

  &__header {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
  }
  &__title {
    display: flex;
    flex-direction: column;
  }
  &__user-avatar {
    margin-right: 17px;
  }
  &__author {
    font-size: 18px;
    font-weight: 700;
  }
  &__text {
    height: 100px;
    overflow: hidden;
    /* text-overflow: ellipsis;
    white-space: nowrap; */
  }
}
</style>
