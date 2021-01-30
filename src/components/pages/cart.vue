<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <CartLogo></CartLogo>
    <div class="container">
      <div class="row justify-content-center mt-2">
        <div class="col-md-8">
          <ul class="list-unstyled d-flex justify-content-around">
            <li
              class="topLogo1 d-flex align-items-center justify-content-center  bg-dark1"
            >
              購物車
            </li>
            <li><i class="fas fa-arrow-right  text-danger ml-2 mr-2"></i></li>
            <li class="topLogo2 d-flex align-items-center justify-content-center ">
              結帳
            </li>
            <li><i class="fas fa-arrow-right  text-danger ml-2 mr-2"></i></li>
            <li class="topLogo2 d-flex align-items-center justify-content-center ">
              訂單完成
            </li>
          </ul>
          <table
            class="cartTable table mt-5 table-borderless bg-dark1"
            v-if="cartData.length > 0"
          >
            <thead class="bg-dark">
              <th class="text-center"width="30%" >品名</th>
              <th class="text-center">圖片</th>
              <th class="text-center">數量</th>
              <th class="text-center" width="12%">價錢</th>
              <th class="text-center" width="20%">刪除</th>
            </thead>

            <tbody>
              <tr class="borderBot" v-for="item in cartData" :key="item.id">
                <td class="text-center pt-4">{{ item.title }}</td>
                <td class="text-center">
                  <img class="cartImg" :src="`${item.imageUrl}`" alt="" />
                </td>
                <td class="text-center pt-4">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button
                      type="button"
                      class="btn btn-light btn-sm"
                      @click.prevent="lessQty(item)"
                    >
                      -
                    </button>
                    <button class="btn btn-outline-light btn-sm" disabled>{{ item.qty }}</button>
                    <button type="button" class="btn btn-light btn-sm" @click="addQty(item)">
                      +
                    </button>
                  </div>
                </td>
                <td class="text-right pt-4">{{ item.price }}</td>
                <td class="text-center pt-4">
                  <i
                    class="far fa-trash-alt text-danger fa-2x"
                    @click="deleteCart(item)"
                  ></i>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" v-if="totoaPrice >= 1000" class="text-right text-white">
                  (滿1000免運)
                </td>
              </tr>

              <tr>
                <td colspan="4" class="text-right">小計:</td>
                <td class="text-right">${{ totoaPrice }}</td>
              </tr>

              <tr class="tableBorder">
                <td colspan="4" class="text-right">運費:</td>
                <td v-if="totoaPrice >= 1000" class="text-right">$0</td>
                <td v-else class="text-right">$60</td>
              </tr>

              <tr>
                <td colspan="4" class="text-right h3">總計:</td>
                <td v-if="totoaPrice >= 1000" class="h3 text-right">
                  ${{ totoaPrice }}
                </td>
                <td v-else class="h3 text-right">${{ totoaPrice + 60 }}</td>
              </tr>
            </tfoot>
          </table>

          <div class="text-center mt-5 text-danger font-weight-bold" v-else>
            <h2 class="noMerch font-weight-bold">您目前並沒有選擇任何商品喔!</h2>

            <div class="link d-flex justify-content-around mb-5">
              <a class="h3 cartin font-weight-bold" href="#/product"
                ><i class="fas fa-arrow-circle-left"></i>前往購物</a
              >
              <a class="h3 cartin font-weight-bold" href="#/"
                ><i class="fas fa-home"></i>回首頁</a
              >
            </div>
          </div>

          .

          <div class="mt-5" v-if="totoaPrice > 0">
            <div class="d-flex justify-content-around mt-5">
              <a class="h3 cartin font-weight-bold" href="#/product"
                ><i class="fas fa-arrow-circle-left"></i>繼續購物</a
              >
              <a class="h3 cartin font-weight-bold" href="#" @click.prevent="goCheckout"
                ><i class="fas fa-arrow-circle-right"></i>結帳</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.table {
  color: #dcd9cb;
}
.borderBot {
  border-bottom: 2px solid #dcd9cb;
}
.noMerch {
  margin-top: 100px;
}
.link {
  margin-top: 100px;
}
.topLogo1 {
  font-size:25px;
  height: 60px;
  width: 200px;
  border-radius: 15px;
  color: #dcd9cb;
  font-weight: bold;
}
.topLogo2 {
  font-size:25px;
  border: 3px solid #21232d;
  height: 60px;
  width: 200px;
  border-radius: 15px;
  font-weight: bold;
}
.fa-arrow-right{
  font-size:50px;
  padding-top:7px;
}
.cartImg {
  height: 70px;
  width: 70px;
}
.tableBorder {
  border-bottom: 2px solid #dcd9cb;
}
.far:hover {
  cursor: pointer;
}
.cartin {
  border-bottom: 4px solid transparent;
  color: #21232d;
}
.cartin:hover {
  border-bottom: 3px solid black;
}
@media(max-width:768px){
  .topLogo1 {
  font-size:18px;
}
.topLogo2 {
  font-size:18px;
}
.fa-arrow-right{
  font-size:30px;
  padding-top:17px;
}
}
</style>
<script>
import CartLogo from '@/components/CARTLOGO'
export default {
  components:{
   CartLogo
  },
  data() {
    return {
      isLoading: false,
      allcart: [],
      cartData: JSON.parse(localStorage.getItem("cartData")) || [],
      totoaPrice: 0,
    };
  },
  methods: {
    getCartData() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart`;
      vm.$http.get(api).then((response) => {
        vm.allcart = response.data.data.carts;
      });
    },
    deleteCartData(id) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart/${id}`;
      vm.$http.delete(api).then((response) => {});
    },

    getTotalPr() {
      const vm = this;
      vm.totoaPrice = 0;
      vm.cartData.forEach((item) => {
        vm.totoaPrice += item.price * item.qty;
      });
    },

    addQty(item) {
      const vm = this;

      item.qty += 1;
      localStorage.setItem("cartData", JSON.stringify(vm.cartData));
      vm.getTotalPr();

      vm.$bus.$emit("message:push", "以更新商品數量", "light");
    },
    lessQty(item) {
      const vm = this;

      item.qty -= 1;
      localStorage.setItem("cartData", JSON.stringify(vm.cartData));
      vm.getTotalPr();

      if (item.qty == 0) {
        vm.deleteCart(item);
        localStorage.setItem("cartData", JSON.stringify(vm.cartData));
      } else {
        vm.$bus.$emit("message:push", "已更新商品數量", "light");
      }
    },

    deleteCart(item2) {
      const vm = this;

      vm.cartData.forEach((item, key) => {
        if (item2.product_id === item.product_id) {
          vm.cartData.splice(key, 1);
        }
        localStorage.setItem("cartData", JSON.stringify(vm.cartData));
        vm.getTotalPr();
      });

      vm.allcart.forEach((item, key) => {
        if (item2.product_id === item.product_id) {
          vm.deleteCartData(item.id);
          console.log(item.id);
        }
      });
      vm.getCartData();
      vm.$bus.$emit("number");
      vm.$bus.$emit("message:push", "已移除該商品", "light");
    },
    goCheckout() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart`;
      vm.cartData.forEach((item) => {
        const cartParameter = {
          product_id: item.product_id,
          qty: item.qty,
        };
        vm.$http.post(api, { data: cartParameter }).then(() => {
          vm.isLoading = false;
        });
      });
      vm.allcart.forEach((item) => {
        vm.cartData.forEach((item2) => {
          if (item.product_id === item2.product_id) {
            vm.deleteCartData(item.id);
          }
        });
      });

      setTimeout(() => {
        vm.$router.push("/checkout");
      }, 2000);
    },
  },
  created() {
    this.getTotalPr();
    this.getCartData();
  },
};
</script>
