<template>
  <button
    v-bind:type="type"
    v-on="$listeners"
    :disabled="loading"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <CircleLoader v-if="loading" class="btn__loader" width="38" height="38" />
    <span class="btn__content" :class="contrntStyle"><slot></slot></span>
  </button>
</template>

<script>
import CircleLoader from '../Loaders/CircleLoader';
export default {
  name: 'ButtonMain',
  components: { CircleLoader },
  props: {
    type: {
      type: String,
      default: 'button',
    },
    outlined: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },
  computed: {
    contrntStyle() {
      return { 'btn__content--hiden': this.loading };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.btn {
  display: inline-block;
  font-size: 18px;
  background-color: transparent;
  background-color: $btn-main-color;
  color: $btn-sec-color;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
  opacity: 1;
  position: relative;
  &--outlined {
    background: $btn-sec-color;
    color: $btn-main-color;
    border: 2px solid $btn-main-color;
  }
  &:hover {
    opacity: 0.8;
  }
  &__content {
    &--hiden {
      opacity: 0;
    }
  }
  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
