<template>
  <ContentApp>
    <section class="error">
      <h1 class="error__title">Page not found 404</h1>
    </section>
  </ContentApp>
</template>

<script>
import ContentApp from '../components/Shared/ContentApp';

export default {
  name: 'ErrorPage',
  components: { ContentApp },
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
