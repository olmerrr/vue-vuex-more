<template>
  <div class="cart-wrapper">
    <div class="cart-item">
      <p class="cart-item__title">Super Cup</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtJ2BlejRgkl9b81zzT0EEZ6RMuKccep9tQ&usqp=CAU"
      />
      <p class="cart-item__description">
        Lorem ipsum dolor sit amet cons consequuntur ratione. Excepturi natus
        minima soluta quia ut ipsa, totam aliquid? Laudantium eum tenetur nemo
        vitae quos neque ipsa in modi. Dolorem, dolores quasi. Eaque, sint?
      </p>
      <button @click="btnClick">Add</button>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Cart",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'DROP_DOWN_STATE'
    ])
  },
  methods: {
    ...mapActions([
        'TOGGLE_DROP_DOWN'
      ]),
    btnClick() {
      this.TOGGLE_DROP_DOWN();
    }
  },
  

};
</script>
<style scoped>
.cart-wrapper{
  padding: 20px 0;
  display: flex;
  justify-content: center;
}
.cart-item {
  padding: 10px 20px 25px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow:-5px -2px 8px 0 #ccc;
  
}
.cart-item__title {
  font-weight: 600;
  font-size: 18px;
  color: #333;
}
.cart-item__description {
  opacity: 0.8;
}
.cart-item img {
  max-width: 150px;
}
.cart-item button {
  color:#fff;
  cursor: pointer;
  font-size: 18px;
  width: 100%;
  padding: 4px 12px;
  background: #337ab7;
  border: none;
  border-radius: 4px;
}
.cart-item button:hover {
  opacity: .7;
}
</style>