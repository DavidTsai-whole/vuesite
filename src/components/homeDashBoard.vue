<template>
<div>
<Navbar2></Navbar2>
<Alert></Alert>
<div class="cartlogo "style="">
<a class="logocart  d-flex align-items-center justify-content-center" href="#/cart"style=""><i class="fas fa-shopping-cart fa-2x text-white"></i></a>
<span class="number d-flex align-items-center justify-content-center text-white"v-if="cartnum!=0">{{cartnum}}</span>


</div>



<router-view style="padding-top:150px;"></router-view>


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
      
        
    },
    created() {
        this.getcart();
    },
}
</script>
<style>
.cartlogo{
   right:40px;
   bottom:80px;
    
    
    z-index:100;
    position:fixed;
   

}
@media (max-width:768px){
   
    .top{
        display:none;
    }
    .cartlogo{
        right:10px;
    }
}


.top:hover{
cursor:pointer;
}
.logocart{
width:80px;
height:80px;

border-radius:50%;
background:#21232d;

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

