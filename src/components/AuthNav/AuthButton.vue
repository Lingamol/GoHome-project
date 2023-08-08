<template>
  <div>
    <!-- <button v-bind:type="type" v-on="$listeners" class="button"> -->
    <router-link class="button" :to="route"> <slot></slot></router-link>

    <!-- </button> -->
  </div>
</template>

<script>
export default {
  name: 'AuthButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    route: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.button {
  text-decoration: none;
  color: currentColor;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  font-size: inherit;
  line-height: inherit;
  &:hover,
  &:focus {
    color: $main-color;
  }
}
</style>
