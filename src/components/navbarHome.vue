<template>
<div>



<div class="header bg-primary mb-5"style="">
<div class="container d-flex p-4 justify-content-between align-items-center">

<a class="h2" href="#/home">滿漢全雞</a>

  <ul class=" list-unstyled d-flex  menu"style="">
  <li class="">
  <a style="font-size:20px" class="  text-white " href="#/product"><i class="fas fa-book-open"></i>美味菜單</a>
  </li>
    <li class="">
  <a href="#/coustomerCoupon"style="font-size:20px"class=" text-white"><i class="fas fa-ticket-alt"></i>優惠卷</a>
  </li>
  <li class="">
  <a href="#/track"style="font-size:20px"class=" text-white"><i class="far fa-grin-hearts"></i>我的收藏</a>
  </li>
  <li>
  <a href="#/login"style="font-size:20px"class=" text-white"><i class="fas fa-sign-in-alt"></i>後台管理</a>
  </li>
    </ul>
    <a href=""class="rwdmenu"@click.prevent="showmenu">menu</a>


</div>

   
</div>


</div>
</template>
<style>





</style>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      getItem:[],
      number:'',
    }
  },
  methods: {
    getitem(){
      this.getItem = JSON.parse(localStorage.getItem('tableData'));
      this.number = this.getItem.length;
      
      
    },
    showmenu(){
      $('body').toggleClass('menu-show');
    },
  },
  created() {
    this.getitem();
  },
}
</script>
<style>

.menu a{
  display:block;
  transition: .2s  ;
padding:10px;

}
.menu a:hover{
 background:black;
  
}

.rwdmenu{
  display:none
}
@media (max-width:767px){
  .menu{
    flex-direction: column;
    
    max-height:0px;
    overflow:hidden;
    position:absolute;
    z-index:10000000000;
    transition:1.5s;
    top:94px;
    left:0;
    right:0;
    background:#7D7DFF;
    
  }
  .menu li{
    border-bottom:2px dashed white;
    text-align:center;
  }
  .menu-show .menu{
    max-height:300px;
    
  }
  .menu a:hover{
    transition:1s;
  }
  .rwdmenu{
    display:block;
  }
  .menu li:hover{
   background:black;
   
  }
 
}
</style>
