<template>
  <button v-bind:type="type" v-on="$listeners" :class="{ btn: true, 'btn--outlined': outlined }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonMain',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    outlined: { type: Boolean, default: false },
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
  opacity: 0.8;
  &--outlined {
    background: $btn-sec-color;
    color: $btn-main-color;
    border: 2px solid $btn-main-color;
  }
  &:hover {
    opacity: 1;
  }
}
</style>
