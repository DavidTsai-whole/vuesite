<template>
<div>  
    <loading :active.sync="isLoading"></loading> 
    <div class="container">
    

<div class="row justify-content-center">
        <div class="col-md-8 ">
        <ul class=" list-unstyled d-flex justify-content-around">
          <li class="toplogo1 d-flex align-items-center justify-content-center h3 ">購物車</li>
          <li><i class="fas fa-arrow-right fa-4x text-danger ml-2 mr-2"></i></li>
          <li class="toplogo1 d-flex align-items-center justify-content-center h3 " >結帳</li>
          <li><i class="fas fa-arrow-right fa-4x text-danger ml-2 mr-2"></i></li>
          <li class="toplogo1 d-flex align-items-center justify-content-center h3 text-white"style="background:#21232d;">訂單完成</li>
        </ul>
        <table class="table table-borderless mt-5"style="color:#dcd9cb;background:#21232d">
       
        <tbody>
        <tr style="border:1px solid #BEBEBE">
        <td colspan="5" class="text-center bg-dark">客戶資訊</td>
        </tr>
         <tr style="border:1px solid #BEBEBE">
        <td colspan="4" style="width:15%">姓名</td>
        <td>{{order.user.name}}</td>
        
        </tr>
         <tr style="border:1px solid #BEBEBE">
        <td colspan="4" style="width:15%">手機號碼</td>
        <td>{{order.user.tel}}</td>
        
        </tr>
          <tr style="border:1px solid #BEBEBE">
        <td colspan="4" style="width:15%">地址</td>
        <td>{{order.user.address}}</td>
        
        </tr>
          <tr style="border:1px solid #BEBEBE">
        <td colspan="4" style="width:15%">電子信箱</td>
        <td>{{order.user.email}}</td>
        
        </tr>
            <tr style="border:1px solid #BEBEBE">
        <td colspan="4" style="width:15%">應付金額</td>
        <td v-if="order.total+order.total*0.8<1000">NT$ {{Math.round(order.total+60)}}</td>
        <td v-else>NT$ {{Math.round(order.total)}}</td>
        
        </tr>
          <tr style="border:1px solid #BEBEBE">
        <td colspan="4" style="width:15%">付款狀態</td>
        <td v-if="!order.is_paid" class="text-danger">尚未付款</td>
        <td v-else class="text-success">已付款</td>
        
        </tr>
        
        </tbody>
        
        </table>
      
         <div class="text-center">
         <button v-if="!order.is_paid" class="btn btn-danger "@click="paid">確認付款</button>
         <button v-else class="btn btn-success "@click.prevent="Home">回首頁</button>
         </div>
         
        
        
        

        </div>
    </div>
        </div>
</div>

</template>
<style>
.toplogo1{
 
  height:60px;
  width:200px;
  border-radius:15px ;
 font-weight:bold;
  border:3px solid 	#21232d;
  
}
</style>
<script>
export default {
   data() {
       return {
           cartid:'',
           allcart:[],
           order:{},
           isLoading:false,
       }
   },
   methods: {
       getorder(){
            const vm = this;
            vm.isLoading = true;
             const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/order/${vm.cartid}`;
             vm.$http.get(api).then((response) => {
               console.log(response.data);
               vm.isLoading = false;
             vm.order = response.data.order;
            
            
             
           
            
            
            
            
          });
       },
        paid(){
          const vm = this;
            vm.isLoading = true;
             const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/pay/${vm.cartid}`;
             vm.$http.post(api).then((response) => {
               console.log(response.data);
               vm.isLoading = false;
              vm.getorder();
              vm.$router.push('/thx');
               
             
            
            
             
           
            
            
            
            
          });
        },
        Home(){
          this.$router.push('/');
        }
       
         
   },
   created() {
       this.cartid= this.$route.params.id;
       this.getorder();
      
       
   },
}
</script>