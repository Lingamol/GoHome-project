<template>
  <div class="auth">
    <AuthButton class="sign-in" @click="signIn">Вхід</AuthButton><span>/</span>
    <AuthButton class="sign-up" @click="signUp">Реєстрація</AuthButton>
  </div>
</template>

<script>
import AuthButton from "./AuthButton.vue";
export default {
  name: "AuthNav",
  components: { AuthButton },
  methods: {
    signIn() {
      alert("signIN");
    },
    signUp() {
      alert("signUP");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.auth {
  display: flex;
  color: $text-color;
  font-size: 16px;
  font-weight: 500;
  margin-right: 55px;
}
.sign-in,
.sign-up {
  &:hover,
  &:focus {
    color: $main-color;
  }
}
.sign-in {
  margin-right: 5px;
}
.sign-up {
  margin-left: 5px;
}
</style>
