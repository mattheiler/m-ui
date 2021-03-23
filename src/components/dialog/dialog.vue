<template>
  <transition name="popup">
    <div class="mui-dialog-backdrop" v-if="opened$">
      <mui-focus-trap class="mui-dialog" :deactivate-on-outside-click="!modal" deactivate-on-esc return-focus-on-deactivate @deactivate="close">
        <slot name="header" />
        <slot />
        <slot name="footer" />
      </mui-focus-trap>
    </div>
  </transition>
</template>

<script>
import dialog from './dialog';

export default {
  name: 'mui-dialog',
  mixins: [dialog],
  provide() {
    return {
      dialog: this,
    };
  },
};
</script>

<style scoped lang="scss">
@import 'styles/layouts';
@import 'styles/shadows';
@import 'styles/utils';

.mui-dialog-backdrop {
  background-color: rgba(0, 0, 0, 0.5); // TODO variablize
  transition: opacity 0.3s ease;
  z-index: 9999;

  @include mui-fullscreen(fixed);
  @include mui-flex(column);
  @include mui-flex-align(center, center);

  .mui-dialog {
    background: white; // TODO variablize
    border-radius: 4px;
    box-sizing: border-box;
    color: black; // TODO variablize
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
    min-width: 400px;
    min-height: 100px;
    padding: 16px;
    transition: all 0.3s ease;

    @include mui-shadow(6);
  }
}

.popup-enter,
.popup-leave-active {
  opacity: 0;
}
.popup-enter .mui-dialog,
.popup-leave-active .mui-dialog {
  transform: scale(1.1);
}
</style>