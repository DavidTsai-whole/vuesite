<template>
<div>
<loading :active.sync="isLoading"></loading>
<div class="container">


<div class="row ">
<div class="col-md-2">
<ul class="list-group ">
  <a href="#" class="list-group-item  text-center" :class="{'active':visibilty == 'all'}" @click.prevent="visibilty = 'all'">所有商品</a>
  <a href="#" class="list-group-item text-center" :class="{'active':visibilty == 'burger'}" @click.prevent="visibilty = 'burger'">漢堡</a>
  <a href="#" class="list-group-item text-center" :class="{'active':visibilty == 'dessert'}" @click.prevent="visibilty = 'dessert'">配菜</a>
  <a href="#" class="list-group-item text-center" :class="{'active':visibilty == 'drink'}" @click.prevent="visibilty = 'drink'">飲品</a>

</ul>
</div>
<div class="col-md-10">

<div class="row mb-5">
<div class="sort col-md-6 col-sm-6 ">
<select name="" id="" class="form-control" v-model="asdad">
<option value="0">全部商品</option>
<option value="1">依價格低到高排序</option>
<option value="2">依價格高到低排序</option>

</select>
</div>
<div class="search col-md-6  col-sm-6">
<div class="d-flex align-items-center">
<i class="fas fa-search fa-2x pr-2"></i>
<input type="text"class="form-control"placeholder="搜尋產品"v-model="filterText">
</div>

</div>
</div>

<div class="row">




<div class="col-md-4 mb-4 col-sm-6 animate__animated animate__fadeInUp" v-for="item in filterTodo">

<div class="card box-shadow animate__animated animate__fadeInUp">
  <div class="toProuductDetail" style="height: 150px; background-size: cover; background-position: center;"
     :style="{backgroundImage:`url(${item.imageUrl})`}" @click="inputProductid(item)">
     
      
    </div>
    <div class="imgtext "@click="inputProductid(item)">
     <h3 class="" >more</h3>
     </div>
    
   <div class="track">
   <a href="#"@click.prevent="sendlocal(item.id)"v-if="trackData.indexOf(item.id)===-1" ><i class="far fa-grin-hearts fa-2x text-white"></i></a>
      <a href="#"@click.prevent="sendlocal(item.id)"v-else><i class="far fa-grin-hearts fa-2x text-danger"></i></a>
      
   </div>
  <div class="card-body">
  <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
  <h5 class="card-title"style="font-weight:bold;">{{item.title}}</h5>
        
     
      
       <div class="d-flex justify-content-between align-items-baseline">
       
        <del class="p ">原價{{item.origin_price}}元</del>
        <div class="p text-danger "style="font-weight:bold">特價{{item.price}}元</div>
        
        
      </div>
    </div>
    <div class="card-footer">
      
      <button class="btn btn-block btn-danger btn-sm ml-auto"@click="addcart(item.id)">
        
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
<script>


export default {
    components:{
    
     todo:{},
    
    
    
    },
    data() {
        return {
            products:[],
            
            isLoading : false,
            visibilty:'all',
            trackData:JSON.parse(localStorage.getItem('tableData')) || [],
            filterText:'',
            asdad:'0',
            
            
            
        }
    },
    methods: {
        getProducts(){
            const api =`${process.env.APIPATH}/api/${process.env.MEPATH}/products/all`;
            const vm = this;
               const  categoryName  = this.$route.params.categoryName;
               //如果有categoryName存在visibilty才變
          if(categoryName){
            this.visibilty = categoryName;
          }
            vm.isLoading=true;
               vm.$http.get(api).then((response) => {
            console.log(response.data);
            vm.isLoading = false;
            vm.products = response.data.products;
          
            
         
            
          
            
            
          });
        },
        inputProductid(item){
       const vm = this;
            vm.$router.push(`/products/${item.id}`);
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
         
           if(vm.asdad==='1'){
          return a.price-b.price
          }
          if(vm.asdad==='2'){
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
         
           if(vm.asdad==='1'){
          return a.price-b.price
          }
          if(vm.asdad==='2'){
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
         
           if(vm.asdad==='1'){
          return a.price-b.price
          }
          if(vm.asdad==='2'){
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
         
           if(vm.asdad==='1'){
          return a.price-b.price
          }
          if(vm.asdad==='2'){
          return b.price-a.price
          }
         
          
        
          
        });
        }
      },
      
      
    },
    
}
</script>
<style>
.box-shadow:hover{
box-shadow:0 4px 10px rgba(0,0,0,0.46);

}
.box-shadow:hover .imgtext{
  display:block;
}
.box-shadow:hover .toProuductDetail{
-webkit-filter:brightness(.5);
}
.card{
overflow:hidden;
}

.toProuductDetail:hover {
  cursor:pointer;
   
  
  
   
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
  cursor:pointer;
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