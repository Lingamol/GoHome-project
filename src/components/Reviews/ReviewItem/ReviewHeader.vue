<template>
  <div class="review-header">
    <ReviewAvatar :avatarUrl="avatarUrl" class="review-header__user-avatar" />
    <div class="review-header__title">
      <p class="review-header__author">{{ author }}</p>
      <StarRating :rating="rating" />
    </div>
  </div>
</template>

<script>
import StarRating from '../../StarRating/StarRating';
import ReviewAvatar from '../ReviewAvatar/ReviewAvatar.vue';
export default {
  name: 'ReviewHeader',
  props: {
    avatarUrl: {
      type: String,
      default: '',
    },
    author: { type: String, required: true },
    rating: { type: Number, default: 0 },
  },
  components: { StarRating, ReviewAvatar },
};
</script>

<style lang="scss" scoped>
.review-header {
  display: flex;
  margin-bottom: 20px;
  align-items: center;

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
}
</style>
