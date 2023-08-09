<template>
  <ContainerApp>
    <section class="error">
      <h1 class="error__title">Page not found 404</h1>
    </section>
  </ContainerApp>
</template>

<script>
import ContainerApp from '../components/Shared/ContainerApp.vue';

export default {
  name: 'ErrorPage',
  components: { ContainerApp },
};
</script>

<style lang="scss" scoped>
.error {
  &__title {
    font-size: 60px;
    text-align: center;
  }
}
</style>
