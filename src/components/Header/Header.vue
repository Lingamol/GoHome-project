<template>
  <div class="header">
    <ContainerApp class="header__container">
      <Logo />
      <AuthNav />
    </ContainerApp>
  </div>
</template>

<script>
import ContainerApp from '../Shared/ContainerApp.vue';
import Logo from '../Logo/Logo';
import AuthNav from '../AuthNav/AuthNav.vue';
export default {
  name: 'AppHeader',
  components: { ContainerApp, Logo, AuthNav },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $header-bg;
  padding: 16px 0;
  height: $header-height;
  z-index: 100;

  &__container {
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
