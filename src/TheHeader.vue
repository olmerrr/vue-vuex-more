<template>
  <div class="the-header-wrapp">
    <div>
      <h2>Logo</h2>
      <p>Please, add cup</p>
    </div>
    <p v-if="DROP_DOWN_STATE">You Add to Cart</p>
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
</style>