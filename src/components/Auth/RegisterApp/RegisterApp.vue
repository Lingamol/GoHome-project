<template>
  <AuthContainer :title="'Регистрация'">
    <FormApp ref="form" @submit.prevent="handleSubmit" class="form">
      <CustomInput
        v-model="formData.name"
        name="name"
        class="form__input name"
        :rules="nameRules"
        aria-placeholder="User-name"
        placeholder="Name"
        :type="'text'"
        autocomplete="username"
      />
      <CustomInput
        v-model="formData.email"
        name="email"
        class="form__input email"
        :rules="emailRules"
        aria-placeholder="Email"
        placeholder="Email"
        :type="'email'"
        autocomplete="email"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        class="form__input password"
        :rules="passwordRules"
        aria-placeholder="Password"
        placeholder="Password"
        :type="'password'"
        autocomplete="current-password"
      />
      <CustomInput
        v-model="formData.confirmPassword"
        name="confirm password"
        class="form__input password"
        :rules="confirmPassword"
        aria-placeholder="Confirm password"
        placeholder="Confirm password"
        :type="'password'"
        autocomplete="current-password"
      />
      <SubmitButton type="submit" class="form__submit-button" :loading="loading">Вход</SubmitButton>
    </FormApp>
  </AuthContainer>
</template>

<script>
import FormApp from '../../Shared/Form/FormApp';
import CustomInput from '../../Shared/CustomInput';
import SubmitButton from '../../ButtonMain/ButtonMain';
import AuthContainer from '../AuthContainer.vue';
// import { registerUser } from '../../../services/auth.services';
import { mapActions } from 'vuex';

import { emailValidation, passwordValidation, isRequired } from '../../../utils/validationRules';
export default {
  name: 'RegisterApp',
  components: { FormApp, CustomInput, SubmitButton, AuthContainer },
  data() {
    return { formData: { name: '', email: '', password: '', confirmPassword: '' }, loading: false };
  },
  computed: {
    rules() {
      return { emailValidation, passwordValidation, isRequired };
    },
    nameRules() {
      return [this.rules.isRequired];
    },

    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        val => ({
          hasPassed: val === this.formData.password,
          message: 'Пароли не совпадают',
        }),
      ];
    },
  },
  //   mounted() {
  //     console.log('ref form', this.$refs.form);
  //   },
  methods: {
    ...mapActions('auth', ['registerUser']),
    async handleSubmit() {
      // console.log('ref', this.$refs.form);
      const { form } = this.$refs;
      const isFormValid = form.validate();
      // console.log('submitForm', isFormValid);
      const { name, email, password } = this.formData;
      if (isFormValid) {
        try {
          this.loading = true;
          console.log('formData', this.formData);
          // const { data } = await registerUser({ name, email, password });
          // this.$store.commit('setUserData', data.user);
          // this.$store.commit('setToken', data.token);
          // console.log('result data', data);
          // console.log('store', this.$store.state);

          /////////////////////////////////////////////////////////////////////////
          // await this.$store.dispatch('auth/registerUser', { name, email, password });
          await this.registerUser({ name, email, password });
          ////////////////////////////////////////////////////////////////////////////

          this.$router.push({ name: 'home-page' });
          form.reset();
        } catch (error) {
          this.$notify({
            type: 'error',
            title: 'Произошла ошибка!',
            text: error.message,
          });
          console.error(error);
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  &__input:not(:last-of-type) {
    margin-bottom: 20px;
  }
  &__submit-button {
    font-family: inherit;
    width: 100%;
    margin-top: 37px;
  }
}
.password {
  margin-top: 12px;
  width: 100%;
}
</style>
