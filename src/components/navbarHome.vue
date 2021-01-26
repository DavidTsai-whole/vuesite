<template>
  <div class="header bg-dark1 mb-5">
    <div class="container d-flex justify-content-between align-items-center">
      <h1 class="h1Title pt-3" @click="goHome">ChillBurger</h1>

      <ul class="menu list-unstyled d-flex pt-4">
        <li>
          <a href="#/product"><i class="fas fa-book-open"></i>美味菜單</a>
        </li>
        <li>
          <a href="#/track"><i class="far fa-grin-hearts"></i>我的收藏</a>
        </li>
        <li>
          <a href="#/login"><i class="fas fa-sign-in-alt"></i>後台管理</a>
        </li>
      </ul>
      <a href="#" class="rwdMenu" @click.prevent="showmenu"
        ><i class="fas fa-bars fa-3x"></i
      ></a>
    </div>
  </div>
</template>
<style>
.header {
  position: fixed;
  width: 100%;
  z-index: 10000000;
  height: 90px;
}

.h1Title {
  font-weight: bold;
  color: #dcd9cb;
  font-family: "Indie Flower", cursive;
}
.h1Title:hover {
  cursor: pointer;
}
.menu a {
  display: block;
  padding: 10px;
  color: #dcd9cb;
  font-size: 20px;
}
.menu a:hover {
  transform: scale(1.2);
}
.rwdMenu {
  display: none;
}
.rwdMenu i {
  color: #dcd9cb;
}
@media (max-width: 768px) {
  .menu {
    flex-direction: column;

    max-height: 0px;
    overflow: hidden;
    position: absolute;
    z-index: 10000000000;
    transition: 1.5s;
    top: 69px;
    left: 0;
    right: 0;
    background: #21232d;
  }

  .menu li {
    border-bottom: 2px dashed white;
    text-align: center;
  }
  .menu-show .menu {
    max-height: 300px;
  }
  .menu a:hover {
    color: #21232d;
    transform: none;
  }
  .rwdMenu {
    display: block;
  }
  .menu li:hover {
    background: white;
  }
}
</style>

<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    showmenu() {
      $("body").toggleClass("menu-show");
    },
  },
  created() {},
};
</script>
