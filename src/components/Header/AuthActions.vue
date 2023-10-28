<template>
  <div class="auth-actions">
    <router-link :to="{ name: 'login-page' }" class="auth-actions__link">Вход</router-link>
    /
    <router-link :to="{ name: 'register-page' }" class="auth-actions__link">
      Регистрация
    </router-link>
  </div>
</template>

<script>
export default { name: 'AuthActions' };
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.auth-actions {
  color: $text-color;
  &__link {
    color: currentColor;
    text-decoration: none;
    transition: color 0.4s;
    &:hover {
      color: $main-color;
    }
  }
}
</style>
