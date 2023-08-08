<template>
  <button v-bind:type="type" v-on="$listeners" class="icon-button"><slot></slot></button>
</template>

<script>
export default {
  name: 'IconButton',
  props: { type: { type: String, default: 'button' } },
};
</script>

<style lang="scss" scoped>
.icon-button {
  background: transparent;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
