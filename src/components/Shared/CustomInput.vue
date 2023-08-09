<template>
  <div class="wrapper-input">
    <input
      v-on="listeners"
      v-bind="$attrs"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
      :type="inputType"
      :value="value"
      @blur="blurHandler"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
    <iconButton
      @click="toggleShow"
      type="button"
      v-if="type === 'password' && showIconBtn"
      class="custom-input__button"
    >
      <img v-if="showInput" src="@/assets/images/svg/eye.svg" alt="icon" class="button-icon" />
      <img
        v-if="!showInput"
        src="@/assets/images/svg/eye-closed.svg"
        alt="icon"
        class="button-icon"
      />
    </iconButton>
  </div>
</template>

<script>
import iconButton from '../IconButton/IconButton';
export default {
  name: 'PusswordInput',
  components: { iconButton },
  inject: { form: { default: null } },
  // inject: ['form'],
  inheritAttrs: false,
  props: {
    type: { type: String, default: 'text' },
    value: { type: String, default: '' },
    errorMessage: { type: String, default: '' },
    rules: {
      type: Array,
      default: () => [],
    },
    showIconBtn: { type: Boolean, default: true },
  },
  data() {
    return { isValid: true, error: '', showInput: false, inputType: this.type, isFirstInput: true };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      };
    },
  },
  // watch: {
  //   value(value) {
  //     this.validate(value);
  //     console.log(value);
  //   },
  // },
  watch: {
    value() {
      if (this.isFirstInput) return;
      this.validate();
    },
  },
  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  beforeDestroy() {
    if (!this.form) return;
    this.form.unRegisterInput(this);
  },
  methods: {
    validate() {
      this.isValid = this.rules.every(rule => {
        const { hasPassed, message } = rule(this.value);
        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }
        // console.log('hasPassed', rule, hasPassed);
        return hasPassed;
      });
      return this.isValid;
    },
    checkIsValid() {
      return this.isValid;
    },
    reset() {
      this, (this.isValid = true);
      this.isFirstInput = true;
      this.$emit('input', '');
    },
    blurHandler() {
      if (this.isFirstInput) {
        this.validate();
      }
      this.isFirstInput = false;
    },

    toggleShow() {
      if (this.inputType === 'password') {
        this.inputType = 'text';
        this.showInput = !this.showInput;
        return;
      }
      this.inputType = 'password';
      this.showInput = !this.showInput;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.wrapper-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 40px;
  position: relative;
}
.custom-input {
  position: relative;
  height: $input-height;
  outline: none;
  /* border: none; */
  border: 2px solid $main-color;
  font-size: 18px;
  line-height: inherit;
  padding: 8px calc(#{$button-icon-size} + 25px) 8px 15px;
  /* padding: 8px 15px; */
  min-width: 220px;
  width: 100%;
  &::placeholder {
    color: inherit;
    font-size: 18px;
    font-weight: 500;
  }
  &:active,
  &:hover,
  &:focus {
    border: 2px solid $main-color;
  }
  &__error {
    position: absolute;
    left: 0;
    bottom: -12px;
    font-size: 11px;
    color: red;
  }
  &__button {
    /* border: 1px solid green; */
    position: absolute;
    padding: 0;
    margin: 0;
    top: calc((#{$input-height} - #{$button-icon-size}) / 2);
    right: 10px;
  }
}
.button-icon {
  width: $button-icon-size;
  height: $button-icon-size;
}
</style>

<!-- <template>
  <div class="wrapper-input">
    <input
      v-on="listeners"
      v-bind="$attrs"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
      :type="type"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  inject: { form: { default: null } },
  // inject: ['form'],
  inheritAttrs: false,
  props: {
    type: { type: String, default: 'text' },
    value: { type: String, default: '' },
    errorMessage: { type: String, default: '' },
    rules: { type: Array, default: () => [] },
  },
  data() {
    return { isValid: true, error: '' };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      };
    },
  },
  // watch: {
  //   value(value) {
  //     this.validate(value);
  //     console.log(value);
  //   },
  // },
  watch: {
    value() {
      this.validate();
    },
  },
  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  beforeDestroy() {
    if (!this.form) return;
    this.form.unRegisterInput(this);
  },
  methods: {
    validate() {
      this.isValid = this.rules.every(rule => {
        const { hasPassed, message } = rule(this.value);
        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }
        console.log('hasPassed', rule, hasPassed);
        return hasPassed;
      });
      return this.isValid;
    },
    checkIsValid() {
      return this.isValid;
    },
    reset() {},
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.wrapper-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 55px;
  position: relative;
}
.custom-input {
  min-height: 40px;
  outline: none;
  /* border: none; */
  border: 2px solid $main-color;
  font-size: 18px;
  line-height: inherit;
  padding: 8px 15px;
  min-width: 220px;
  width: 100%;
  &::placeholder {
    color: inherit;
    font-size: 18px;
    font-weight: 500;
  }
  &:active,
  &:hover,
  &:focus {
    border: 2px solid $main-color;
  }
  &__error {
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 11px;
    color: red;
  }
}
</style> -->
