<template>
  <div class="the-header-wrapp">
    <div>
      <h2>Logo</h2>
      <p>Please, add cup</p>
    </div>
    <transition name="cart-info">
      <div v-if="DROP_DOWN_STATE" class="cart">You Add to Cart</div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TheHeader",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["DROP_DOWN_STATE"]),
  },
};
</script>

<style scoped>
.the-header-wrapp {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: rgb(224, 92, 92);
  color: #fff;
}
.cart {
  border-radius: 4px;
  text-align: center;
  background: #fff;
  color: #333;
  width: 100px;
  height: 50px;
  padding: 6px 8px;
  line-height: 20px;
}
.cart-info-enter-from,
.cart-info-leave-to {
  opacity: 0;
}
.cart-info-enter-active {
  transition: opacity 0.9s ease-out;
}
.cart-info-leave-active {
  transition: opacity 0.5s ease-in;
}
.cart-info-enter-to,
.cart-info-leave-from {
  opacity: 1;
}
</style>