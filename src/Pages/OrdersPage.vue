<template>
  <main class="orders-page">
    <HeaderSpacer>
      <ContainerApp>
        <ErrorMessage v-if="loadingError" :message="loadingError" class="orders-page__error" />
        <CircleLoader
          v-if="isLoading"
          class="orders-page__loader"
          :width="STYLE.SIZE.PAGE_LOADER_SIZE"
          :height="STYLE.SIZE.PAGE_LOADER_SIZE"
          :color="STYLE.COLORS.MAIN_COLOR"
        />
        <div v-if="!isLoading && !loadingError" class="orders-page__content">
          <MainTitle>Заказы</MainTitle>
          <OrdersList :items="orders" />
        </div>
      </ContainerApp>
    </HeaderSpacer>
  </main>
</template>

<script>
import HeaderSpacer from '../components/Shared/SectionWithHeaderSpacer.vue';
import ContainerApp from '../components/Shared/ContainerApp.vue';
import MainTitle from '../components/Shared/MainTitle.vue';
import OrdersList from '../components/MyOrders/OrdersList';
import { getOrders } from '@/services/orders.services';
import CircleLoader from '../components/Loaders/CircleLoader';
import ErrorMessage from '../components/Shared/ErrorMessage.vue';
import { STYLE } from '../variables';
export default {
  name: 'OrdersPage',
  components: { HeaderSpacer, ContainerApp, MainTitle, OrdersList, CircleLoader, ErrorMessage },
  data() {
    return { orders: [], isLoading: false, STYLE, loadingError: null };
  },
  async created() {
    try {
      this.isLoading = true;
      this.loadingError = null;
      const { data } = await getOrders();
      this.orders = data;
      //   console.log('Orders', data);
    } catch (error) {
      this.loadingError = error.message;
      console.error(error.message);
      this.$notify({
        type: 'error',
        title: 'Произошла ошибка',
        text: error.message,
      });
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.orders-page {
  &__content {
    padding-top: 60px;
    max-width: 730px;
    margin: 0 auto 100px;
  }
  &__error,
  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
