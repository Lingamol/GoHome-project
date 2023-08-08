<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__header">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" :alt="apartment.title" class="apartment-main-info__photo" />
    <p class="apartment-main-info__description">
      {{ apartment.descr }}
    </p>
    <ResereButton @click="handleReserve(apartment.id)" class="apartment-main-info__button"
      >Забронировать</ResereButton
    >
  </article>
</template>

<script>
import StarRating from '../StarRating/StarRating.vue';
import ResereButton from '../ButtonMain/ButtonMain.vue';
export default {
  name: 'ApartmentsMainInfo',
  components: { StarRating, ResereButton },
  props: { apartment: { type: Object, requred: true } },
  methods: {
    handleReserve(id) {
      alert(`apartment ${id} rserved`);
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-main-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-right: auto;
  margin-left: auto; */
  width: 730px;
  &__header {
    align-self: flex-start;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  &__title {
    margin-right: 20px;
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
  }
  &__photo {
    max-width: 100%;
    height: auto;
  }
  &__description {
    margin-top: 30px;
    line-height: 1.3;
  }
  &__button {
    margin-top: 24px;
  }
}
</style>
