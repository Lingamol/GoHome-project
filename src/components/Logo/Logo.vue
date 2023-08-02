<template>
  <div class="logo">
    <a href="" class="logo__link">
      <img src="/images/svg/logo.svg" alt="logo" class="logo__img" />
      <div class="logo__text">
        <span class="logo__text_first">Go</span
        ><span class="logo__text_second">Home</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Logo",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.logo {
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
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
