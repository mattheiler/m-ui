<template>
  <form class="mui-form" @submit.prevent="submit" novalidate>
    <slot />
  </form>
</template>

<script>
export default {
  name: 'mui-form',
  $_veeValidate: {
    validator: 'new',
  },
  methods: {
    validate() {
      return this.$validator.validate();
    },
    async submit() {
      if (await this.validate()) this.$emit('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.mui-form {
}
</style>