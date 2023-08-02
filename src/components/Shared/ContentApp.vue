<template>
  <ContainerApp class="content">
    <slot>CONTENT</slot>
  </ContainerApp>
</template>

<script>
import ContainerApp from './ContainerApp.vue';
export default { name: 'ContentApp', components: { ContainerApp } };
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding-top: 60px;
  flex-grow: 1;
}
</style>
