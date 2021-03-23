<template>
  <div class="mui-tab-group">
    <div class="mui-tab-group-header">
      <slot />
    </div>
    <div class="mui-tab-group-content">
      <portal-target v-if="activeTab" :name="activeTab.id" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'mui-tab-group',
  provide() {
    return { group: this };
  },
  props: {
    activeTabIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      activeTabIndex$: this.activeTabIndex,
      tabs: [],
    };
  },
  computed: {
    activeTab() {
      return this.tabs[this.activeTabIndex$];
    },
  },
  methods: {
    activate(tab) {
      if (tab.disabled) return;
      this.activeTabIndex$ = this.tabs.indexOf(tab);
    },
    activated(tab) {
      return this.activeTabIndex$ === this.tabs.indexOf(tab);
    },
  },
  watch: {
    activeTabIndex(value) {
      this.activeTabIndex$ = value;
    },
    activeTabIndex$(value) {
      this.$emit('update:activeTabIndex', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/layouts';

.mui-tab-group {
  .mui-tab-group-header {
    border-bottom: 2px solid var(--mui-tab-border, lightgray);

    @include mui-flex();
    @include mui-flex-align(start, center);
  }
  .mui-tab-group-content {
  }
}
</style>