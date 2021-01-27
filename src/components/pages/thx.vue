<template>
  <div>
    <div class="container">
      <div class="row">
      <div class="col-md-12">
      <h2 class="text-center font-weight-bold">恭喜已完成結帳囉</h2>
      <h2 class="text-center font-weight-bold">感謝您對本店的信任與支持!</h2>
      <i class="far fa-laugh-beam text-success pt-5"></i>
      <div class="d-flex justify-content-around pt-5">
        <a class="cartin h3 font-weight-bold"><i class="fas fa-home"></i>首頁</a>
        <a class="cartin h3 font-weight-bold"><i class="fas fa-arrow-circle-left"></i>繼續購物</a>
      </div>
      
      </div>
      </div>


    </div>
  </div>
</template>
<script>
export default {
  methods: {
    
  },
};
</script>
<style scoped>
.far{
  font-size:130px;
  position:relative;
  left:50%;
  transform: translate(-50%);
  
}
.cartin{
  border-bottom: 4px solid transparent;
  color: #21232d;
}
.cartin:hover {
  border-bottom: 3px solid black;
  cursor:pointer;
}
</style>
