<template>
  <div class="content">
    <ContainerApp><slot>CONTENT</slot></ContainerApp>
  </div>
</template>

<script>
import ContainerApp from './ContainerApp.vue';
export default { name: 'ContentApp', components: { ContainerApp } };
</script>

<style lang="scss" scoped>
.content {
  padding-top: 60px;
  flex-grow: 1;
}
</style>
