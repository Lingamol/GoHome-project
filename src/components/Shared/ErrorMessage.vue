<template>
  <div class="error-message">
    <MainTitle class="error-message__title">{{ title }}</MainTitle>
    <p class="lerror-message__description">{{ message }}</p>
  </div>
</template>

<script>
import MainTitle from '../Shared/MainTitle.vue';

export default {
  name: 'ErrorMessage',
  props: {
    title: { type: String, default: 'Произошла Ошибка' },
    message: { type: String, default: '' },
  },
  components: { MainTitle },
};
</script>

<style lang="scss" scoped>
.error-message {
  &__title {
  }
  &__description {
    color: black;
  }
}
</style>
