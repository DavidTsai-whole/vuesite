<template>
<div>   
<loading :active.sync="isLoading"></loading>
<CartLogo></CartLogo>
<div class="container">

<nav aria-label="breadcrumb ">
  <ol class="breadcrumb bg-transparent">
    <li class="breadcrumb-item font-weight-bold"><a href="#/home">首頁</a></li>
    <li class="breadcrumb-item font-weight-bold"><a href="#/product">美味菜單</a></li>
    <li class="breadcrumb-item active font-weight-bold" aria-current="page">{{singleProduct.title}}</li>
  </ol>
</nav>
<div class="row">
<div class="singleImg col-lg-6 m-auto ">

<img :src="singleProduct.imageUrl" class="singleImg img-fluid" alt="">

</div>
<div class="col-lg-6 text-center">
<h2 class="text-dark1 font-weight-bold">{{singleProduct.title}}</h2>

<h3 class=" mt-4 mb-3">產品說明</h3>
<p class="mb-4 mt-4">{{singleProduct.content}}</p>
<div class="d-flex justify-content-around">
<select id="exampleFormControlSelect1" class="productNum form-control text-dark1" v-model="singleProduct.num">
<option :value="num" v-for="num in 10" :key="num">
選購{{num}}{{singleProduct.unit}}
</option>

</select>
<div class=" h3 text-danger font-weight-bold">
現在只要{{singleProduct.price}}元
</div>

</div>


<div class="mt-5">

<button class="backMenuBtn btn btn-outline-secondary" @click="gomenu">回菜單</button>
<button class="addCartBtn btn btn-dark1" @click="addcart(singleProduct)">加入購物車</button>
</div>

</div>
</div>
<hr>
<h2 class="text-center mb-3 font-weight-bold">相關產品</h2>

      <div class="row">
      <div class="col-xl-3 col-md-4 col-sm-6 mb-4" v-for="item in filterTodo">

<div class="releateCard" @click="inputProductid(item)">
<div class="releateCardImg">
  <img :src="item.imageUrl" class="card-img-top img-fluid" alt="">
</div>

  <div class="card-body bg-dark1 text-white">
       <h5 class="card-title font-weight-bold">{{item.title}}</h5>
    <p class="card-text">{{item.content}}</p>
  </div>
</div>

    



    </div>
  </div>
 </div>
</div>
</div>
</template>

<script>
import CartLogo from '@/components/CARTLOGO'
export default {
  components:{
   CartLogo
  },
    data() {
        return {
            singleProduct:{},
            isLoading:false,
           cartData:JSON.parse(localStorage.getItem('cartData')) || [],
            products:[],     
        }
    },
    methods: {
              
            getSingleproduct(id){
              const vm = this;
                id = vm.$route.params.id;
       const api =`${process.env.APIPATH}/api/${process.env.MEPATH}/product/${id}`;
       
           vm.isLoading = true;
        vm.$http.get(api).then((response) => {
            
             vm.isLoading = false;
            vm.singleProduct = response.data.product;
            vm.singleProduct.num = 1;    
          });
      
        },
        addcart(data){
          const vm = this;
          const cacheCarID = [];
          vm.cartData.forEach((item) => cacheCarID.push(item.product_id));
         
          if (cacheCarID.indexOf(data.id) === -1) {
         
            const cartContent = {
            product_id:data.id,
            qty:vm.singleProduct.num,
            title:data.title,
            price:data.price,
           imageUrl:data.imageUrl,
          };
          vm.cartData.push(cartContent);
          localStorage.setItem('cartData',JSON.stringify(vm.cartData));
          }else{
            let cache={};
           vm.cartData.forEach( (item,keys) =>{
             if(item.product_id ===data.id){
               
                cache={
                 product_id:data.id,
                 qty:item.qty+=vm.singleProduct.num,
                 title:data.title,
                 price:data.price,
                 imageUrl:data.imageUrl,
               };
               vm.cartData.splice(keys,1);            
             }
           });
             vm.cartData.push(cache);
               localStorage.setItem('cartData',JSON.stringify(vm.cartData));
               
          }
          vm.$bus.$emit('number'); 
          vm.$bus.$emit('message:push','已加入購物車','light');         
        },
        inputProductid(item){
       const vm = this;
            vm.$router.push(`/products/${item.id}`);
            vm.getSingleproduct();
        },
       getProducts(){
         const vm = this;
            const api =`${process.env.APIPATH}/api/${process.env.MEPATH}/products/all`;
            
            vm.isLoading=true;
               vm.$http.get(api).then((response) => {
            
            vm.isLoading = false;
            vm.products = response.data.products;          
          });
        },
        gomenu(){
            this.$router.push('/product');
        },    
    },
    computed: {
      filterTodo(){
          const vm = this;
          var singleProductcategory = vm.singleProduct.category;
          var newTodo = [];
          vm.products.forEach(function (item){
              if(item.category==singleProductcategory && item.title!=vm.singleProduct.title)
            newTodo.push(item);          
          });
          return newTodo;
        },
    },
    created() {
      this.getProducts();
        this.getSingleproduct();       
    },
}
</script>
<style>
  .productNum{
    width:50%;
    border:2px solid #21232d;
}
.singleImg{
    max-height:300px;
    width:600px;
    object-fit:cover;
}
.addCartBtn{
    width:49%;
}
.backMenuBtn{
    width:49%;
}
.releateCard{
    
    cursor:pointer;
    
}
.releateCardImg{
    overflow: hidden;
}
.releateCardImg img{
    transform:scale(1,1);transition: all 1s ease-out;
    height:180px;
    object-fit:cover;
    
}
.releateCardImg img:hover{
    transform:scale(1.2,1.2);
  }
</style>