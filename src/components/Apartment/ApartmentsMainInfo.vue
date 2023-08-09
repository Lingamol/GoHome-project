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
    <ResereButton
      @click="handleApsrtmentsBooking()"
      :loading="IsLoading"
      class="apartment-main-info__button"
      >Забронировать</ResereButton
    >
  </article>
</template>

<script>
import StarRating from '../StarRating/StarRating.vue';
import ResereButton from '../ButtonMain/ButtonMain.vue';
import { bookApartment } from '../../services/orders.services';
export default {
  name: 'ApartmentsMainInfo',
  components: { StarRating, ResereButton },
  props: { apartment: { type: Object, requred: true } },
  data() {
    return { IsLoading: false };
  },
  methods: {
    async handleApsrtmentsBooking() {
      const body = { apartmentId: this.$route.params.id, date: Date.now() };
      try {
        this.IsLoading = true;

        const { data } = await bookApartment(body);
        console.log('bookData', data);
        this.$notify({
          type: 'success',
          title: 'Заказ добавлен',
        });
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Произошла ошибка',
          text: error.message,
        });
        console.error(error.message);
      } finally {
        this.IsLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
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
    transition: background-color 0.4s, color 0.4s;
    font-family: Monserat, sans-serif;
    /* &:hover {
      background: none;
      color: $main-color;
      border: 2px solid $main-color;
    } */
  }
}
</style>
