<template>
  <div>
  <CartLogo></CartLogo>
    <div class="container">
      <!--banner區塊-->
      <div class="main">
        <div class="banner">
          <h1>全台最正宗的美式餐廳，你不可錯過的唯一選擇。</h1>

          <div>
            <button class="btn btn-outline-dark1 btn-sm" @click="openModal">
              查看優惠
            </button>
            <button class="btn btn-dark1 btn-sm" @click="goProdut">來去逛逛</button>
          </div>
        </div>
      </div>

      <h2 class="text-center text-white p-3 bg-dark1 mt-5 mb-5 font-weight-bold">
        <i class="fas fa-utensils"></i>餐點介紹
      </h2>
      <!--餐點介紹-->
      <div class="row">
        <!--漢堡-->
        <div class="meal col-md-4 text-center">
          <a href="#" @click.prevent="toCategory('burger')">
            <img
              src="https://upload.cc/i1/2020/12/16/bTHgpY.jpg"
              class="circle mb-4 img-fluid"
              alt=""
            />
          </a>
          <h2 class="font-weight-bold">漢堡</h2>
          <p class="subTitle">不可錯過的正宗美式漢堡!</p>
          <p class="subP">會不定期的推出新口味，敬請期待</p>
          <p class="subP">有豬肉、牛肉、雞肉、菇類等多樣選擇</p>
          <button class="btn btn-outline-dark" @click.prevent="toCategory('burger')">
            查看更多
          </button>
        </div>
        <!--配菜-->
        <div class="meal col-md-4 text-center">
          <a href="#" @click.prevent="toCategory('dessert')">
            <img
              src="https://upload.cc/i1/2020/12/16/HtSnj8.jpg"
              class="circle mb-4 img-fluid"
              alt=""
            />
          </a>
          <h2 class="font-weight-bold">配菜</h2>
          <p class="subTitle">好看的劇一定是有好的配角!</p>
          <p class="subP">配菜類的商品只要續點通通9折(限內用)</p>
          <p class="subP">沙拉、炸物、烤類等多種配菜</p>
          <button class="btn btn-outline-dark" @click.prevent="toCategory('dessert')">
            查看更多
          </button>
        </div>
        <!--飲品-->
        <div class="col-md-4 text-center mb-2">
          <a href="#" @click.prevent="toCategory('drink')">
            <img
              src="https://upload.cc/i1/2020/12/16/eiLXZl.jpg"
              class="circle mb-4 img-fluid"
              alt=""
            />
          </a>
          <h2 class="font-weight-bold">飲品</h2>
          <p class="subTitle">無論甚麼心情我們都能滿足!</p>
          <p class="subP">Bottomless Beverages 無限續杯飲料 (限內用)</p>
          <p class="subP">百事可樂、柳橙汁、咖啡、湯品類</p>
          <button class="btn btn-outline-dark" @click.prevent="toCategory('drink')">
            查看更多
          </button>
        </div>
      </div>

      <h2 class="text-center text-white p-3 bg-dark1 mt-5 mb-5 font-weight-bold">
        <i class="far fa-thumbs-up"></i>美味秘訣
      </h2>

      <!--美味秘訣-->
      <div class="row mb-3">
        <!-- 1 -->
        <div class="col-md-6 develop">
          <img
            src="https://upload.cc/i1/2020/12/17/LCAwkq.jpg"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="tips col-md-6 d-flex flex-column justify-content-center">
          <h4 class="text-center font-weight-bold">
            <i class="far fa-check-circle text-success"></i>用心開發
          </h4>
          <p class="text-center mt-2">
            我們團隊裡擁有專業的開發團隊，不定期的推出新產品，並且配合問卷調查的結果淘汰反映不好的產品，永遠不滿足於當前的菜單，希望讓客人每次來都會有驚喜的感覺。
          </p>
        </div>
      </div>
      <!-- 2 -->
      <div class="row flex-row-reverse mb-3">
        <div class="col-md-6">
          <img
            src="https://upload.cc/i1/2020/12/17/Hd6blY.jpg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="tips col-md-6 d-flex flex-column justify-content-center">
          <h4 class="text-center font-weight-bold">
            <i class="far fa-check-circle text-success"></i>嚴選品質
          </h4>
          <ul class="list-unstyled text-center mt-2">
            <li class="p pb-3">
              <i class="fas fa-check text-danger"></i
              >100%原塊雞肉，肉塊完整，嚐起來更多汁健康!
            </li>
            <li class="p pb-3">
              <i class="fas fa-check text-danger"></i>防疫局屠宰衛生檢查合格
              ISO22000、CAS(生鮮肉品) HACCP 認證， 美國農業部健康證明!
            </li>
            <li class="p">
              <i class="fas fa-check text-danger"></i>由電宰廠專責人員採樣檢查
              、農委會防檢局專業獸醫師駐廠調查 廠內自主檢驗無藥物殘留!
            </li>
          </ul>
        </div>
      </div>
      <!-- 3 -->
      <div class="row">
        <div class="col-md-6">
          <img
            src="https://upload.cc/i1/2020/12/17/Hc4zUT.jpg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="tips col-md-6 d-flex flex-column justify-content-center">
          <h4 class="text-center font-weight-bold">
            <i class="far fa-check-circle text-success"></i>經營理念
          </h4>
          <p class="text-center mt-2">
            竭盡心力，用最大的服務熱誠，帶給每位客人愉悅的用餐時光。秉持這樣的理念，我們提供了美味且多樣的配菜菜及主菜，清涼的飲品，及各種令人食指大動的甜點。
          </p>
        </div>
      </div>

      <!--營業時間-->
      <div class="mt-3 openTime">
        <div class="openHour">
          <h5 class="text-white">
            營業時間: <span class="day">一 ~ 六</span
            ><span class="day"> 9:00 ~ 23:00</span>
          </h5>
        </div>
      </div>
    </div>
    <!--modal-->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body bg-light p-5">
            <i
              class="fas fa-birthday-cake fa-3x d-flex justify-content-center text-danger"
              ><span class="text-dark1 pl-2">歡慶5週年</span></i
            >
            <h3 class="text-center pt-2 font-weight-bold text-success">8折優惠碼</h3>
            <h5 id="code123" class="p-1 text-dark1 text-center w-70">
              code123<i
                class="far fa-copy ml-3"
                data-clipboard-target="#code123"
                id="copy"
                @click.prevent="copy"
              ></i>
            </h5>
            <button
              type="button"
              class="btn btn-dark1 ml-auto mr-auto d-flex mt-4"
              data-dismiss="modal"
            >
              我知道了
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.main {
  background-position: center;
  position: relative;
  background-size: cover;
  height: 520px;
  background-image: url("https://upload.cc/i1/2020/12/15/bm4g2K.jpg");
}
.banner {
  position: absolute;
  padding: 40px;
  background: #dcd9cb;
  background: hsla(0, 0%, 100%, 0.4);
  margin-top: 15%;
  text-align: center;
  left: 20%;
  right: 20%;
}
.banner h1 {
  color: #21232d;
  font-weight: bold;
}
.subTitle {
  font-weight: bold;
  margin-top: 10px;
  font-size: 20px;
  border-bottom: 2px solid #01814a;
  color: #01814a;
}
.subP {
  margin-top: 8px;
}

.develop p {
  line-height: 1.8;
  font-size: 15px;
}
.tips ul {
  font-size: 15px;
  line-height: 1.6;
}
.tips p {
  line-height: 1.8;
  font-size: 15px;
}
.circle {
  border-radius: 50%;
  height: 300px;
  width: 300px;
  object-fit: cover;
}
.menu a {
  font-weight: bold;
}
.circle:hover {
  cursor: pointer;
}
.openTime {
  height: 350px;
  background-image: url("https://upload.cc/i1/2020/11/29/Z4LJvc.jpg");
  position: relative;
  background-size: cover;
  background-position: center;
}
.openHour {
  position: absolute;
  top: 90%;
  left: 60%;
}
.modal-body h5 {
  border: 2px dashed black;
}
.day {
  font-size: 15px;
}
@media (max-width: 1200px) {
  .main {
    height: 480px;
  }
  .banner h1 {
    font-size: 30px;
  }
  .circle {
    height: 280px;
    width: 280px;
  }
}
@media (max-width: 992px) {
  .main {
    height: 400px;
  }
  .banner {
    margin-top: 20%;
  }
  .banner h1 {
    font-size: 25px;
  }
  .circle {
    height: 220px;
    width: 220px;
  }
  .subTitle {
    font-size: 15px;
  }
  .subP {
    font-size: 13px;
  }
  .openHour {
    position: absolute;
    top: 90%;
    left: 60%;
  }
  .openHour h5 {
    font-size: 19px;
  }
  .openHour span {
    font-size: 13px;
  }
}
@media (max-width: 768px) {
  .main {
    height: 400px;
  }
  .banner {
    left: 15%;
    right: 15%;
    margin-top: 16%;
  }
  .banner h1 {
    font-size: 20px;
  }
  .subTitle {
    font-size: 23px;
  }
  .subP {
    font-size: 16px;
  }
  .circle {
    height: 300px;
    width: 300px;
  }
  .openHour h5 {
    font-size: 15px;
  }
  .openHour span {
    font-size: 12px;
  }
  .meal {
    margin-bottom: 70px;
  }
  .tips{
    margin-top:30px;
    margin-bottom:30px;
  }
}
@media (max-width: 567px) {
  .main {
    height: 350px;
  }
  .banner {
    left: 15%;
    right: 15%;
  }
  .banner h1 {
    font-size: 18px;
  }
}
</style>
<script>
import $ from "jquery";
import CartLogo from '@/components/CARTLOGO'
export default {
  components:{
   CartLogo
  },
  data() {
    return {};
  },
  methods: {
    toCategory(Name) {
      this.$router.push({
        name: "customP",
        params: { categoryname: Name },
      });
    },
    goProdut() {
      this.$router.push("/product");
    },
    openModal() {
      $("#exampleModalCenter").modal("show");
    },
    copy() {
      this.$bus.$emit("message:push", "複製成功", "light");
      let clipboard = new ClipboardJS("#copy");
    },
  },
};
</script>
