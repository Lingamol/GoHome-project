<template>
  <li class="order-item">
    <img :src="order.imgUrl" alt="фото апартаментов" class="order-item__photo" />
    <div class="order-item__details">
      <div class="order-item__text">
        <h2 class="order-item__title">{{ order.title }}</h2>
        <p class="order-items__location">{{ order.location.city }}</p>
      </div>
      <div class="order-item__cost">
        <span class="order-item__price">UAH {{ order.price }}</span>
        за ночь
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    order: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
.order-item {
  display: flex;
  margin-bottom: 20px;

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__details {
    display: flex;
    flex-direction: column;
  }
  &__photo {
    display: block;
    width: 45%;
    height: 190px;
    object-fit: cover;
  }
  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    padding: 20px;
    border: 2px solid #e1efff;
    border-left: none;
  }
  &__price {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
