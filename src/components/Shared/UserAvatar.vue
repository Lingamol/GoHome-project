<template>
  <div class="avatar">
    <img
      v-if="avatarUrl === ''"
      :src="require('@/assets/images/svg/User.svg')"
      alt="user-icon"
      class="avatar__user-icon"
    />
    <img v-if="avatarUrl !== ''" :src="avatarUrl" alt="user-photo" class="avatar__user-photo" />
  </div>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: { avatarUrl: { type: String, default: '' } },
};
</script>

<style lang="scss" scoped>
.avatar {
  &__user-icon {
    width: 34px;
    height: 34px;
  }
  &__user-photo {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
}
</style>
