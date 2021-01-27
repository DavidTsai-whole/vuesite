<template>
<div>
<loading :active.sync="isLoading"></loading>
<div class="container">


<div class="row ">
<div class="col-md-2">
<ul class="list-group list-unstyled ">
  <li><a href="#" class="list-group-item  text-center " :class="{'active':visibilty == 'all'}" @click.prevent="visibilty = 'all'">所有商品</a></li>
  <li><a href="#" class="list-group-item text-center" :class="{'active':visibilty == 'burger'}" @click.prevent="visibilty = 'burger'">漢堡</a></li>
  <li><a href="#" class="list-group-item text-center" :class="{'active':visibilty == 'dessert'}" @click.prevent="visibilty = 'dessert'">配菜</a></li>
  <li><a href="#" class="list-group-item text-center" :class="{'active':visibilty == 'drink'}" @click.prevent="visibilty = 'drink'">飲品</a></li>

</ul>
</div>
<div class="col-md-10">

<div class="row mb-5">
<div class="sort col-md-6 col-sm-6 ">
<select name=""  id="" class="form-control text-dark1" v-model="selected">
<option value="0">全部商品</option>
<option value="1">依價格低到高排序</option>
<option value="2">依價格高到低排序</option>

</select>
</div>
<div class="search col-md-6  col-sm-6 ">
<div class="d-flex align-items-center">
<i class="fas fa-search fa-2x pr-2"></i>
<input type="text"class="form-control"placeholder="搜尋產品 " v-model="filterText">
</div>

</div>
</div>

<div class="row  animate__animated animate__fadeInUp">




<div class="col-lg-4 mb-4 col-md-6  animate__animated animate__fadeInUp" v-for="item in filterTodo">

<div class="card box-shadow ">
  <div class="toProuductDetail"
     :style="{backgroundImage:`url(${item.imageUrl})`}" @click="inputProductid(item)">
     
      
    </div>
    <div class="imgtext" @click="inputProductid(item)">
     <h3>more</h3>
     </div>
    
   <div class="track">
   <a href="#" @click.prevent="sendlocal(item.id)"v-if="trackData.indexOf(item.id)===-1" ><i class="far fa-grin-hearts fa-2x text-white"></i></a>
      <a href="#" @click.prevent="sendlocal(item.id)"v-else><i class="far fa-grin-hearts fa-2x text-danger"></i></a>
      
   </div>
  <div class="card-body" @click="inputProductid(item)">
  <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
  <h5 class="card-title fot-weight-bold">{{item.title}}</h5>
        
     
      
       <div class="d-flex justify-content-between align-items-baseline">
       
        <del class="p">原價{{item.origin_price}}元</del>
        <div class="p text-danger font-weight-bold">特價{{item.price}}元</div>
        
        
      </div>
    </div>
    <div class="card-footer">
      
      <button class="btn btn-block btn-dark1 btn-sm ml-auto" @click="addcart(item)">
        
        加到購物車
      </button>
      
     
    </div>
</div>
  </div>


</div>

</div>

 


</div>


</div>
</div>


</div>

</template>
<style>
.toProuductDetail{
height: 150px;
 background-size: cover; 
 background-position: center;
}
  .sort select{
    border:2px solid #21232d;
}
.search input{
    border:2px solid #21232d;
}
.imgtext{
    position:absolute;
    color:white;
    display:none;
    z-index:1000;
     top:16%;
    left: 39%;
  }
.imgtext:hover{
    cursor: pointer;
  }
  .box-shadow:hover{
    box-shadow:0 4px 10px rgba(0,0,0,0.46); 
    cursor: pointer;
 }
 .box-shadow:hover .imgtext{
      display:block;
 }
 
.box-shadow:hover .toProuductDetail{
    -webkit-filter:brightness(.5);
 }
    

.track{
    position:absolute;
    right:0px;
    
  }
.track a{
    display:block;
     padding:4px;
  }

@media (max-width:768px){
    .sort{
      margin-top:20px;
    }
    .search{
      margin-top:20px;
    }
    }
</style>
<script>



export default {
    components:{



    },
    data() {
        return {
            products:[],
            
            
            isLoading : false,
            visibilty:'all',
            trackData:JSON.parse(localStorage.getItem('tableData')) || [],
            cartData:JSON.parse(localStorage.getItem('cartData')) || [],
            filterText:'',
            selected:'0',
            allcart:[],
            
            
            
            
        }
    },
    methods: {
        getProducts(){
          const vm = this;
            const api =`${process.env.APIPATH}/api/${process.env.MEPATH}/products/all`;
            
                const  categoryName  = vm.$route.params.categoryname;
               //如果有categoryName存在visibilty才變
          if(categoryName){
            vm.visibilty = categoryName;
          }
            vm.isLoading=true;
               vm.$http.get(api).then((response) => {
            
            vm.isLoading = false;
            vm.products = response.data.products;   
          });
        },
        inputProductid(item){
       const vm = this;
                                                 vm.$router.push(`/products/${item.id}`);
        },
        addcart(data){
          const vm = this;
          
          const cacheCarID = [];
          vm.cartData.forEach((item) => cacheCarID.push(item.product_id));
         
          if (cacheCarID.indexOf(data.id) === -1) {
         
            const cartContent = {
            product_id:data.id,
            qty:1,
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
                 qty:item.qty+=1,
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
        sendlocal(id){
          const vm = this;
          const followId = vm.trackData.indexOf(id);
          if(followId ==-1){
            vm.trackData.push(id);
            vm.$bus.$emit('message:push','已加入追蹤','light');
          }
          else{
          vm.trackData.splice(followId,1);
          vm.$bus.$emit('message:push','已取消追蹤','light');
          }
         localStorage.setItem('tableData',JSON.stringify(vm.trackData));
        },

    },
    created() {
        this.getProducts();
        
    },
    //頁面切換
    computed: {
      filterTodo(){
        const vm = this;
        if(vm.visibilty == 'all'){
          
        return vm.products.filter(function(item){
          
             return item.title.match(vm.filterText)
        }).sort(function(a,b){
         
           if(vm.selected==='1'){
          return a.price-b.price
          }
          if(vm.selected==='2'){
          return b.price-a.price
          }
         
          
        
          
        });
        }else if(vm.visibilty == 'burger'){
           var newTodo =[];
           vm.products.forEach(function (item){
          if(item.category == '漢堡'){
          newTodo.push(item);

          }
           })
           return newTodo.filter(function(item){
             return item.title.match(vm.filterText)
        }).sort(function(a,b){
         
           if(vm.selected==='1'){
          return a.price-b.price
          }
          if(vm.selected==='2'){
          return b.price-a.price
          }
         
          
        
          
        });
        }else if(vm.visibilty == 'dessert'){
           var newTodo =[];
           vm.products.forEach(function (item){
          if(item.category == '配菜'){
          newTodo.push(item);

          }
           })
             return newTodo.filter(function(item){
             return item.title.match(vm.filterText)
        }).sort(function(a,b){
         
           if(vm.selected==='1'){
          return a.price-b.price
          }
          if(vm.selected==='2'){
          return b.price-a.price
          }
         
          
        
          
        });
        }
        else if(vm.visibilty == 'drink'){
           var newTodo= [];
           vm.products.forEach(function (item){
          if(item.category == '飲品'){
          newTodo.push(item);

          }
           })
             return newTodo.filter(function(item){
             return item.title.match(vm.filterText)
        }).sort(function(a,b){
         
           if(vm.selected==='1'){
          return a.price-b.price
          }
          if(vm.selected==='2'){
          return b.price-a.price
          }
        });
        }
      },
      
      
    },
    
}
</script>
