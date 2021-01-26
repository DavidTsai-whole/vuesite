<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <ul class="list-unstyled d-flex justify-content-around">
            <li class="topLogo2 d-flex align-items-center justify-content-center h3">
              購物車
            </li>
            <li><i class="fas fa-arrow-right fa-4x text-danger ml-2 mr-2"></i></li>
            <li
              class="topLogo1 d-flex align-items-center justify-content-center h3 text-white bg-dark1"
            >
              結帳
            </li>
            <li><i class="fas fa-arrow-right fa-4x text-danger ml-2 mr-2"></i></li>
            <li class="topLogo2 d-flex align-items-center justify-content-center h3">
              訂單完成
            </li>
          </ul>
          <div class="mt-5">
            <div class="text-center" v-if="allcart.total < 1000 && allcart.total !== 0">
              <h4 class="font-weight-bold">
                消費總金額
                <span class="h2 text-success">
                  NT${{ Math.round(allcart.final_total + 60) }}</span
                >
              </h4>
            </div>
            <div
              class="text-center"
              v-else="allcart.total >= 1000 && allcart.total === 0"
            >
              <h4 class="font-weight-bold">
                消費總金額
                <span class="h2 text-success">
                  NT${{ Math.round(allcart.final_total) }}</span
                >
              </h4>
            </div>

            <div class="text-center" v-if="allcart.total !== 0">
              <h4 class="totalTitle font-weight-bold" @click.prevent="hide = !hide">
                總計{{ cartnum }}件商品<i
                  class="fas fa-angle-down"
                  v-if="hide == true"
                ></i
                ><i class="fas fa-angle-up" v-else></i>
              </h4>
              <div class="input-group w-50 ml-auto mr-auto mt-3">
                <input
                  type="text"
                  class="inputCoupon form-control"
                  aria-label="Recipient's username"
                  v-if="allcart.total !== 0"
                  placeholder="請輸入優惠卷"
                  v-model="couponcode"
                  aria-describedby="button-addon2"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-dark1"
                    v-if="allcart.total !== 0"
                    type="button"
                    id="button-addon2"
                    @click="useCoupon"
                  >
                    傳送
                  </button>
                </div>
              </div>
              <table
                class="table mt-5 table-borderless bg-dark1 text-white"
                :class="{ 'd-none': hide }"
                v-if="allcart.total !== 0"
              >
                <thead class="thead-dark">
                  <th class="text-center">品名</th>
                  <th class="text-center">圖片</th>
                  <th class="text-center">數量</th>
                  <th class="text-center">價錢</th>
                </thead>

                <tbody>
                  <tr class="checkBorder" v-for="item in allcart.carts">
                    <td class="text-center pt-4" v-if="item.final_total !== item.total">
                      {{ item.product.title }}<br /><span class="text-danger"
                        >(已套用優惠卷)</span
                      >
                    </td>
                    <td class="text-center pt-4" v-else>{{ item.product.title }}</td>
                    <td class="text-center">
                      <img class="checkImg" :src="`${item.product.imageUrl}`" alt="" />
                    </td>
                    <td class="text-center pt-4">{{ item.qty }}</td>
                    <td class="text-center pt-4">{{ item.product.price }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="4" v-if="allcart.total >= 1000" class="text-right">
                      (滿1000免運)
                    </td>
                  </tr>

                  <tr>
                    <td colspan="3" class="text-right">小計:</td>
                    <td class="text-right">${{ allcart.total }}元</td>
                  </tr>

                  <tr class="tableBorder">
                    <td colspan="3" class="text-right">運費:</td>
                    <td
                      v-if="allcart.total >= 1000 || allcart.total === 0"
                      class="text-right"
                    >
                      $0元
                    </td>
                    <td v-else class="text-right">$60元</td>
                  </tr>

                  <tr>
                    <td colspan="3" class="text-right h3">總計:</td>
                    <td
                      v-if="allcart.total >= 1000 || allcart.total === 0"
                      class="h3 text-right"
                    >
                      ${{ allcart.total }}元
                    </td>
                    <td v-else class="h3 text-right">${{ allcart.total + 60 }}元</td>
                  </tr>

                  <tr
                    v-if="allcart.total !== allcart.final_total && allcart.total < 1000"
                  >
                    <td colspan="3" class="text-right h3 text-success">折扣價:</td>
                    <td class="h3 text-right text-success">
                      ${{ Math.round(allcart.final_total + 60) }}元
                    </td>
                  </tr>
                  <tr
                    v-if="allcart.total !== allcart.final_total && allcart.total >= 1000"
                  >
                    <td colspan="3" class="text-right h3 text-success">折扣價:</td>
                    <td class="h3 text-right text-success">
                      ${{ Math.round(allcart.final_total) }}元
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div
            class="my-5 row justify-content-center bg-dark1 text-white"
            v-if="allcart.total !== 0"
          >
            <validation-observer class="col-md-10 p-3" v-slot="{ invalid }">
              <form @submit.prevent="submitorder">
                <validation-provider
                  class="form-group"
                  rules="required|email"
                  v-slot="{ errors, classes }"
                >
                  <!-- 輸入框 -->
                  <label for="email">Email<span class="text-danger">(必填)</span></label>
                  <input
                    id="email"
                    type="email"
                    name="電子信箱"
                    v-model="form.user.email"
                    class="form-control"
                    :class="classes"
                  />
                  <!-- 錯誤訊息 -->
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
                <validation-provider
                  class="form-group"
                  rules="required|min:3"
                  v-slot="{ errors, classes }"
                >
                  <!-- 輸入框 -->
                  <label for="name">姓名<span class="text-danger">(必填)</span></label>
                  <input
                    id="name"
                    type="text"
                    name="姓名"
                    v-model="form.user.name"
                    class="form-control"
                    :class="classes"
                  />
                  <!-- 錯誤訊息 -->
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>

                <validation-provider
                  class="form-group"
                  rules="required|min:8|max:10"
                  v-slot="{ errors, classes }"
                >
                  <!-- 輸入框 -->
                  <label for="tel">電話<span class="text-danger">(必填)</span></label>
                  <input
                    id="tel"
                    type="tel"
                    name="電話"
                    v-model="form.user.tel"
                    class="form-control"
                    :class="classes"
                  />
                  <!-- 錯誤訊息 -->
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
                <validation-provider
                  class="form-group"
                  rules="required"
                  v-slot="{ errors, classes }"
                >
                  <!-- 輸入框 -->
                  <label for="address">地址<span class="text-danger">(必填)</span></label>
                  <input
                    id="address"
                    type="tel"
                    name="地址"
                    v-model="form.user.address"
                    class="form-control"
                    :class="classes"
                  />
                  <!-- 錯誤訊息 -->
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>

                <validation-provider class="form-group" v-slot="{ errors, classes }">
                  <!-- 輸入框 -->
                  <label for="comment"
                    >留言<span class="text-success">(選填)</span></label
                  >
                  <textarea
                    name="留言"
                    id="comment"
                    class="form-control"
                    cols="30"
                    rows="10"
                    v-model="form.message"
                  ></textarea>

                  <!-- 錯誤訊息 -->
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
                <div class="text-right pb-3 pt-3">
                  <button
                    class="notAllowed btn btn-danger"
                    v-if="invalid"
                    :disabled="invalid"
                  >
                    送出訂單
                  </button>
                  <button class="btn btn-danger" v-if="!invalid" :disabled="invalid">
                    送出訂單
                  </button>
                </div>
              </form>
            </validation-observer>
          </div>

          <div class="text-center mt-5" v-else>
            <h1 class="text-danger fonr-weight-bold">請重新選購商品!!</h1>
            <div class="d-flex justify-content-around mt-5">
              <a class="h3 cartin font-weight-bold" href="#/product"
                ><i class="fas fa-arrow-circle-left"></i>前往購物</a
              >
              <a class="h3 cartin font-weight-bold" href="#/"
                ><i class="fas fa-arrow-circle-right"></i>回首頁</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkBorder {
  border-bottom: 1px solid #e0e0e0;
}
.checkImg {
  height: 80px;
  width: 80px;
}
.totalTitle {
  cursor: pointer;
  display: inline;
}
.inputCoupon {
  border: 2px solid black;
}
.notAllowed {
  cursor: not-allowed;
}
</style>
<script>
export default {
  data() {
    return {
      isLoading: false,
      allcart: [],
      cartnum: 0,
      hide: true,
      couponcode: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      cartData: JSON.parse(localStorage.getItem("cartData")) || [],
      LocalData: [],
    };
  },
  methods: {
    getcart() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart`;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.allcart = response.data.data;
        vm.cartnum = vm.cartData.length;
      });
    },
    useCoupon() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/coupon`;
      vm.isLoading = true;
      const coupon = {
        code: vm.couponcode,
      };
      vm.$http.post(api, { data: coupon }).then((response) => {
        vm.isLoading = false;

        vm.coupondata = response.data.data;
        if (response.data.success === true)
          vm.$bus.$emit("message:push", "已使用優惠卷", "light");
        else vm.$bus.$emit("message:push", "此序號不存在", "danger");
        vm.getcart();
      });
    },
    submitorder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/order`;
      vm.isLoading = true;
      vm.$http.post(api, { data: vm.form }).then((response) => {
        vm.cartData = [];
        localStorage.removeItem("cartData");
        vm.isLoading = false;
        vm.$bus.$emit("number");
        vm.$router.push(`/checkoutFinal/${response.data.orderId}`);
      });
    },
  },
  created() {
    const vm = this;
    vm.getcart();
    vm.$bus.$on("getLocalData", (msg) => {
      vm.LocalData.push(msg);
    });
  },
};
</script>
