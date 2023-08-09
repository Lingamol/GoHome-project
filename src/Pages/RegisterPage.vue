<template>
  <div class="register-page">
    <SectionSpacer>
      <AuthSection>
        <RegisterForm class="register-form" />
      </AuthSection>
    </SectionSpacer>
  </div>
</template>

<script>
import SectionSpacer from '../components/Shared/SectionWithHeaderSpacer.vue';
import AuthSection from '../components/Auth/AuthSection';
import RegisterForm from '../components/Auth/RegisterApp/RegisterApp';

export default {
  name: 'RegisterPage',
  components: { AuthSection, RegisterForm, SectionSpacer },
};
</script>

<style lang="scss" scoped>
.register-page {
  position: relative;
}
.register-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
