<template>
<div>
<loading :active.sync="isLoading"></loading>
<div class="container">


<div class="row justify-content-center">
<div class="col-md-8"v-if="FollowProduct.length !==0">
<h2 class="text-center mb-5"><i class="far fa-grin-hearts text-danger"></i>追蹤名單</h2>
<table class="table table-borderless" >
<thead>
<tr>
<th>商品名稱</th>
<th>商品種類</th>
<th>商品價錢</th>
<th class="">加入購物車</th>
<th>刪除</th>
</tr>

</thead>
<tbody>
<tr v-for="item in FollowProduct"style="border-bottom:1px solid black" >
<td>{{item.title}}</td>
<td>{{item.category}}</td>
<td>NT$ {{item.price}}</td>
<td @click="addcart(item.id)"><i class="fas fa-shopping-cart text-info fa-2x"style="cursor:pointer"></i></td>
<td  ><i class="fas fa-trash text-danger fa-2x"style="cursor:pointer"@click="deletee(item.id)"></i></td>
</tr>

</tbody>




</table>
</div>
<div class="col-md-8" v-else>

<h1 class="text-center text-dark mb-5"><i class="far fa-sad-tear text-danger"></i>目前還沒有追蹤任何商品哦,快去逛逛吧</h1>
<div class="text-center mb-5">
<a class="h3 cartin " style="font-weight:bold;"href="#/product"><i class="fas fa-arrow-circle-left text-success"></i>前往購物</a> 
</div>


</div>
</div>

<h1 class="text-center pt-5 pb-5" style="color:#ab4800;font-weight:bold"><i class="fas fa-utensils"></i>餐點介紹</h1>
<div class="row">
<div class="col-md-4 text-center">
<a href="#"@click.prevent="toCategory('mainmeal')">
<div class="circle mb-4"  style="height: 300px; background-size: cover; background-position: center;background-image:url('https://upload.cc/i1/2020/11/04/i9FXsT.jpg')">

</div>
</a>



<h2 style="font-weight:bold" >主餐</h2>
<p style="font-weight:bold">肚子餓時來份有飽足感的餐點吧!</p>
</div> 
<div class="col-md-4 text-center">
<a href="#"@click.prevent="toCategory('dessert')">
<div class="circle mb-4" style="height: 300px; background-size: cover; background-position: center;background-image:url('https://upload.cc/i1/2020/11/04/hrLP5k.jpg')">

</div>
</a>

<h2 style="font-weight:bold">點心</h2>
<p style="font-weight:bold">不想吃太多又想品嘗美食嗎?來參考我們各式各樣的點心吧!</p>
</div>
<div class="col-md-4 text-center">
<a href="#"@click.prevent="toCategory('drink')">
<div class="circle mb-4"  style="height: 300px; background-size: cover; background-position: center;background-image:url('https://upload.cc/i1/2020/11/04/MQEL5a.jpg')">

</div>
</a>

<h2 style="font-weight:bold">飲品</h2>
<p style="font-weight:bold">吃東西當然要配好喝的啊,這時可以參考我們好喝的飲品哦!</p>

</div>
</div>
</div>
</div>
</div>

</template>
<style>
.circle{
   
   border-radius:50%;
   -webkit-filter:sepia(1);
}
.circle:hover{
  
-webkit-filter:saturate(1);
  cursor:pointer;
 
}
</style>
<script>
export default {
    data() {
        return {
             trackData:JSON.parse(localStorage.getItem('tableData')) || [],
             products:[],
             isLoading:false,
             FollowProduct:[],
             
        }
    },
    methods: {
      getproducts(){
            const api =`${process.env.APIPATH}/api/${process.env.MEPATH}/products/all`;
             const vm = this;
            vm.isLoading=true;
           
              vm.$http.get(api).then((response) => {
            console.log(response.data);
            vm.isLoading = false;
            vm.products = response.data.products;
           vm.getFollow();
            
          
            
            
          });

      },
      //產品分類
        toCategory(Name){
      this.$router.push({
        name:'customP',
        params:{categoryName:Name},
      });
    },
      getFollow(){
          const vm = this;
          vm.FollowProduct = vm.products.filter(
              item => vm.trackData.indexOf(item.id) > -1,
          )

      },
       deletee(id){
            const vm =this;
           const followId = vm.trackData.indexOf(id);
           if(followId !==-1 ){
             vm.trackData.splice(followId,1);
             vm.getFollow();
           vm.$bus.$emit('message:push','已取消追蹤','light');
           }
           localStorage.setItem('tableData',JSON.stringify(vm.trackData));
          
          

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
            console.log(response.data)
            vm.$bus.$emit('message:push','已加入購物車','light');
        })
        },
    },
    created() {
      this.getproducts();
    },
}
</script>