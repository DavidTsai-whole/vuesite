<template>
    <div>
     <div class="container">
     

      <div id="carouselExampleControls" class="carousel slide animate__animated animate__backInLeft" data-ride="carousel">
  <div class="carousel-inner ">
    
    <div class="carousel-item active"style="background-position:center center;position:relative;background-size:cover;height:450px; background-image:url('https://upload.cc/i1/2020/11/15/Lxgsp1.jpg');opacity:0.5">
     
    </div>
    <div class="navbarText"style="">
     <h1 class="text-brown mt-5"style="">歡慶三周年</h1>
     <p class="text-dark "style=" font-weight:bold;">快輸入優惠碼全商品享8折優惠</p>
     <a class="text-dark h5 text-center"href="#/coustomerCoupon" style="display:block;border:3px solid gold;background:red;padding:10px;font-weight:bold;cursor:pointer">點我查看</a>
     
     </div>
   
    
 

  </div>
    
 
 
</div>

  

<div class=" my-3 p-3"style="background:	#ECECFF">
<h1 class="text-center pb-5 pt-5"><i class="far fa-thumbs-up"></i>美味秘訣</h1>

<div class="row mt-3">
<div class="col-md-4 text-center mt-2">
<h2><i class="far fa-check-circle text-success"></i>用心開發</h2>
<p style=" font-weight:bold; margin-top:30px;line-height:1.8;">不滿足於當前擁有的產品，透過全體員工的發想，配合專業的研發團隊不定期的推出新產品!</p>
</div>
<div class="col-md-4 text-center  mt-2">
<h2><i class="far fa-check-circle text-success"></i>嚴選品質</h2>
<ul class="list-unstyled quality">
<li><i class="fas fa-check text-danger"></i>100% 原塊雞肉，肉塊完整，品嚐起來更多汁健康!</li>
<li><i class="fas fa-check text-danger"></i>防疫局屠宰衛生檢查合格
ISO22000、CAS(生鮮肉品)
HACCP 認證，
擁有美國農業部健康證明!</li>
<li><i class="fas fa-check text-danger"></i>由電宰廠專責人員採樣檢查
、農委會防檢局專業獸醫師駐廠調查
廠內自主檢驗無藥物殘留!</li>
</ul>
</div>

<div class="col-md-4 text-center  mt-2">
<h2><i class="far fa-check-circle text-success"></i>專心經營</h2>
<p style=" font-weight:bold; margin-top:30px;line-height:1.8;">為了讓客人始終保持味道不變,秉持著不經營其他副業，把所有心思讓跟人才都致力於本餐廳!</p>
</div>
</div>
</div>
<div class="bg-light ">
<h1 class="text-center pt-5 pb-5"><i class="fas fa-utensils"></i>餐點介紹</h1>
<div class="row">
<div class="col-md-4 text-center content ">
<a href="#"@click.prevent="toCategory('mainmeal')">
<div class="circle mb-4"  style="height: 300px; background-size: cover; background-position: center;background-image:url('https://upload.cc/i1/2020/11/04/i9FXsT.jpg')">

</div>
</a>



<h2 >主餐</h2>
<p style=" font-weight:bold; margin-top:30px;line-height:1.8;">肚子餓時來份有飽足感的餐點吧!</p>
</div> 
<div class="col-md-4 text-center">
<a href="#"@click.prevent="toCategory('dessert')">
<div class="circle mb-4 " style="height: 300px; background-size: cover; background-position: center;background-image:url('https://upload.cc/i1/2020/11/04/hrLP5k.jpg')">

</div>
</a>

<h2 >點心</h2>
<p style=" font-weight:bold; margin-top:30px;line-height:1.8;">不想吃太多又想品嘗美食嗎?來參考我們各式各樣的點心吧!</p>
</div>
<div class="col-md-4 text-center">
<a href="#"@click.prevent="toCategory('drink')">
<div class="circle mb-4"  style="height: 300px; background-size: cover; background-position: center;background-image:url('https://upload.cc/i1/2020/11/04/MQEL5a.jpg')">

</div>
</a>

<h2 >飲品</h2>
<p style=" font-weight:bold; margin-top:30px;line-height:1.8;">吃東西當然要配好喝的啊,這時可以參考我們好喝的飲品哦!</p>
</div>
</div>
</div>

<div class="mt-3 "style="height:350px;background-image:url('https://upload.cc/i1/2020/11/29/Z4LJvc.jpg');position:relative;background-size:cover;background-position: center;">
<div style="position:absolute;top:47%;left:65%">
<h1 class="text-white pt-3">營業時間</h1>
<p class="text-white"style="font-weight:bold">禮拜一~禮拜六</p>
<p class="text-white"style="font-weight:bold">AM:9:00~PM11:00</p>



</div>
</div>



     </div>
    </div>
</template>
<style>

.navbarText{
position:absolute;top:10%;left:40%;
}
.circle{
   
   border-radius:50%;
   -webkit-filter:sepia(1);
}
.circle:hover{
  
-webkit-filter:saturate(1);
  cursor:pointer;
 
}
.quality li{
  margin-top:30px;
  font-weight:bold;
}
h1{
  color:#ab4800;
  font-weight:bold;
}
h2{
  font-weight:bold;
}

.banner01{

position: relative;
height:500px;
}
.introduce{
  position: absolute;
  top:30px;
  left:30px;
  background: red;
  color:white;
  opacity: 0.7;
}
.introduce a{
  text-decoration: none;
}

</style>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    toCategory(Name){
      this.$router.push({
        name:'customP',
        params:{categoryName:Name},
      });
    },
    },
  }

</script>