<template>
  <section class="owner-info">
    <h3 class="owner-info__header">Информация о владельце:</h3>
    <div class="owner-info__tab">
      <p class="owner-info__name">Имя {{ owner.name }}</p>
      <a :href="`tel:${owner.phone}`" class="owner-info__phone">tel: {{ owner.phone }}</a>
      <a :href="`mailto:${owner.email}`" class="owner-info__email">e-mail: {{ owner.email }}</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ApartmentsOwner',
  props: { owner: { type: Object, requare: true } },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.owner-info {
  background-color: $secondary-bg-color;

  padding: 20px 20px 30px;
  &__header {
    font-size: 20px;
    font-weight: 700;
  }
  &__tab {
    display: flex;
    flex-direction: column;

    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
  }

  &__phone,
  &__email {
    text-decoration: none;
    color: currentColor;
  }
  &__email {
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
