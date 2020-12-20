<template>
<div>



<div class="header bg-primary  d-flex  justify-content-around align-items-center "style="">

<a class="h1 p-2"style="font-weight:bold;color:#dcd9cb;font-family: 'Indie Flower', cursive;" href="#/">ChillBurger</a>


  
  <ul class=" list-unstyled d-flex menu pt-3"style="">
  <li>
  <a style="font-size:20px;" href="#/product"><i class="fas fa-book-open"></i>美味菜單</a>
  </li>
    <li>
  <a href="#/coustomerCoupon"style="font-size:20px;"><i class="fas fa-ticket-alt"></i>優惠卷</a>
  </li>
  <li>
  <a href="#/track"style="font-size:20px;"><i class="far fa-grin-hearts"></i>我的收藏</a>
  </li>
  <li>
  <a href="#/login"style="font-size:20px;"><i class="fas fa-sign-in-alt"></i>後台管理</a>
  </li>
    </ul>

  



    <a href=""class="rwdmenu"@click.prevent="showmenu"><i class="fas fa-bars fa-3x"style="color:#dcd9cb"></i></a>


</div>

   



</div>
</template>
<style>

.header{
  position:fixed;
  width:100%;
  z-index:10000000;
  height:100px;
  
  
}
.menu a{
 display:block;
 padding:10px;
 
 color:#dcd9cb

}
.menu a:hover{
  transform:scale(1.2);
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
    top:85px;
    left:0;
    right:0;
    background:#21232d;
    
  }
  .menu li{
    border-bottom:2px dashed white;
    text-align:center;
  }
  .menu-show .menu{
    max-height:300px;
    
  }
  .menu a:hover{
    color:#21232d;
    transform:none;
    
    
  }
  .rwdmenu{
    display:block;
  }
  .menu li:hover{
   background:white;
   
   
  }
 
}




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
