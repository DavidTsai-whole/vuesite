<template>
<div>   
<loading :active.sync="isLoading"></loading>
<nav aria-label="breadcrumb ">
  <ol class="breadcrumb bg-transparent">
    <li class="breadcrumb-item"><a href="#/home">首頁</a></li>
    <li class="breadcrumb-item"><a href="#/product">美味菜單</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{singleProduct.title}}</li>
  </ol>
</nav>
<div class="row">
<div class="col-lg-6">
<div class="asda" style="height: 350px; background-size: cover; background-position: center" :style="{backgroundImage:`url(${singleProduct.imageUrl})`}" >

</div>
</div>
<div class="col-lg-6 text-center">
<h2 class="text-success"style="font-weight:bold;">{{singleProduct.title}}</h2>

<h4 class=" mt-4 mb-3"style="font-weight:bold">產品說明</h4>
<p style="font-weight:bold"class="mb-4 mt-4">{{singleProduct.content}}</p>
<div class="d-flex justify-content-around">
<select style="width:50%"id="exampleFormControlSelect1" class="form-control"v-model="singleProduct.num">
<option :value="num" v-for="num in 10" :key="num">
選購{{num}}{{singleProduct.unit}}
</option>

</select>
<div class=" h3 text-danger" style="font-weight:bold">
現在只要{{singleProduct.price}}元
</div>

</div>


<hr>
<button class="btn btn-success btn-block"@click="addcart(singleProduct.id,singleProduct.num)">加入購物車</button>
<button class="btn btn-outline-secondary btn-block"@click="gomenu">回菜單</button>
</div>
</div>
<hr>
<h5 class="text-center mb-3">相關產品</h5>

      <div class="row">
      <div class="col-lg-3 mb-3" v-for="item in filterTodo">

      <div class="card">
      <div class ="imgto" style="height: 180px; background-size: cover; background-position: center":style="{backgroundImage:`url(${item.imageUrl})`}" @click="inputProductid(item)">
      
      </div>

  <div class="card-body">
    <h5 class="card-title"style="font-weight:bold">{{item.title}}</h5>
    <p class="card-text"style="font-weight:bold">{{item.content}}</p>
  
  </div>
      </div>



    </div>
  </div>
 
</div>
</div>
</template>
<style scoped>


.imgto{
  cursor:pointer;
}
</style>
<script>

export default {
 
    data() {
        return {
            singleProduct:{},
            isLoading:false,
            cash:1,
            products:[],
            
            
        }
    },
    methods: {
            getSingleproduct(id){
                id = this.$route.params.id;
       const api =`${process.env.APIPATH}/api/${process.env.MEPATH}/product/${id}`;
       const vm = this;
           vm.isLoading = true;
        vm.$http.get(api).then((response) => {
            console.log(response.data);
             vm.isLoading = false;
            vm.singleProduct = response.data.product;
            vm.singleProduct.num = 1;
            
            
            
            
          });
       

        },
        inputProductid(item){
       const vm = this;
            vm.$router.push(`/products/${item.id}`);
            this.getSingleproduct();
        },
       getProducts(){
            const api =`${process.env.APIPATH}/api/${process.env.MEPATH}/products/all`;
            const vm = this;
            vm.isLoading=true;
               vm.$http.get(api).then((response) => {
            console.log(response.data);
            vm.isLoading = false;
            vm.products = response.data.products;
           
            
            
          });
        },
        gomenu(){
            this.$router.push('/product');
        },
     
    
        addcart(id,qty=1){
          const vm = this;
          const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart`;
          const cart={
            product_id:id,
            qty,
          };
           vm.isLoading=true;
          vm.$http.post(api,{data:cart}).then((response) => {
             vm.isLoading=false;
            console.log(response.data);
            vm.$bus.$emit('message:push','已加入購物車','light');
        })
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