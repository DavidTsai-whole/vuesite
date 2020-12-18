<template>
<div>
<Navbar2></Navbar2>
<Alert></Alert>
<div class="cartlogo "style="">
<a class="logocart  d-flex align-items-center justify-content-center" href="#/cart"style=""><i class="fas fa-shopping-cart fa-2x text-secondary"></i></a>
<span class="number d-flex align-items-center justify-content-center text-white">{{cartnum}}</span>


</div>
<div class="top "@click.prevent="scrollTop"style="position:fixed;right:47px;bottom:20px"><i class="far fa-arrow-alt-circle-up fa-4x text-success"></i></div>
<div class="wrap"style="padding-top:150px;">

<router-view></router-view>

</div>
<footer2></footer2>

</div>
</template>

<script>
import $ from 'jquery'
import Navbar2 from './navbarHome'
import footer2 from './footerHome'
import Alert from './alert'
export default {
    components:{
        Navbar2,
         footer2,
         Alert
    },
    data() {
        return {
            cartnum:'',
        }
    },
    
    methods: {
         getcart(){
            const vm = this;
            vm.isLoading = true;
            const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart`;
            vm.$http.get(api).then((response) => {
           
             vm.isLoading = false;
             
             vm.cartnum = response.data.data.carts.length;
           vm.getcart();
            
            
            
            
          });
        },
        scrollTop(){
           $('html,body').animate({
               scrollTop:0
           },700);
        },
        
    },
    created() {
        this.getcart();
    },
}
</script>
<style>
@media (max-width:768px){
   
    .top{
        display:none;
    }
}
.cartlogo{
   right:40px;
   bottom:90px;
    
    
    z-index:10000;
    position:fixed;
   

}

.top:hover{
cursor:pointer;
}
.logocart{
width:80px;
height:80px;
display:block;
border-radius:50%;
background:#5E005E;
}
.number{
    position:absolute;
    background:#FF0000;
    width:30px;
    height:30px;
    top:2px;
    right:-5px;
    border-radius:50%;
  
    }

</style>

