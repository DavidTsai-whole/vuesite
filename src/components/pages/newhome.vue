<template>
    <div>
     <div class="container">
<div class="main" style="background-position:center center;position:relative;background-size:cover;height:520px; background-image:url('https://upload.cc/i1/2020/12/15/bm4g2K.jpg
');">
      <div class="banner p-5 text-white"style="position:absolute;font-weight:bold;">
      全台最正宗的美式餐廳，你不可錯過的唯一選擇。
      <div>
        <a href="#/product"class="homebtn text-white "style="border:1px solid white;padding:8px">來去逛逛</a>
        <a href="#/coustomerCoupon"class="homebtn text-white "style="border:1px solid white;padding:8px">查看優惠</a>
      </div>
    
     
      </div>


     </div>

    
 
 


  
<div class="container">
<h2 class="text-center text-danger p-5"style="font-weight:bold"><i class="fas fa-utensils"></i>餐點介紹</h2>
<div class="row ">

<div class="col-md-4 text-center  mb-3">
<a href="#"@click.prevent="toCategory('burger')">
<div class="circle mb-4"  style="height: 300px; background-size: cover; background-position: center;background-image:url('https://upload.cc/i1/2020/12/16/ULuyja.jpg')">

</div>
</a>
<h2 style="font-weight:bold">漢堡</h2>
<p style=" font-weight:bold; margin-top:10px;font-size:20px;border-bottom:2px solid 	#01814A;color:	#01814A">不可錯過的正宗美式漢堡!</p>
<p style=" font-weight:bold; margin-top:20px;">會不定期的推出新口味，敬請期待</p>
<p style=" font-weight:bold; margin-top:20px;">有豬肉、牛肉、雞肉、菇類等多樣選擇</p>
<button class="btn btn-outline-dark"@click.prevent="toCategory('burger')">查看更多</button>
</div> 

<div class="col-md-4 text-center mb-3"style="">
<a href="#"@click.prevent="toCategory('dessert')">
<div class="circle mb-4 " style="height: 300px; background-size: cover; background-position: center;background-image:url('https://upload.cc/i1/2020/12/16/Zi9GVn.jpg');">
</div>
</a>
<h2 style="font-weight:bold">配菜</h2>
<p style=" font-weight:bold; margin-top:10px;font-size:20px;border-bottom:2px solid 	#01814A;color:	#01814A">好看的劇一定是有好的配角!</p>
<p style=" font-weight:bold; margin-top:20px;">配菜類的商品只要續點通通9折(限內用)</p>
<p style=" font-weight:bold; margin-top:20px;">沙拉、炸物、烤類等多種配菜</p>
<button class="btn btn-outline-dark"@click.prevent="toCategory('dessert')">查看更多</button>
</div>

<div class="col-md-4 text-center ">
<a href="#"@click.prevent="toCategory('drink')">
<div class="circle mb-4"  style="height: 300px; background-size: cover; background-position: center;background-image:url('https://upload.cc/i1/2020/12/16/eiLXZl.jpg')">

</div>
</a>

<h2 style="font-weight:bold">飲品</h2>
<p style=" font-weight:bold; margin-top:10px;font-size:20px;border-bottom:2px solid 	#01814A;color:	#01814A">無論此刻甚麼心情我們都能滿足!</p>
<p style=" font-weight:bold; margin-top:20px;">Bottomless Beverages 無限續杯飲料 (限內用)</p>
<p style=" font-weight:bold; margin-top:20px;">百事可樂、柳橙汁、咖啡、湯品類</p>
<button class="btn btn-outline-dark"@click.prevent="toCategory('drink')">查看更多</button>
</div>

</div>
<h2 class="text-center p-5 text-danger "style="font-weight:bold;"><i class="far fa-thumbs-up"></i>美味秘訣</h2>





<div class="row"style="">

<div class="col-md-6 "style="background-image:url('https://upload.cc/i1/2020/12/17/LCAwkq.jpg');background-size:cover;background-position:center;height:350px">

</div>
<div class="col-md-6 mt-3">

<h2 class="text-center mt-2"style="font-weight:bold "><i class="far fa-check-circle text-success"></i>用心開發</h2>
<h4 style="line-height:1.8;font-weight:bold"class="text-center mt-4">我們團隊裡擁有專業的開發團隊，不定期的推出新產品，並且配合問卷調查的結果淘汰反映不好的產品，永遠不滿足於當前的菜單，希望讓客人每次來都會有驚喜的感覺。</h4>

</div>
<div class="col-md-6 mt-3 qualityimg"style="background-image:url('https://upload.cc/i1/2020/12/17/Hd6blY.jpg');background-size:cover;background-position:center;height:350px;">

</div>
<div class="col-md-6 mt-3 quality">
<h2 class="text-center mt-2 "style="font-weight:bold"><i class="far fa-check-circle text-success"></i>嚴選品質</h2>
<ul class="list-unstyled text-center mt-4 "style="font-weight:bold">
<li style=""class="h5"><i class="fas fa-check text-danger"></i>100% 原塊雞肉，肉塊完整，品嚐起來更多汁健康!</li>
<li style=""class="h5"><i class="fas fa-check text-danger"></i>防疫局屠宰衛生檢查合格
ISO22000、CAS(生鮮肉品)
HACCP 認證，
擁有美國農業部健康證明!</li>
<li style=""class="h5"><i class="fas fa-check text-danger"></i>由電宰廠專責人員採樣檢查
、農委會防檢局專業獸醫師駐廠調查
廠內自主檢驗無藥物殘留!</li>
</ul>
</div>

<div class="col-md-6 mt-3"style="background-image:url('https://upload.cc/i1/2020/12/17/Hc4zUT.jpg;background-size:cover;background-position:center;height:350px;">

</div>
<div class="col-md-6  mt-2">
<h2 class="text-center mt-3"style="font-weight:bold"><i class="far fa-check-circle text-success"></i>經營理念</h2>
<h4 style="line-height:1.8;font-weight:bold"class="text-center mt-5">竭盡心力，用最大的服務熱誠，帶給每位客人愉悅的用餐時光。秉持這樣的理念，我們提供了美味且多樣的配菜菜及主菜，清涼的飲品，及各種令人食指大動的甜點。</h4>
</div>

</div>
</div>



<div class="mt-3 "style="height:350px;background-image:url('https://upload.cc/i1/2020/11/29/Z4LJvc.jpg');position:relative;background-size:cover;background-position: center;">
<div style="position:absolute;top:47%;left:65%">
<h2 class="text-white pt-3">營業時間</h2>
<p class="text-white"style="font-weight:bold">禮拜一~禮拜六</p>
<p class="text-white"style="font-weight:bold">AM:9:00~PM11:00</p>



</div>
</div>



     </div>
    </div>
</template>
<style>
.banner{
  left:47%;top:8%;
  max-width:41%;
  line-height:1.8;
 

  font-size:33px;
 
  text-align:center;
}
.homebtn{
font-size:20px;
}
.homebtn:hover{
background:black;

}
.quality li{
  margin-top:30px;
  font-weight:bold;
}

.circle{
  border-radius:50%;

  
}
.circle:hover{
  cursor:pointer;
  
}

@media(max-width:1000px){
  .banner{
top:10%;


font-size:24px;

  }
  .homebtn{
    font-size:17px;
  }
   
}
@media(max-width:768px){

  .banner{
top:20%;


font-size:20px;
max-width:100%;
max-height:0%;
  }
  .homebtn{
    font-size:10px;
  }
  .quality{

  }
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