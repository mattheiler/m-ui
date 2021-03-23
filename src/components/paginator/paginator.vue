<template>
  <div class="mui-paginator">
    <div class="mui-paginator-sizing">
      <label class="mui-paginator-view">View</label>
      <div class="mui-paginator-size">
        <mui-select v-model="size$">
          <mui-option v-for="(size, index) in sizes" :key="index" :value="size">{{ size }}</mui-option>
        </mui-select>
      </div>
    </div>
    <div class="mui-paginator-paging">
      <label class="mui-paginator-info">{{ lower }} - {{ upper }} of {{ count }}</label>
      <mui-button class="mui-paginator-prev" kind="icon" @click="prev" :disabled="prevDisabled">
        <mui-icon name="chevron-left" />
      </mui-button>
      <mui-button class="mui-paginator-next" kind="icon" @click="next" :disabled="nextDisabled">
        <mui-icon name="chevron-right" />
      </mui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mui-paginator',
  data() {
    return {
      size$: this.size,
    };
  },
  props: {
    index: {
      type: Number,
      default: 0,
      validator: index => index >= 0,
    },
    size: {
      type: Number,
      default: 25,
    },
    sizes: {
      type: Array,
      default: () => [25, 50, 100],
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    lower() {
      return this.index * this.size + 1;
    },
    upper() {
      const start = this.index * this.size;
      return start < this.count ? Math.min(start + this.size, this.count) : start + this.size;
    },
    prevDisabled() {
      return this.index < 1;
    },
    nextDisabled() {
      return this.index + 1 >= this.count / this.size;
    },
  },
  methods: {
    page(index, size = this.size) {
      this.$emit('page', { index, size });
    },
    prev() {
      this.page(this.index - 1);
    },
    next() {
      this.page(this.index + 1);
    },
  },
  watch: {
    indexSelected(value) {
      this.page(value);
    },
    size(value) {
      this.size$ = value;
    },
    sizeSelected(value) {
      this.page(0, value);
    },
  },
};
</script>


<style lang="scss" scoped>
@import 'styles/breakpoints';
@import 'styles/layouts';
@import 'styles/utils';

.mui-paginator {
  line-height: 36px;
  padding: 8px;
  user-select: none;

  @include mui-media-lteq(xs) {
    @include mui-flex(column);
    @include mui-flex-align(center, end);
  }

  @include mui-media-gt(xs) {
    @include mui-flex();
    @include mui-flex-align(end, center);
  }

  .mui-paginator-sizing {
    @include mui-flex();
    @include mui-flex-align(center, center);
    @include mui-flex-item(none);

    .mui-paginator-view {
      margin-left: 16px;

      @include mui-flex-item(none);
    }

    .mui-paginator-size {
      margin-left: 16px;

      @include mui-flex-item(none);
    }
  }

  .mui-paginator-paging {
    @include mui-flex();
    @include mui-flex-align(center, center);
    @include mui-flex-item(none);

    .mui-paginator-info {
      margin-left: 16px;
    }

    .mui-paginator-prev {
      margin-left: 16px;
    }

    .mui-paginator-next {
      margin-left: 16px;
    }
  }
}
</style>
