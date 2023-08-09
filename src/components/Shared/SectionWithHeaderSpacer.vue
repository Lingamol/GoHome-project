<template>
  <div class="section-spacer"><slot></slot></div>
</template>

<script>
export default { name: 'SectionSpacer' };
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.section-spacer {
  padding-top: calc(#{$header-height} - 8px);
}
</style>
