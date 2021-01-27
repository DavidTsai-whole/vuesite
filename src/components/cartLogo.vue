<template>
  <div class="cartlogo">
    <a class="logocart d-flex align-items-center justify-content-center" href="#/cart"
      ><i class="fas fa-shopping-cart fa-2x text-white"></i
    ></a>
    <span
      class="number d-flex align-items-center justify-content-center text-white"
      v-if="cartNum !== 0"
      >{{ cartNum }}</span
    >
  </div>
</template>
<style>
.cartlogo {
  right: 40px;
  bottom: 250px;

  z-index: 100;
  position: fixed;
}


.top:hover {
  cursor: pointer;
}
.logocart {
  width: 60px;
  height: 60px;

  border-radius: 50%;
  background: #21232d;
}
.number {
  position: absolute;
  background: #ff0000;
  width: 20px;
  height: 20px;
  top: 2px;
  right: -5px;
  border-radius: 50%;
}
@media (max-width: 768px) {
  .top {
    display: none;
  }
  .cartlogo {
    right: 10px;
  }
 
}
</style>
<script>
export default {
  data() {
    return {
      cartData: [],
      cartNum: 0,
    };
  },
  methods: {
    number() {
      const vm = this;

      vm.cartNum = vm.cartData.length;
    },
  },
  created() {
    const vm = this;
    vm.cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    vm.cartNum = vm.cartData.length;

    vm.$bus.$on("number", () => {
      (vm.cartData = JSON.parse(localStorage.getItem("cartData")) || []), vm.number();
    });
  },
};
</script>
