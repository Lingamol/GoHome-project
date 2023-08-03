<template>
  <form @submit.prevent="handleSubmit" class="form-aprtment-filter">
    <div class="filter-group">
      <CustomSelect :items="optionItems" v-model="city" class="select-apartments-filter" />
      <CustomInput v-model="price" placeholder="Цена, от" class="input-apartments-filter" />
    </div>
    <SubmitButton type="button" @click="resetFilter" class="submit-button"
      >Очистить фильтр</SubmitButton
    >
    <SubmitButton type="submit" class="submit-button">Подбор жилья</SubmitButton>
  </form>
</template>

<script>
import CustomInput from '../Shared/CustomInput';
import CustomSelect from '../Shared/CustomSelect';
import SubmitButton from '../ButtonMain/ButtonMain.vue';
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
    handleResetFilter() {
      Object.assign(this.$data, this.$options.data.call(this));
      this.resetFilter();
    },
    handleSubmit() {
      this.$emit('submit', { city: this.city, price: this.price });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-aprtment-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.select-apartments-filter {
  margin-right: 31px;
}
.submit-button {
  margin-right: 55px;
}
</style>
