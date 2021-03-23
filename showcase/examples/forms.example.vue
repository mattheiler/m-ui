<template>
  <div class="select-example">
    <h3>Forms</h3>
    <mui-form>
      <mui-form-field label="Text">
        <mui-input v-model="firstName" placeholder="(e.g., Matthew)" required />
      </mui-form-field>
      <mui-form-field label="Text (disabled)">
        <mui-input v-model="firstName" placeholder="(e.g., Matthew)" required disabled />
      </mui-form-field>
      <mui-form-field label="Text area">
        <mui-textarea v-model="lastName" placeholder="(e.g., Heiler)" required />
      </mui-form-field>
      <mui-form-field label="Text area (disabled)">
        <mui-textarea v-model="lastName" placeholder="(e.g., Heiler)" required disabled />
      </mui-form-field>
      <mui-form-field label="Select">
        <mui-select v-model="protein" required>
          <mui-option v-for="protein in proteins" :key="protein" :value="protein">{{ protein }}</mui-option>
        </mui-select>
      </mui-form-field>
      <mui-form-field label="Select (disabled)">
        <mui-select v-model="protein" required disabled>
          <mui-option v-for="protein in proteins" :key="protein" :value="protein">{{ protein }}</mui-option>
        </mui-select>
      </mui-form-field>
    </mui-form>
  </div>
</template>

<script>
export default {
  name: 'forms-example',
  data() {
    return {
      protein: null,
      proteins: ['Chicken', 'Steak', 'Carnitas', 'Barbacoa', 'Fish', 'Sofritas', 'Quinoa', 'Textured Vegetable Protein (TVP)'],
      firstName: null,
      lastName: null,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>