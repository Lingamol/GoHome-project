<template>
  <section class="auth-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'AuthSection',
  components: {},
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.auth-section {
  position: relative;
  background: url('../../assets/images/bg/AuthBg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: calc(100vh - #{$footer-height});

  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 29, 45, 0.5);
    z-index: -1;
  }
}
</style>
