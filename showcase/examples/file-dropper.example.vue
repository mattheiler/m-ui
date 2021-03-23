<template>
  <div class="file-dropper-example">
    <h3>File dropper</h3>
    <mui-form class="settings">
      <mui-form-field label="Accept">
        <mui-input type="text" v-model="accept" />
      </mui-form-field>
      <mui-checkbox v-model="disabled">Disabled</mui-checkbox>
      <mui-checkbox v-model="multiple">Multiple</mui-checkbox>
    </mui-form>
    <mui-file-dropper :accept="accept" :disabled="disabled" :multiple="multiple">
      <span>Drop it like it's hot...</span>
    </mui-file-dropper>
  </div>
</template>

<script>
export default {
  name: 'file-dropper-example',
  data() {
    return {
      accept: '.xlsx',
      disabled: false,
      multiple: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>