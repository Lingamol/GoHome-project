<template>
  <div class="login-page">
    <SectionSpacer>
      <AuthSection>
        <LoginForm class="login-form" />
      </AuthSection>
    </SectionSpacer>
  </div>
</template>
<script>
import SectionSpacer from '../components/Shared/SectionWithHeaderSpacer.vue';
import AuthSection from '../components/Auth/AuthSection';
import LoginForm from '../components/Auth/LoginApp/LoginApp';

export default {
  name: 'LoginPage',
  components: {
    SectionSpacer,
    AuthSection,
    LoginForm,
  },
  // methods: {
  //   handleSubmit(value) {
  //     console.log('LoginForm data', value);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.login-page {
  position: relative;
}

.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
