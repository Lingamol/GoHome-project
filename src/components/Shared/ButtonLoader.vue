<template>
  <button class="button-loader">
    <CircleLoader />
    <slot></slot>
  </button>
</template>

<script>
import CircleLoader from '../Loaders//CircleLoader';
export default {
  name: 'ButtonLoader',
  components: { CircleLoader },
};
</script>

<style lang="scss" scoped>
.button-loader {
  border: 2px solid tomato;
  height: 50px;
  background-color: blue;
  width: 50px;
}
</style>
