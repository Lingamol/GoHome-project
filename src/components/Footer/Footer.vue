<template>
  <footer class="footer">
    <ContainerApp class="footer-container"><slot></slot></ContainerApp>
  </footer>
</template>

<script>
import ContainerApp from '../Shared/ContainerApp';
export default { name: 'AppFooter', components: { ContainerApp } };
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.footer {
  padding: 16px 0;
  width: 100%;
  background-color: $header-bg;
}
.footer-container {
  height: 50px;
}
</style>
