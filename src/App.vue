<template>
  <div id="app">
    <the-header></the-header>
    <cart></cart>
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import Cart from './Cart.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    Cart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
*, ::before, ::after {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 24px;
}
</style>
