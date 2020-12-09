<template>
    <div>
       <h2 class="text-center mb-5" style="font-weight:bold"><i class="fas fa-birthday-cake text-danger"></i>優惠卷專區</h2>
       <hr>
       <div class="container">
       
     
        <div class="row mt-5">
        <div class="col-md-4 col-sm-6 coupon">
        <div class="card" style="">
  <div class="card-body text-center bg-info text-white">
    <h5 class="card-title h1"style="font-weight:bold"><i class="fas fa-birthday-cake text-danger"></i>歡慶3周年</h5>
    
    <h2 class="card-text pt-1">全館商品一律8折</h2>
    <h3>序號</h3>

    <h5 style="border:2px dashed black"class="p-1 text-white"id="code123">code123<i class="far fa-copy ml-3 text-dark"id="copy1" @click.prevent="copy"data-clipboard-target="#code123"></i></h5>
    <span class="text-danger"style="font-weight:bold">使用期限:2022/11/01 ~ 2022/11/30</span>
  </div>
</div>



        </div>
              <div class="col-md-4 col-sm-6 coupon">
        <div class="card" style="">
  <div class="card-body text-center bg-warning text-white">
    <h5 class="card-title h1"style="font-weight:bold"><i class="fas fa-birthday-cake text-danger"></i>店長大放送</h5>
    
    <h2 class="card-text pt-1">全館商品一律6折</h2>
    <h3>序號</h3>

    <h5 style="border:2px dashed black"id="yes123"class="p-1 text-white">yes123<i class="far fa-copy ml-3 text-dark"data-clipboard-target="#yes123" id="copy2"@click.prevent="copy"></i></h5>
    <span class="text-danger"style="font-weight:bold">使用期限:2022/11/01 ~ 2022/11/30</span>
  </div>
</div>



        </div>
        



        </div>
          </div>
        </div>
    </div>
</template>
<script>
var clipboard = new ClipboardJS('#btn');
export default {
  data() {
    return {
      
    }
  },
  methods: {
    copy(){
      var clipboard = new ClipboardJS('#copy2');
      var clipboard = new ClipboardJS('#copy1');
       
    }
  },
}

</script>
<style scoped>
.far:hover{
cursor:pointer;

}
@media (max-width:768px){

  .coupon{
    margin-bottom:15px;
  }
}
</style>