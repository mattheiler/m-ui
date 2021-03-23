<template>
  <div class="list-example">
    <h3>List</h3>
    <mui-list>
      <mui-list-item>Item 1</mui-list-item>
      <mui-list-item>Item 2</mui-list-item>
      <mui-list-item>Item with a really, really, really, really, really, really, really, really long description</mui-list-item>
    </mui-list>
    <mui-list :data-source="items" data-key="id">
      <template slot="item" slot-scope="{ data }">{{ data.name }}</template>
    </mui-list>
  </div>
</template>

<script>
export default {
  name: 'list-example',
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Item 1',
        },
        {
          id: 2,
          name: 'Item 2',
        },
        {
          id: 3,
          name: 'Item 3',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>