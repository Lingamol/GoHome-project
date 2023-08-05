<template>
  <ContentApp class="login"><LoginForm @submit="handleSubmit" class="login-form" /></ContentApp>
</template>

<script>
import LoginForm from '../components/AuthForms/LoginForm.vue';
import ContentApp from '../components/Shared/ContentApp';
export default {
  name: 'LoginPage',
  components: { LoginForm, ContentApp },
  methods: {
    handleSubmit(value) {
      console.log('LoginForm data', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  background: url('../assets/images//bg/AuthBg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
