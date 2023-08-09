<template>
  <div class="test">
    <SectionSpacer class="flex">
      <h1>test</h1>
      <!-- <ButtonLoader /> -->
      <CircleLoader />
    </SectionSpacer>
  </div>
</template>

<script>
// import ContentApp from '../components/Shared/ContentApp.vue';
// import PasswordInput from '../components/Shared/PasswordInput.vue';
import SectionSpacer from '../components/Shared/SectionWithHeaderSpacer.vue';
// import ButtonLoader from '../components/Shared/ButtonLoader.vue';
import CircleLoader from '../components/Loaders/CircleLoader';
export default {
  name: 'TestPage',
  components: { SectionSpacer, CircleLoader },
};
</script>

<style lang="scss" scoped>
.test {
  /* padding-top: 60px; */
  background: greenyellow;
  height: 100vh;
}
.flex {
  display: flex;
  justify-content: center;
}
</style>
