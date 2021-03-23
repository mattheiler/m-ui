<template>
  <div class="mui-toaster" :class="{ [position]: true }">
    <div class="mui-toaster-content">
      <mui-toast v-for="(message, index) in messages" :key="index">{{ message }}</mui-toast>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mui-toaster',
  inject: ['toaster'],
  props: {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: 'bottom',
    },
  },
  data() {
    return {
      messages: [],
    };
  },
  created() {
    this.toaster.attach(this.name, this.messages);
  },
  destroyed() {
    this.toaster.detach(this.name);
  },
};
</script>

<style scoped lang="scss">
@import 'styles/layouts';

.mui-toaster {
  position: relative;

  @include mui-flex();
  @include mui-flex-align(center, end);

  .mui-toaster-content {
    display: flex;
    position: absolute;
    width: 300px;
  }

  &.top {
    .mui-toaster-content {
      flex-direction: column;
      top: 0;
    }
  }

  &.bottom {
    .mui-toaster-content {
      flex-direction: column-reverse;
      bottom: 0;
    }
  }
}
</style>