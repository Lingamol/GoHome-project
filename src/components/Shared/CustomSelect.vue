<template>
  <select v-on="listeners" class="custom-select">
    <option
      v-for="option in formatedItems"
      :key="option.value"
      :value="option.value"
      :selected="option.selected"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: { items: { type: Array, requare: true } },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
    formatedItems() {
      return this.items.map((item) => {
        // if (typeof item === "object") {
        //   return item;
        // } else {
        //   return {
        //     value: item,
        //     label: item,
        //   };
        return typeof item === "object" ? item : { value: item, label: item };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.custom-select {
  height: 40px;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  min-width: 220px;
  cursor: pointer;
  display: inline-block;
}
</style>
