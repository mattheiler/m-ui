<template>
  <div class="slush-bucket-example">
    <h3>Slush bucket</h3>
    <mui-slush-bucket :source-data.sync="sourceData" :target-data.sync="targetData" data-key="code">
      <div slot="source-header">SOURCE HEADER</div>
      <div slot="target-header">TARGET HEADER</div>
      <div slot="source-filter">SOURCE FILTER</div>
      <div slot="target-filter">TARGET FILTER</div>
      <template slot="cols">
        <mui-table-col name="code">
          <template slot="head">Code</template>
          <template slot="cell" slot-scope="{ data }">{{ data.value }}</template>
        </mui-table-col>
      </template>
    </mui-slush-bucket>
  </div>
</template>

<script>
export default {
  name: 'slush-bucket-example',
  data() {
    return {
      sourceData: [
        { code: 1, value: 'Item One' },
        { code: 2, value: 'Item Two' },
        { code: 3, value: 'Item Three' },
        { code: 4, value: 'Item Four' },
        { code: 5, value: 'Item Five' },
        { code: 6, value: 'Item Six' },
      ],
      targetData: [
        { code: 7, value: 'Item Seven' },
        { code: 8, value: 'Item Eight' },
        { code: 9, value: 'Item Nine' },
        { code: 10, value: 'Item Ten' },
        { code: 11, value: 'Item Eleven' },
        { code: 12, value: 'Item Twelve' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>