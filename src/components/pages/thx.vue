<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-2">
        <div
          class="col-md-12"
          style="
            background-position: center center;
            position: relative;
            background-size: cover;
            height: 550px;
            background-image: url('https://upload.cc/i1/2020/12/26/oIy29m.jpg');
          "
        >
          <div>
            <h2 class="thxH2 text-white font-weight-bold">交易成功</h2>
            <i class="thxI far fa-check-circle fa-5x text-success"></i>
            <h3 class="thxH3 text-white font-weight-bold">專人會盡快與您聯絡</h3>
            <button class="thxBtn btn btn-light font-weight-bold" @click="shopping">
              繼續購物
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    shopping() {
      this.$router.push("/product");
    },
  },
};
</script>
<style scoped>
.thxH2 {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  padding-top: 130px;
}
.thxI {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  padding-top: 50px;
}
.thxH3 {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  padding-top: 180px;
}
.thxBtn {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin-top: 230px;
}
</style>
