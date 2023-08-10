<template>
  <li class="review-item">
    <ReviewHeader :author="review.author" :rating="review.rating" :avatarUrl="review.avatarUrl" />
    <p class="review-item__text">{{ textElipses }}</p>
  </li>
</template>

<script>
import ReviewHeader from './ReviewHeader.vue';
import { MAX_LENGTH_REVIEW_TO_SHOW } from '../../../variables.js';
export default {
  name: 'ReviewsItem',
  props: {
    review: { type: Object, requaired: true },
  },
  components: { ReviewHeader },
  data() {
    return { maxLength: MAX_LENGTH_REVIEW_TO_SHOW };
  },

  // methods: {
  //   textElipses(text, maxLength) {
  //     if (text.length < maxLength) {
  //       return text;
  //     }
  //     return text.slice(0, maxLength) + '...';
  //   },
  // },
  computed: {
    textElipses() {
      if (this.review.content.length < this.maxLength) {
        return this.review.content;
      }
      return this.review.content.slice(0, this.maxLength) + '...';
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
  max-height: 196px;
  border-top: 2px solid $secondary-bg-color;
  border-left: 2px solid $secondary-bg-color;
  border-right: 2px solid $secondary-bg-color;

  &__text {
    max-height: 100px;
    overflow: hidden;
    /* text-overflow: ellipsis;
    white-space: nowrap; */
  }
}
</style>
