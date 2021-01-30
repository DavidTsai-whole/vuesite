<template>
  <div>
    <Navbar2></Navbar2>
    <Alert></Alert>
    

    <router-view style="padding-top: 150px"></router-view>

    <footer2></footer2>
  </div>
</template>

<script>
import $ from "jquery";
import Navbar2 from "./navbarHome";
import footer2 from "./footerHome";
import Alert from "./alert";

export default {
  components: {
    Navbar2,
    footer2,
    Alert,
   
  },
  data() {
    return {
      cartData: JSON.parse(localStorage.getItem("cartData")) || [],
      cartnum: 0,
    };
  },
};
</script>
