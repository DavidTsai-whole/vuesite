<template>
<div>
<loading :active.sync="isLoading"></loading>
<div class="container">


<div class="row justify-content-center">
<div class="col-md-8"v-if="FollowProduct.length !==0">
<h2 class="text-center mb-5 font-weight-bold"><i class="far fa-grin-hearts text-danger"></i>追蹤名單</h2>
<table class="table table-borderless bg-dark1">
<thead class="bg-dark">
<tr>
<th>商品名稱</th>
<th>商品種類</th>
<th>商品價錢</th>
<th >加入購物車</th>
<th>刪除</th>
</tr>

</thead>
<tbody>
<tr class="trBorder" v-for="item in FollowProduct">
<td>{{item.title}}</td>
<td>{{item.category}}</td>
<td>NT$ {{item.price}}</td>
<td class="tdAddCart" @click="addcart(item.id)"><i class="fas fa-shopping-cart fa-2x text-white1"></i></td>
<td class="tdDelTrack"><i class="fas fa-trash text-danger fa-2x"@click="deletee(item.id)"></i></td>
</tr>

</tbody>




</table>
</div>
<div class="col-md-8" v-else>

<h1 class="text-center text-dark1 mb-5 font-weight-bold"><i class="far fa-sad-tear text-danger"></i>目前還沒有追蹤任何商品哦,快去逛逛吧</h1>
<div class="text-center mb-5 pt-5">
<a class="h3 cartin font-weight-bold text-dark1"href="#/product"><i class="fas fa-arrow-circle-left"></i>前往購物</a> 
</div>


</div>
</div>


<h2 class="text-center text-white p-3 bg-dark1 mt-5 mb-5 font-weight-bold"><i class="fas fa-utensils"></i>餐點介紹</h2>
<!--餐點介紹-->
<div class="row ">
<!--漢堡-->
<div class="col-md-4 text-center  mb-3">
<a href="#"@click.prevent="toCategory('burger')">
<img src="https://upload.cc/i1/2020/12/16/bTHgpY.jpg" class="circle mb-4 img-fluid" alt="">
</a>
<h2 class="font-weight-bold">漢堡</h2>
<p class="hamP1">不可錯過的正宗美式漢堡!</p>
<p class="hamP2">會不定期的推出新口味，敬請期待</p>
<p class="hamP3">有豬肉、牛肉、雞肉、菇類等多樣選擇</p>
<button class="btn btn-outline-dark"@click.prevent="toCategory('burger')">查看更多</button>
</div> 
<!--配菜-->
<div class="col-md-4 text-center mb-3">
<a href="#"@click.prevent="toCategory('dessert')">
<img src="https://upload.cc/i1/2020/12/16/HtSnj8.jpg" class="circle mb-4 img-fluid" alt="">
</a>
<h2 class="font-weight-bold">配菜</h2>
<p class="dashP1">好看的劇一定是有好的配角!</p>
<p class="dashP2">配菜類的商品只要續點通通9折(限內用)</p>
<p class="dashP3">沙拉、炸物、烤類等多種配菜</p>
<button class="btn btn-outline-dark"@click.prevent="toCategory('dessert')">查看更多</button>
</div>
<!--飲品-->
<div class="col-md-4 text-center mb-3">
<a href="#"@click.prevent="toCategory('drink')">
<img src="https://upload.cc/i1/2020/12/16/eiLXZl.jpg" class="circle mb-4 img-fluid" alt="">
</a>
<h2 class="font-weight-bold">飲品</h2>
<p class="drinkP1">無論此刻甚麼心情我們都能滿足!</p>
<p class="drinkP2">Bottomless Beverages 無限續杯飲料 (限內用)</p>
<p class="drinkP3">百事可樂、柳橙汁、咖啡、湯品類</p>
<button class="btn btn-outline-dark"@click.prevent="toCategory('drink')">查看更多</button>
</div>

</div>
</div>
</div>

</template>

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
            
            vm.isLoading = false;
            vm.products = response.data.products;
           vm.getFollow();
           
          
            
            
          });

      },
      //產品分類
        toCategory(Name){
      this.$router.push({
        name:'customP',
        params:{categoryname:Name},
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