<template>
  <div class="mui-slush-bucket">
    <div class="mui-slush-bucket-header source">
      <slot name="source-header">{{ sourceHeader }}</slot>
    </div>
    <div class="mui-slush-bucket-header target">
      <slot name="target-header">{{ targetHeader }}</slot>
    </div>
    <div class="mui-slush-bucket-filter source">
      <slot name="source-filter" />
    </div>
    <div class="mui-slush-bucket-filter target">
      <slot name="target-filter" />
    </div>
    <mui-table class="mui-slush-bucket-table source" :data-source="sourceData$" :data-key="dataKey" selectable @selected="onSourceDataSelected">
      <template slot="cols">
        <slot name="cols" :data="sourceData$" />
      </template>
    </mui-table>
    <div class="mui-slush-bucket-actions">
      <mui-button kind="icon" @click="toTarget" :disabled="toTargetDisabled">
        <mui-icon name="chevron-right" />
      </mui-button>
      <mui-button kind="icon" @click="toSource" :disabled="toSourceDisabled">
        <mui-icon name="chevron-left" />
      </mui-button>
    </div>
    <mui-table class="mui-slush-bucket-table target" :data-source="targetData$" :data-key="dataKey" selectable @selected="onTargetDataSelected">
      <template slot="cols">
        <slot name="cols" :data="targetData$" />
      </template>
    </mui-table>
  </div>
</template>

<script>
import { concat, difference, map } from 'lodash';

export default {
  name: 'mui-slush-bucket',
  props: {
    dataKey: {
      type: String,
      default: null,
    },
    sourceData: {
      type: Array,
      default: () => [],
    },
    sourceHeader: {
      type: String,
      default: null,
    },
    targetData: {
      type: Array,
      default: () => [],
    },
    targetHeader: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      sourceData$: this.sourceData,
      sourceDataSelected: [],
      targetData$: this.targetData,
      targetDataSelected: [],
    };
  },
  computed: {
    toSourceDisabled() {
      return this.targetDataSelected.length < 1;
    },
    toTargetDisabled() {
      return this.sourceDataSelected.length < 1;
    },
  },
  methods: {
    toSource() {
      this.sourceData$ = concat(this.sourceData$, this.targetDataSelected);
      this.targetData$ = difference(this.targetData$, this.targetDataSelected);
      this.targetDataSelected = [];
    },
    toTarget() {
      this.targetData$ = concat(this.targetData$, this.sourceDataSelected);
      this.sourceData$ = difference(this.sourceData$, this.sourceDataSelected);
      this.sourceDataSelected = [];
    },
    onSourceDataSelected(data) {
      this.sourceDataSelected = map(data, row => row.data);
    },
    onTargetDataSelected(data) {
      this.targetDataSelected = map(data, row => row.data);
    },
  },
  watch: {
    sourceData(value) {
      this.sourceData$ = value;
    },
    sourceData$(value) {
      this.$emit('update:sourceData', value);
    },
    targetData(value) {
      this.targetData$ = value;
    },
    targetData$(value) {
      this.$emit('update:targetData', value);
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/layouts';

.mui-slush-bucket {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas:
    'lh    .    rh'
    'lf    .    rf'
    'lt actions rt';

  .mui-slush-bucket-header {
    &.source {
      grid-area: lh;

      @include mui-flex();
      @include mui-flex-align(start, center);
    }
    &.target {
      grid-area: rh;

      @include mui-flex();
      @include mui-flex-align(end, center);
    }
  }

  .mui-slush-bucket-filter {
    &.source {
      grid-area: lf;

      @include mui-flex();
      @include mui-flex-align(start, center);
    }
    &.target {
      grid-area: rf;

      @include mui-flex();
      @include mui-flex-align(end, center);
    }
  }

  .mui-slush-bucket-table {
    &.source {
      grid-area: lt;
    }
    &.target {
      grid-area: rt;
    }
  }

  .mui-slush-bucket-actions {
    display: grid;
    grid-area: actions;
    grid-gap: 8px;
    grid-template-columns: auto;
    margin: auto 0;
  }
}
</style>