<template>
  <div class="gallery">
    <h2 v-if="title" class="title">{{ title }}</h2>
    <div class="apartments-list">
      <template v-for="apartment in items">
        <slot name="apartment" v-bind:apartment="apartment"></slot>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApartmentsList',

  props: {
    title: { type: String, default: '' },
    items: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  padding-top: 40px;
}
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  &:nth-child(-n + 3) {
    justify-content: flex-start;
  }
  justify-content: center;
  margin-left: -15px;
  margin-right: -15px;
  &__item {
    margin-bottom: 30px;
  }
}
</style>
