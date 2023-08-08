<template>
  <AuthContainer :title="'Логин'">
    <FormApp ref="form" @submit.prevent="handleSubmit" class="form">
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
      <SubmitButton type="submit" :loading="loading" class="form__submit-button">Вход</SubmitButton>
    </FormApp>
  </AuthContainer>
</template>

<script>
import FormApp from '../../Shared/Form/FormApp';
import CustomInput from '../../Shared/CustomInput';
import SubmitButton from '../../ButtonMain/ButtonMain';
import AuthContainer from '../AuthContainer.vue';
import { emailValidation, passwordValidation, isRequired } from '../../../utils/validationRules';
import { loginUser } from '../../../services/auth.services';
export default {
  name: 'LoginApp',
  components: { FormApp, CustomInput, SubmitButton, AuthContainer },
  data() {
    return { formData: { email: '', password: '' }, loading: false };
  },
  computed: {
    rules() {
      return { emailValidation, passwordValidation, isRequired };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
  },
  //   mounted() {
  //     console.log('ref form', this.$refs.form);
  //   },
  methods: {
    async handleSubmit() {
      // console.log('ref', this.$refs.form);
      const isFormValid = this.$refs.form.validate();
      // console.log('submitForm', isFormValid);
      if (isFormValid) {
        try {
          this.loading = true;
          console.log('formData', this.formData);
          const { data } = await loginUser(this.formData);

          console.log('result data', data);
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
}
</style>
