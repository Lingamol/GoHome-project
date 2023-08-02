<template>
  <div class="container"><slot></slot></div>
</template>

<script>
export default { name: 'ContainerApp' };
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  outline: 2px solid red;
}
</style>
