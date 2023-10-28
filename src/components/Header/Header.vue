<template>
  <div class="header">
    <ContainerApp class="header__container"
      ><div class="header__content">
        <Logo />
        <AccountActions v-if="isLoggedIn" />
        <AuthActions v-else />
      </div>
    </ContainerApp>
  </div>
</template>

<script>
import ContainerApp from '../Shared/ContainerApp.vue';
import Logo from '../Logo/Logo';
// import AuthNav from '../AuthNav/AuthNav.vue';
import AuthActions from './AuthActions.vue';
import AccountActions from './AccountActions.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  components: { ContainerApp, Logo, AuthActions, AccountActions },
  computed: { ...mapGetters('auth', ['isLoggedIn']) },
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

  &__content {
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
