<template>
  <div class="auth-container">
    <MainTitle v-if="title" class="auth-container__title">{{ title }}</MainTitle>
    <slot></slot>
  </div>
</template>

<script>
import MainTitle from '../Shared/MainTitle';
export default {
  name: 'AuthContainer',
  components: { MainTitle },
  props: { title: { type: String, default: null } },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.auth-container {
  padding: 32px 32px 26px;
  width: 410px;

  background: $auth-form-bg;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* &__title {
    margin-bottom: 18px;
  } */
}
</style>
