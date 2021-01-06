<template>
<div>
<loading :active.sync="isLoading"></loading>
<div class="container ">


<div class="row justify-content-center mt-2">
<div class="col-md-8 ">
<ul class=" list-unstyled d-flex justify-content-around">
<li class="topLogo1 d-flex align-items-center justify-content-center h3 bg-dark1"style="color:#dcd9cb">購物車</li>
<li><i class="fas fa-arrow-right fa-4x text-danger ml-2 mr-2"></i></li>
<li class="topLogo1 d-flex align-items-center justify-content-center h3">結帳</li>
<li><i class="fas fa-arrow-right fa-4x text-danger ml-2 mr-2"></i></li>
<li class="topLogo1 d-flex align-items-center justify-content-center h3 ">完成</li>
</ul>
<table class="cartTable table mt-5 table-borderless bg-dark1"v-if="allcart.total>0">
<thead class="bg-dark">

<th class="text-center">品名</th>
<th  class="text-center" >圖片</th>
<th class="text-center">數量</th>
<th class="text-center">價錢</th>
<th class="text-center">刪除</th>
</thead>


<tbody>
<tr v-for="item in allcart.carts"style="border-bottom:2px solid #dcd9cb":key="item.id">

<td class="text-center pt-4">{{item.product.title}}</td>
<td class="text-center"><img class="cartImg":src="`${item.product.imageUrl}`" alt="" ></td>
<td class="text-center pt-4">
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-light" @click.prevent="lessQty(item)">-</button>
  <button class="btn btn-outline-light" disabled>{{item.qty}}</button>
  <button type="button" class="btn btn-light"@click="addQty(item)">+</button>
</div>

</td>
<td class="text-right pt-4">{{item.product.price}}</td>
<td class="text-center pt-4"><i class="far fa-trash-alt text-danger fa-2x"@click="deleteCart(item)"></i></td>


</tr>
</tbody>
<tfoot >
<tr>
<td colspan="5" v-if="allcart.total >=1000" class="text-right text-white">(滿1000免運)</td>
</tr>

<tr>
<td colspan="4" class="text-right">小計:</td>
<td  class="text-right">${{allcart.total}}元</td>
</tr>

<tr class="tableBorder">
<td colspan="4" class="text-right">運費:</td>
<td v-if="allcart.total >=1000" class="text-right">$0元</td>
<td v-else class="text-right">$60元</td>
</tr>

<tr>
<td colspan="4" class="text-right h3 ">總計:</td>
<td v-if="allcart.total >=1000" class="h3 text-right">${{allcart.total}}元</td>
<td v-else class="h3 text-right">${{allcart.total+60}}元</td>
</tr>


</tfoot>
</table>

<div class="text-center mt-5 text-danger font-weight-bold"v-else>
<h2 class="font-weight-bold"style="margin-top:100px">您目前並沒有選擇任何商品喔!</h2>

<div class="d-flex justify-content-around mb-5"style="margin-top:100px;">
<a class="h3 cartin font-weight-bold"href="#/product"><i class="fas fa-arrow-circle-left"></i>前往購物</a>
<a class="h3 cartin font-weight-bold"href="#/"><i class="fas fa-home"></i>回首頁</a>
</div>
</div>

.



<div class=" mt-5"v-if="allcart.total>0">

<div class="d-flex justify-content-around mt-5">
<a class="h3 cartin " style="font-weight:bold"href="#/product"><i class="fas fa-arrow-circle-left"></i>繼續購物</a>
<a class="h3 cartin" style="font-weight:bold"href="#/checkout"><i class="fas fa-arrow-circle-right"></i>結帳</a>
</div>
</div>




</div>


</div>


</div>



</div>

</template>

<script>
export default {
    data() {
        return {
            isLoading:false,
            allcart:[],
            cartData:JSON.parse(localStorage.getItem('cartData')) || [],
            
            
           
         
              
            
           
        }
    },
    methods: {
        getcart(){
            const vm = this;
            vm.isLoading = true;
            const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart`;
            vm.$http.get(api).then((response) => {
            
             vm.isLoading = false;
             vm.allcart = response.data.data;
             console.log(response.data.data);
             
           
            
            
            
            
          });
        },   
         addcart2(){
          const vm = this;
          vm.isLoading=true;
          const cacheID=[];
           const api =`${process.env.APIPATH}/api/${process.env.MEPATH}/cart`;
           
          vm.$http.get(api).then((res) => {
               const cacheData = res.data.data.carts;
               cacheData.forEach((item)=>{
                 cacheID.push(item.id);
               })
             }).then(()=>{
              cacheID.forEach((item)=>{
                const api2 = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart/${item}`;
                vm.$http.delete(api2).then(()=>{

                });
              })
             }).then(()=>{
             vm.cartData.forEach( (item)=>{
             const cache2={
              product_id:item.product_id,
              qty:item.qty,
            };
            const api =`${process.env.APIPATH}/api/${process.env.MEPATH}/cart`;
          vm.$http.post(api,{data:cache2}).then(() => {
               vm.$bus.$emit("message:push", "購物車已更新", "light");
               vm.getcart();

               
               vm.isLoading=false;
             });
         
         
             
               
             });
          });
         

        },
        addcart(data){
          const vm = this;
          const cacheCarID = [];
          vm.cartData.forEach((item) => cacheCarID.push(item.product_id));
         
          if (cacheCarID.indexOf(data.product_id) === -1) {
         
            const cartContent = {
            product_id:data.product_id,
            qty:1,
            name:data.product.title,
          };
          vm.cartData.push(cartContent);
          localStorage.setItem('cartData',JSON.stringify(vm.cartData));
          }else{
           vm.cartData.forEach( (item,keys) =>{
             if(item.product_id ===data.product_id){
               
               const cache={
                 product_id:data.product_id,
                 qty:item.qty+=1,
                 name:data.product.title,
               };
               vm.cartData.splice(keys,1);
               vm.cartData.push(cache);
               localStorage.setItem('cartData',JSON.stringify(vm.cartData));
              
             }
           });
          }
         vm.addcart2();
          
        },
         addcartRed(data){
          const vm = this;
          const cacheCarID = [];
          vm.cartData.forEach((item) => cacheCarID.push(item.product_id));
         
          if (cacheCarID.indexOf(data.product_id) === -1) {
         
            const cartContent = {
            product_id:data.product_id,
            qty:1,
            name:data.product.title,
          };
          vm.cartData.push(cartContent);
          localStorage.setItem('cartData',JSON.stringify(vm.cartData));
          }else{
           vm.cartData.forEach( (item,keys) =>{
             if(item.product_id ===data.product_id){
               
               const cache={
                 product_id:data.product_id,
                 qty:item.qty-=1,
                 name:data.product.title,
               };
               vm.cartData.splice(keys,1);
               vm.cartData.push(cache);
               localStorage.setItem('cartData',JSON.stringify(vm.cartData));
              
             }
           });
          }
         vm.addcart2();
          
        },
        /*addcart(item){
          const vm = this;
          const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart`;
          const cart={
            product_id:item.product_id,
            qty:item.qty,
          };
           vm.isLoading=true;
          vm.$http.post(api,{data:cart}).then((response) => {
             vm.isLoading=false;
             vm.deleteCart(item);
            
        })
        },*/
        addQty(item){
          const vm = this;
          
          item.qty+= 1;
          vm.addcart(item);
        },
         lessQty(item) {
      const vm = this;
 
      if (item.qty == 1) {
        vm.deleteCart(item);
      } else {
        item.qty-= 1;
        vm.addcartRed(item);
      }
    },
        /*modifynum(id,productid,qty){
              const vm = this;
               const cart ={
                 product_id:productid,
                 qty,
               };
               const delapi = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart/${id}`;
               const addapi = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart`;
               vm.isLoading=true;
               vm.$http.delete(delapi).then(() => {
               return vm.$http.post(addapi,{data:cart})
             }).then((response) =>{
               vm.isLoading=false;
               vm.getcart();
                vm.$bus.$emit('message:push','已更改商品數量','light');
             })

        },*/
        deleteCart(item){
               const vm = this;
               vm.isLoading = true;
               const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart/${item.id}`;
               vm.$http.delete(api).then((res) => {
         
            
          vm.$bus.$emit("message:push", "已刪除產品", "light");
           vm.isLoading = false;
            
             vm.getcart();
              
           
            
            
            
            
          }).then(()=>{
            
            vm.cartData.forEach((item2,key)=>{
              
              if(item2.product_id===item.product_id){
                vm.cartData.splice(key,1);
              }
               localStorage.setItem('cartData',JSON.stringify(vm.cartData));
            })

            
          })
        },
        
   
     
    },
    created() {
        this.getcart();
    },
}
</script>
