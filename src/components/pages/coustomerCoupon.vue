<template>
    <div>
       <h2 class="text-center mb-5" style="font-weight:bold"><i class="fas fa-birthday-cake text-danger"></i>優惠卷專區</h2>
       <hr>
        <div class="row mt-5">
        <div class="col-md-4">
        <div class="card" style="width: 18rem;">
  <div class="card-body text-center bg-info text-white">
    <h5 class="card-title h1"style="font-weight:bold"><i class="fas fa-birthday-cake text-danger"></i>歡慶3周年</h5>
    
    <h2 class="card-text pt-1">全館商品一律8折</h2>
    <h3>序號</h3>

    <h5 style="border:2px dashed black"class="p-1 text-warning">code123<i class="far fa-copy ml-3 text-white"@click="copytext"></i></h5>
    <span class="text-danger"style="font-weight:bold">使用期限:2020/11/01 ~ 2020/11/30</span>
  </div>
</div>



        </div>
                <div class="col-md-4">
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
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
      
    }
  },
  methods: {
    copytext(){

    }
  },
}
</script>