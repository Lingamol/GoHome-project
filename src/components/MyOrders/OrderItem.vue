<template>
  <li class="order-item">
    <img :src="order.imgUrl" alt="фото апартаментов" class="order-item__photo" />
    <div class="order-item__details">
      <div class="order-item__text">
        <h2 class="order-item__title">{{ order.title }}</h2>
        <p class="order-items__location">{{ order.location.city }}</p>
        <p>{{ orderId }}</p>
      </div>
      <div class="order-item__cost">
        <span class="order-item__price">UAH {{ order.price }}</span>
        за ночь
      </div>
      <RemoveOrderBtn v-if="showBtn" @click="HandleRemoveOrder(orderId)" :loading="isLoading"
        >Удалить заказ</RemoveOrderBtn
      >
    </div>
  </li>
</template>

<script>
import RemoveOrderBtn from '../ButtonMain/ButtonMain';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'OrderItem',
  components: { RemoveOrderBtn },
  props: {
    orderId: { type: String, requrired: true },
    order: { type: Object, required: true },
    showBtn: { type: Boolean, default: false },
  },
  data() {
    return { isLoading: false };
  },
  computed: {
    ...mapGetters('orders', ['getStatesLoadingRemoveOrder', 'getStateErrorRemoveOrder']),
    isLoadingRemove() {
      return this.getStatesLoadingRemoveOrder;
    },
  },
  methods: {
    ...mapActions('orders', ['removeOrder']),
    async HandleRemoveOrder(id) {
      this.isLoading = true;
      await this.removeOrder(id);

      this.isLoading = this.getStatesLoadingRemoveOrder;

      if (this.getStateErrorRemoveOrder) {
        this.$notify({
          type: 'error',
          title: 'Произошла ошибка!',
          text: this.getStateErrorRemoveOrder,
        });
        return;
      }
      this.$notify({
        type: 'success',
        title: 'Заказ удален!',
      });
    },
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
    margin-bottom: 5px;
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

<!-- 
https://apt-booking-api.herokuapp.com/orders/5fecb172f1af2f4ba2a9c147 -->
