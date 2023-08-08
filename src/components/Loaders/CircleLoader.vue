<template>
  <span class="circle-loader">
    <svg class="preloader-icon preloader" viewBox="0 0 100 100" :style="style">
      <circle cx="50" cy="50" r="40" stroke-width="5" fill="none"></circle>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'CircleLoader',
  props: {
    with: { type: [Number, String], default: 50 },
    height: { type: [Number, String], default: 50 },
    color: { type: String, default: '#ffffff' },
  },
  computed: {
    style() {
      return {
        stroke: this.color,
        width: this.width,
        height: this.height,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader-icon {
  stroke-dasharray: 0 250;
  animation: preloader 4s infinite;
  /* transform-origin: center center;
  display: flex; */

  @keyframes preloader {
    0% {
      stroke-dasharray: 0 250;
      transform: rotate(0);
      /* transform: rotate3d(0, 0, 1, 0deg); */
    }
    50% {
      stroke-dasharray: 255 250;
      transform: rotate(650deg);
      /* transform: rotate3d(0, 0, 1, 650deg); */
    }
    100% {
      stroke-dasharray: 0 250;
      transform: rotate(0);
      /* transform: rotate3d(0, 0, 1, 0deg); */
    }
  }
}
.circle-loader {
  /* text-align: center;
  background-color: black;
  border: 2px solid rgb(216, 21, 138); */
}
</style>
