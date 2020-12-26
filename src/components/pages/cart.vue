<template>
<div>
<loading :active.sync="isLoading"></loading>
<div class="container ">


<div class="row justify-content-center mt-2">
<div class="col-md-8 ">
<ul class=" list-unstyled d-flex justify-content-around">
<li class="toplogo1 d-flex align-items-center justify-content-center h3 "style="background:#21232d;color:#dcd9cb">購物車</li>
<li><i class="fas fa-arrow-right fa-4x text-danger ml-2 mr-2"></i></li>
<li class="toplogo1 d-flex align-items-center justify-content-center h3" style="">結帳</li>
<li><i class="fas fa-arrow-right fa-4x text-danger ml-2 mr-2"></i></li>
<li class="toplogo1 d-flex align-items-center justify-content-center h3 ">完成</li>
</ul>
<table class="table mt-5 table-borderless"style="color:#dcd9cb;background:#21232d"v-if="allcart.total>0">
<thead class="bg-dark">

<th class="text-center">品名</th>
<th  class="text-center" >圖片</th>
<th class="text-center">數量</th>
<th class="text-center">價錢</th>
<th class="text-center">刪除</th>
</thead>


<tbody>
<tr v-for="item in allcart.carts"style="border-bottom:2px solid #dcd9cb">

<td class="text-center pt-4">{{item.product.title}}</td>
<td class="text-center"><img style="height:80px;width:80px;" :src="`${item.product.imageUrl}`" alt="" ></td>
<td class="text-center pt-4">
<select name="" id="" class="form-control" @change="modifynum(item.id,item.product.id,item.qty)" v-model="item.qty">

<option :value="num" v-for="num in 10" :key="num">
{{num}}

</option>

</select>


</td>
<td class="text-right pt-4">{{item.product.price}}</td>
<td class="text-center pt-4"><i class="far fa-trash-alt text-danger fa-2x"@click="deletemodal(item.id)"></i></td>


</tr>
</tbody>
<tfoot >
<tr>
<td colspan="5" v-if="allcart.total >=1000" class="text-right h5 text-warning" style="font-weight:bold">滿1000免運</td>
</tr>

<tr>
<td colspan="4" class="text-right h3" style="font-weight:bold">小計:</td>
<td  class="h3 text-right text-danger"style="font-weight:bold">{{allcart.total}}元</td>
</tr>

<tr style="border-bottom:1px solid #E0E0E0">
<td colspan="4" class="text-right h3" style="font-weight:bold">運費:</td>
<td v-if="allcart.total >=1000" class="h3 text-right text-warning"style="font-weight:bold">0元</td>
<td v-else class="h3 text-right text-warning"style="font-weight:bold">60元</td>
</tr>

<tr>
<td colspan="4" class="text-right h3 " style="font-weight:bold">總計:</td>
<td v-if="allcart.total >=1000" class="h3 text-right text-success"style="font-weight:bold">{{allcart.total}}元</td>
<td v-else class="h3 text-right text-success"style="font-weight:bold">{{allcart.total+60}}元</td>
</tr>


</tfoot>
</table>

<div class="text-center  mt-5 text-danger"style="font-weight:bold"v-else>
<h2 class=" "style="font-weight:bold;margin-top:100px">您目前並沒有選擇任何商品喔!</h2>

<div class="d-flex justify-content-around mb-5"style="margin-top:100px;">
<a class="h3 cartin" style="font-weight:bold"href="#/product"><i class="fas fa-arrow-circle-left"></i>前往購物</a>
<a class="h3 cartin" style="font-weight:bold"href="#/"><i class="fas fa-home"></i>回首頁</a>
</div>
</div>

.



<div class=" mt-5"v-if="allcart.total>0">

<div class="d-flex justify-content-around mt-5">
<a class="h3 cartin" style="font-weight:bold"href="#/product"><i class="fas fa-arrow-circle-left"></i>繼續購物</a>
<a class="h3 cartin" style="font-weight:bold"href="#/checkout"><i class="fas fa-arrow-circle-right"></i>結帳</a>
</div>
</div>




</div>


</div>


</div>



</div>

</template>
<style scoped>
.toplogo1{
 
  height:60px;
  width:200px;
  border-radius:15px ;
 font-weight:bold;
 border:3px solid 	#21232d;
  
}
.far:hover{
    cursor:pointer;
}
.cartin{
  border-bottom:3px solid transparent;
}
.cartin:hover{
  border-bottom:3px solid black;
}

</style>
<script>
export default {
    data() {
        return {
            isLoading:false,
            allcart:[],
           
         
              
            
           
        }
    },
    methods: {
        getcart(){
            const vm = this;
            vm.isLoading = true;
            const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart`;
            vm.$http.get(api).then((response) => {
            console.log(response.data);
             vm.isLoading = false;
             vm.allcart = response.data.data;
           
            
            
            
            
          });
        },
        
        modifynum(id,productid,qty){
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

        },
        deletemodal(id){
               const vm = this;
               vm.isLoading = true;
               const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/cart/${id}`;
               vm.$http.delete(api).then((response) => {
            console.log(response.data);
             vm.isLoading = false;
            
             vm.getcart();
              vm.$bus.$emit('message:push','已刪除商品','light');
           
            
            
            
            
          });
        },
        
   
     
    },
    created() {
        this.getcart();
    },
}
</script>
