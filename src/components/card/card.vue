<template>
  <div class="mui-card">
    <div class="mui-card-header" v-if="headered">
      <div class="mui-card-title" v-if="titled">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="mui-card-subtitle" v-if="subtitled">
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
      <div class="mui-card-actions" v-if="actionable">
        <slot name="actions" />
      </div>
    </div>
    <div class="mui-card-body">
      <slot />
    </div>
    <div class="mui-card-footer" v-if="footered">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'mui-card',
  props: {
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
  },
  computed: {
    actionable() {
      return this.$slots.actions;
    },
    footered() {
      return this.$slots.footer;
    },
    headered() {
      return this.titled || this.subtitled || this.actionable;
    },
    subtitled() {
      return this.$slots.subtitle || this.subtitle;
    },
    titled() {
      return this.$slots.title || this.title;
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/layouts';
@import 'styles/shadows';

.mui-card {
  background-color: var(--mui-card-background, white);
  border-radius: 4px;

  @include mui-shadow(1);

  .mui-card-header {
    padding: 24px;

    .mui-card-title {
      font-size: var(--mui-card-title-font-size, 24px);
      font-weight: var(--mui-card-title-font-weight, bold);
    }
    .mui-card-subtitle {
      font-size: var(--mui-card-subtitle-font-size, 18px);
      font-weight: var(--mui-card-subtitle-font-weight, normal);
    }
  }

  .mui-card-body {
    padding: 24px;
  }

  .mui-card-footer {
    padding: 24px;
  }
}
</style>