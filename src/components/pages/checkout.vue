<template>
    <div>
    <loading :active.sync="isLoading"></loading>


        <div class="container">
        
      
        <div class="row justify-content-center">
        <div class="col-md-8">
        <ul class=" list-unstyled d-flex justify-content-around">
          <li class="toplogo1 d-flex align-items-center justify-content-center h3 ">購物車</li>
          <li><i class="fas fa-arrow-right fa-4x text-danger ml-2 mr-2"></i></li>
          <li class="toplogo1 d-flex align-items-center justify-content-center h3 text-white" style="background:#21232d;">結帳</li>
          <li><i class="fas fa-arrow-right fa-4x text-danger ml-2 mr-2"></i></li>
          <li class="toplogo1 d-flex align-items-center justify-content-center h3 ">訂單完成</li>
        </ul>
        <div class="mt-5">
        <div class="text-center"v-if="allcart.total<1000 && allcart.final_total === allcart.total && allcart.total!==0"><h4 style="font-weight:bold">消費總金額 <span class="h2 text-success"> NT${{allcart.total+60}}</span></h4></div>
        <div class="text-center"v-else-if="allcart.total>=1000 && allcart.final_total == allcart.total"><h4 style="font-weight:bold">消費總金額 <span class="h2 text-success"> NT${{allcart.total}}</span></h4></div>
        <div class="text-center"v-else-if="allcart.total<1000 && allcart.final_total !== allcart.total"><h4 style="font-weight:bold">消費總金額 <span class="h2 text-success"> NT${{Math.round(allcart.final_total+60)}}</span></h4></div>
        <div class="text-center"v-else><h4 style="font-weight:bold">消費總金額 <span class="h2 text-success"> NT${{Math.round(allcart.total)}}</span></h4></div>
        <div class="text-center " v-if="allcart.total !==0"><h4 style="font-weight:bold;cursor:pointer;display:inline;"@click.prevent="hide = !hide">總計{{cartnum}}件商品<i class="fas fa-angle-down"v-if="hide == true"></i><i class="fas fa-angle-up"v-else></i></h4>
        <div class="input-group w-50  ml-auto mr-auto mt-3">
 
        <input type="text" class="form-control"style="border:2px solid black" aria-label="Recipient's username" v-if="allcart.total !==0" placeholder="請輸入優惠卷" v-model="couponcode" aria-describedby="button-addon2">
        <div class="input-group-append ">
     <button class="btn btn-primary"v-if="allcart.total !==0" type="button" id="button-addon2"@click="useCoupon">傳送</button>
     </div>
 
</div>
        <table class="table mt-5 table-borderless"style="color:#dcd9cb;background:#21232d":class="{'d-none':hide}"v-if="allcart.total !==0">
<thead class="thead-dark">

<th class="text-center">品名</th>
<th  class="text-center" >圖片</th>
<th class="text-center">數量</th>
<th class="text-center">價錢</th>

</thead>


<tbody>
<tr v-for="item in allcart.carts"style="border-bottom:1px solid #E0E0E0">

<td class="text-center pt-4">{{item.product.title}}</td>
<td class="text-center"><img style="height:80px;width:80px;" :src="`${item.product.imageUrl}`" alt="" ></td>
<td class="text-center pt-4">{{item.qty}}</td>
<td class="text-center pt-4">{{item.product.price}}</td>



</tr>
</tbody>
<tfoot>
<tr>
<td colspan="4" v-if="allcart.total >=1000" class="text-right h5 text-warning" style="font-weight:bold">滿1000免運</td>
</tr>

<tr>
<td colspan="3" class="text-right h3" style="font-weight:bold">小計:</td>
<td  class="h3 text-right text-danger"style="font-weight:bold">{{allcart.total}}元</td>
</tr>

<tr style="border-bottom:1px solid #E0E0E0">
<td colspan="3" class="text-right h3" style="font-weight:bold">運費:</td>
<td v-if="allcart.total >=1000 || allcart.total===0" class="h3 text-right text-warning"style="font-weight:bold">0元</td>
<td v-else class="h3 text-right text-warning"style="font-weight:bold">60元</td>
</tr>

<tr>
<td colspan="3" class="text-right h3" style="font-weight:bold">總計:</td>
<td v-if="allcart.total >=1000 || allcart.total===0" class="h3 text-right text-success"style="font-weight:bold">{{allcart.total}}元</td>
<td v-else class="h3 text-right text-success"style="font-weight:bold">{{allcart.total+60}}元</td>
</tr>

<tr v-if="allcart.total !== allcart.final_total && allcart.total<1000">
<td colspan="3" class="text-right h3 text-success" style="font-weight:bold">優惠價:</td>
<td class="h3 text-right text-white"style="font-weight:bold">{{Math.round(allcart.final_total+60)}}元</td>
</tr>

<tr v-if="allcart.total !== allcart.final_total && allcart.total>=1000">
<td colspan="3" class="text-right h3 text-success" style="font-weight:bold">優惠價:</td>
<td class="h3 text-right text-white"style="font-weight:bold">{{Math.round(allcart.final_total)}}元</td>
</tr>
</tfoot>
</table>
        </div>
        </div>

       

<div class="my-5 row justify-content-center"style="background:	#21232d;color:#dcd9cb" v-if="allcart.total !==0">
<validation-observer class="col-md-10" v-slot="{ invalid }">
  <form class="pt-3"@submit.prevent="submitorder">
    <validation-provider class="form-group" rules="required|email" v-slot="{ errors, classes }">
  <!-- 輸入框 -->
  <label for="email">Email<span class="text-danger">(必填)</span></label>
  <input id="email" type="email" name="電子信箱"  v-model="form.user.email"
    class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
  <span class="invalid-feedback">{{ errors[0] }}</span>
</validation-provider>
  <validation-provider class="form-group" rules="required|min:3" v-slot="{ errors, classes }">
  <!-- 輸入框 -->
  <label for="name">姓名<span class="text-danger">(必填)</span></label>
  <input id="name" type="text" name="姓名"  v-model="form.user.name"
    class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
  <span class="invalid-feedback">{{ errors[0] }}</span>
</validation-provider>
  
    <validation-provider class="form-group" rules="required|min:8|max:10" v-slot="{ errors, classes }">
  <!-- 輸入框 -->
  <label for="tel">電話<span class="text-danger">(必填)</span></label>
  <input id="tel" type="tel" name="電話"  v-model="form.user.tel"
    class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
  <span class="invalid-feedback">{{ errors[0] }}</span>
</validation-provider>
     <validation-provider class="form-group" rules="required" v-slot="{ errors, classes }">
  <!-- 輸入框 -->
  <label for="address">地址<span class="text-danger">(必填)</span></label>
  <input id="address" type="tel" name="地址"  v-model="form.user.address"
    class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
  <span class="invalid-feedback">{{ errors[0] }}</span>
</validation-provider>
  

         <validation-provider class="form-group" v-slot="{ errors, classes }">
  <!-- 輸入框 -->
  <label for="comment">留言<span class="text-success">(選填)</span></label>
   <textarea name="留言" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
   
  <!-- 錯誤訊息 -->
  <span class="invalid-feedback">{{ errors[0] }}</span>
</validation-provider>
    <div class="text-right pb-3 pt-3">
      <button class="btn btn-danger"v-if="invalid" style="cursor: not-allowed;":disabled="invalid">送出訂單</button>
      <button class="btn btn-danger"v-if="!invalid" :disabled="invalid">送出訂單</button>
    </div>
  </form>
  </validation-observer>
</div>


<div class="text-center mt-5"style="" v-else>
<h1 class="text-danger"style="font-weight:bold">請重新選購商品!!</h1>
<div class="d-flex justify-content-around mt-5">
<a class="h3 cartin" style="font-weight:bold"href="#/product"><i class="fas fa-arrow-circle-left"></i>前往購物</a>
<a class="h3 cartin" style="font-weight:bold"href="#/"><i class="fas fa-arrow-circle-right"></i>回首頁</a>
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
            cartnum:'',
            hide:true,
             couponcode:'',
             form:{
                user:{
                    name:'',
                    email:'',
                    tel:'',
                    address:'',
                },
                message:'',
                 
             }
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
             vm.cartnum = response.data.data.carts.length;
           
            
            
            
            
          });
        },
        useCoupon(){
          const vm = this;
          const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/coupon`;
          vm.isLoading = true;
          const coupon={
             code:vm.couponcode,
          };
           vm.$http.post(api,{data:coupon}).then((response) => {
               vm.isLoading = false;
            console.log(response.data);
            vm.coupondata = response.data.data;
            if(response.data.success === true)
             vm.$bus.$emit('message:push','已使用優惠卷','light');
             else 
             vm.$bus.$emit('message:push','此序號不存在','danger');
            vm.getcart();
            
             
           
            
            
            
            
          });

        },
        submitorder(){
             const vm = this;
             const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/order`;
             vm.isLoading = true;
             vm.$http.post(api,{data:vm.form}).then((response) => {
               vm.isLoading = false;
            console.log(response.data);
           vm.$router.push(`/checkoutFinal/${response.data.orderId}`);
            
             
           
            
            
            
            
          });
        }
    },
    created() {
        this.getcart();
    },
}
</script>