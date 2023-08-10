<template>
  <div class="orders-list">
    <p v-if="!items.length">Заказов нет</p>
    <ul v-else>
      <OrderItem
        v-for="order in items"
        :key="order.id"
        :orderId="order.id"
        :order="order.apartment"
        class="orders-list__item"
        :showBtn="true"
      />
    </ul>
  </div>
</template>
<script>
import OrderItem from '../MyOrders/OrderItem.vue';
export default {
  name: 'OrdersList',
  props: { items: { type: Array, required: true } },
  components: { OrderItem },
};
</script>

<style lang="scss" scoped>
.orders-list {
  margin-top: 20px;
}
</style>
