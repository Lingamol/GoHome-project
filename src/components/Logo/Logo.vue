<template>
  <div class="logo">
    <router-link class="logo__link" to="/">
      <img :src="require('@/assets/images/svg/Logo.svg')" alt="logo" class="logo__img" />
      <div class="logo__text">
        <span class="logo__text_first">Go</span><span class="logo__text_second">Home</span>
      </div></router-link
    >
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.logo {
  /* position: relative; */
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    /* position: absolute;
    height: 100%;
    width: 100%; */
  }
  &__img {
    height: 28px;
    width: 25.5px;
  }
  &__text {
    font-size: 18px;
    font-weight: 800;
    line-height: normal;
    color: $text-color;
    margin-left: 10px;
  }
  &__text_first {
    text-transform: uppercase;
  }
  &__text_second {
    color: $main-color;
  }
}
</style>
