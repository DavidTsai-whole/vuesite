<template>
<div class="cartlogo ">
<a class="logocart  d-flex align-items-center justify-content-center" href="#/cart"><i class="fas fa-shopping-cart fa-2x text-white"></i></a>
<span class="number d-flex align-items-center justify-content-center text-white"v-if="cartNum!==0">{{cartNum}}</span>


</div>
</template>
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
<script>
export default {
  
data(){
    return{
        cartData: [],
        cartNum:0,
        
    }
  },
  methods: {
   number(){
       const vm = this;
       
       vm.cartNum = vm.cartData.length;

   }
  },
   created(){
     const vm = this;
     vm.cartData = JSON.parse(localStorage.getItem('cartData')) || [];
     vm.cartNum = vm.cartData.length;
     
     vm.$bus.$on('number',()=>{
         vm.cartData = JSON.parse(localStorage.getItem('cartData')) || [],
        vm.number();
     });
    },
};
</script>