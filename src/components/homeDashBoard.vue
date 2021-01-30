<template>
  <div>
  <div class="wraper">
    <Navbar2></Navbar2>
    <Alert></Alert>
    

    <router-view class="layout"></router-view>
    <div class="FooterPush"></div>
    
  </div>
  <footer2></footer2>
  </div>
</template>
<style scoped>
*
{
  margin: 0;
  padding: 0;
}
body, html
{
  height: 100%;
}
  .layout{
    padding-top:120px;
    
  }
 .wrap{
        min-height: 100%;
            
        }
  .FooterPush{
    height:220px;
  }
</style>
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
