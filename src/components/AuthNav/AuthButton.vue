<template>
  <div>
    <button v-bind:type="type" v-on="$listeners" class="button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "AuthButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  color: currentColor;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  font-size: inherit;
  line-height: inherit;
}
</style>
