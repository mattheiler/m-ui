
<template>
  <div class="dialog-example">
    <h3>Dialog</h3>
    <mui-checkbox v-model="modal">Modal</mui-checkbox>
    <mui-button @click="prompt">Prompt</mui-button>
    <mui-button @click="dialog">Dialog</mui-button>
    <mui-dialog :modal="modal" :opened.sync="prompting" ref="prompt$">
      <mui-dialog-header>Please enter a value...</mui-dialog-header>
      <mui-dialog-content>
        <mui-form @submit="submit">
          <mui-form-field label="Value">
            <mui-input v-model="value" required />
          </mui-form-field>
          <mui-button>Submit</mui-button>
        </mui-form>
      </mui-dialog-content>
      <mui-dialog-footer>
        <mui-button @click="prompting = false">Ok</mui-button>
      </mui-dialog-footer>
    </mui-dialog>
    <mui-dialog :modal="modal" :opened.sync="dialoguing" ref="dialog$">
      <mui-dialog-header>Example</mui-dialog-header>
      <mui-dialog-content>Place content here.</mui-dialog-content>
      <mui-dialog-footer>
        <mui-button @click="dialoguing = false">Ok</mui-button>
      </mui-dialog-footer>
    </mui-dialog>
  </div>
</template>

<script>
export default {
  name: 'dialog-example',
  data() {
    return {
      modal: false,
      value: null,
      prompting: false,
      dialoguing: false,
    };
  },
  methods: {
    prompt() {
      this.prompting = true;
    },
    submit() {
      this.prompting = false;
      console.log('Prompted.');
    },
    dialog() {
      this.dialoguing = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>