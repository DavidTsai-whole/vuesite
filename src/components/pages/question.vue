<template>
  <div>
  <CartLogo></CartLogo>
    <div class="container pb-5">
      <h2 class="text-center pb-3 font-weight-bold">
        <i class="fas fa-cog text-danger"></i>常見問題
      </h2>

      <div
        class="bg-dark1 text-white mt-5 d-flex align-items-center justify-content-around p-3"
        @click.prevent="hide = !hide"
      >
        <h2>Q1.營業時間?</h2>
        <i class="fas fa-chevron-down fa-2x" v-if="hide == true"></i>
        <i class="fas fa-chevron-up fa-2x" v-else></i>
      </div>
      <div class="text-center pt-3" :class="{ 'd-none': hide }">
        <h3 class="pt-3">禮拜一~禮拜六 AM:900~PM:11:00</h3>
      </div>

      <div
        class="bg-dark1 text-white mt-5 d-flex align-items-center justify-content-around p-3"
        @click.prevent="hide2 = !hide2"
      >
        <h2>Q2.有缺人嗎?如何應徵呢?</h2>
        <i class="fas fa-chevron-down fa-2x" v-if="hide2 == true"></i>
        <i class="fas fa-chevron-up fa-2x" v-else></i>
      </div>
      <div class="text-center pt-3" :class="{ 'd-none': hide2 }">
        <h3 class="pt-3">有職缺的話會刊登在104人力銀行並搜尋滿漢全雞就能找到哦!</h3>
      </div>

      <div
        class="bg-dark1 text-white mt-5 d-flex align-items-center justify-content-around p-3"
        @click.prevent="hide3 = !hide3"
      >
        <h2>Q3.有其他分店嗎?</h2>
        <i class="fas fa-chevron-down fa-2x" v-if="hide3 == true"></i>
        <i class="fas fa-chevron-up fa-2x" v-else></i>
      </div>
      <div class="text-center pt-3" :class="{ 'd-none': hide3 }">
        <h3 class="pt-3">目前正在積極規劃中哦!</h3>
      </div>

      <div
        class="bg-dark1 text-white mt-5 d-flex align-items-center justify-content-around p-3"
        @click.prevent="hide4 = !hide4"
      >
        <h2>Q4.有開放加盟嗎?</h2>
        <i class="fas fa-chevron-down fa-2x" v-if="hide4 == true"></i>
        <i class="fas fa-chevron-up fa-2x" v-else></i>
      </div>
      <div class="text-center pt-3" :class="{ 'd-none': hide4 }">
        <h3 class="pt-3">目前正在積極規劃中哦!</h3>
      </div>
    </div>
  </div>
</template>

<script>
import CartLogo from '@/components/CARTLOGO'
export default {
  components:{
CartLogo
  },
  data() {
    return {
      hide: true,
      hide2: true,
      hide3: true,
      hide4: true,
    };
  },
};
</script>
