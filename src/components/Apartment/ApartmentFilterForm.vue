<template>
  <form @submit.prevent="handleSubmit" class="form-aprtment-filter">
    <div class="form-aprtment-filter__group">
      <CustomSelect :items="optionItems" v-model="city" class="form-aprtment-filter__select" />
      <CustomInput v-model="price" placeholder="Цена, от" class="form-aprtment-filter__input" />
    </div>
    <!-- <SubmitButton type="button" @click="resetFilter" class="submit-button"
      >Очистить фильтр</SubmitButton
    > -->
    <SubmitButton type="submit" class="form-aprtment-filter__submit-button"
      >Подбор жилья</SubmitButton
    >
  </form>
</template>

<script>
import CustomInput from '../Shared/CustomInput';
import CustomSelect from '../Shared/CustomSelect';
import SubmitButton from '../ButtonMain/ButtonMain.vue';
import { mapMutations } from 'vuex';
export default {
  name: 'ApartmentFilterForm',
  components: { CustomInput, CustomSelect, SubmitButton },
  props: {
    optionItems: { type: Array, requare: true },
    resetFilter: { type: Function, requare: true },
  },
  data() {
    return { city: '', price: '' };
  },

  methods: {
    ...mapMutations('filters', ['setApartmentsFilter']),
    handleResetFilter() {
      Object.assign(this.$data, this.$options.data.call(this));
      this.resetFilter();
    },
    handleSubmit() {
      // this.$emit('submit', { city: this.city, price: this.price });
      this.setApartmentsFilter({ price: this.price, location: { city: this.city } });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-aprtment-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;

  &__group {
    display: flex;
    align-items: center;
    /* align-items: center; */
  }
  &__select {
    margin-right: 30px;
  }
}
.select-apartments-filter {
  margin-right: 31px;
}
.submit-button {
  margin-right: 55px;
}
</style>
