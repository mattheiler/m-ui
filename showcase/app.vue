<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~@marvolo/icons/dist/icons.css';
@import '~normalize.css/normalize.css';
@import 'styles/theme';

#app {
  @include mui-theme();
}
</style>