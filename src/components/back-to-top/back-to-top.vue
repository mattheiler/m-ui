<template>
  <transition name="fade">
    <button class="mui-back-to-top" :class="classes" v-if="visible" @click="scrollToTop">
      <slot />
    </button>
  </transition>
</template>

<script>
export default {
  name: 'mui-back-to-top',
  props: {
    for: {
      type: String,
    },
  },
  data() {
    return {
      content: null,
      scrollTop: null,
      scrollHeight: null,
    };
  },
  computed: {
    classes() {
      return {
        fixed: this.fixed,
      };
    },
    fixed() {
      return this.content === document;
    },
    scrollview() {
      return this.content === document ? document.documentElement : this.content;
    },
    visible() {
      // Constants derived by testing what feels "right" as a user...
      // At least 3 screens worth of content & scrolled a quarter of a screen.
      return this.content != null && this.scrollHeight / this.scrollview.clientHeight >= 3 && this.scrollTop >= this.scrollHeight / 4;
    },
  },
  methods: {
    scroll() {
      this.scrollTop = this.scrollview.scrollTop;
      this.scrollHeight = this.scrollview.scrollHeight;
    },
    scrollToTop() {
      let offset = 0;
      const interval = setInterval(() => {
        if (this.scrollview.scrollTop <= 0) {
          clearInterval(interval);
        } else {
          offset += 0.2;
          this.scrollview.scrollTop -= offset < 0.5 ? 4 * offset ** 3 : (offset - 1) * (2 * offset - 2) ** 2 + 1;
        }
      }, 10);
    },
  },
  mounted() {
    this.content = this.$vnode.context.$refs[this.for] || document;
    this.content.addEventListener('scroll', this.scroll);
  },
  destroyed() {
    this.content.removeEventListener('scroll', this.scroll);
  },
};
</script>

<style scoped lang="scss">
@import 'styles/layouts';
@import 'styles/shadows';

.mui-back-to-top {
  background-color: var(--mui-back-to-top-background, buttonface);
  border: none;
  border-radius: 50%;
  bottom: 32px;
  color: var(--mui-back-to-top-foreground, buttontext);
  cursor: pointer;
  font-weight: 500;
  height: 56px;
  outline: none;
  position: absolute;
  right: 32px;
  width: 56px;
  z-index: 9999;

  &.fixed {
    position: fixed;
  }

  @include mui-flex(column);
  @include mui-flex-align(center, center);
  @include mui-shadow(6);
}

.fade-enter-active,
.fade-leave-active {
  transform-origin: center center;
  transition: all 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.fade-enter,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>