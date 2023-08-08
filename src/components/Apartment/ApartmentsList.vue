<template>
  <div class="gallery">
    <MainTitle :level="1" v-if="title" class="gallery__title">{{ title }}</MainTitle>
    <div class="gallery__apartments-list">
      <template v-for="apartment in items">
        <slot name="apartment" v-bind:apartment="apartment"></slot>
      </template>
    </div>
  </div>
</template>

<script>
import MainTitle from '../Shared/MainTitle.vue';
export default {
  name: 'ApartmentsList',
  components: { MainTitle },

  props: {
    title: { type: String, default: '' },
    items: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  padding-top: 40px;
  &__title {
    margin-bottom: 20px;
  }

  &__apartments-list {
    display: flex;
    flex-wrap: wrap;
    &:nth-child(-n + 3) {
      justify-content: flex-start;
    }
    justify-content: center;
    margin-left: -15px;
    margin-right: -15px;
  }
}
</style>
