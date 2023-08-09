<template>
  <div class="login-tumb">
    <h1 class="login-tumb__title">Логин</h1>
    <form @submit.prevent="handleSubmit" class="form-login">
      <CustomInput v-model="email" placeholder="Email" class="form-login__input login" />
      <CustomInput v-model="password" placeholder="Password" class="form-login__input password" />
      <SubmitButton type="submit" class="form-login__submit-button">Login</SubmitButton>
    </form>
  </div>
</template>

<script>
import CustomInput from '../Shared/CustomInput';
import SubmitButton from '../ButtonMain/ButtonMain';
export default {
  name: 'LoginForm',
  components: { CustomInput, SubmitButton },
  data() {
    return { email: '', password: '' };
  },

  methods: {
    handleSubmit() {
      this.$emit('submit', { email: this.email, password: this.password });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.login-tumb {
  padding: 32px 32px 26px;
  width: 410px;
  height: 300px;
  background: $auth-form-bg;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
  .form-login {
    margin-top: 18px;
    &__input {
      width: 100%;
      &.login {
        margin-bottom: 23px;
      }
      &.password {
        margin-bottom: 37px;
      }
    }
    &__submit-button {
      width: 100%;
    }
  }
}
</style>
