<template>
  <ContentApp class="register-page"> </ContentApp>
</template>

<script>
import ContentApp from '../components/Shared/ContentApp';

export default {
  name: 'RegisterPage',
  components: { ContentApp },
};
</script>

<style lang="scss" scoped>
.register-page {
  /* background: url('../assets/images//bg/AuthBg.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
