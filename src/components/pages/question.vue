<template>
<div>
<div class="container">


<div class="header">
<h2 class="text-center mb-5"><i class="fas fa-cog text-danger"></i>常見問題</h2>
</div>
<div class="content mt-5 d-flex align-items-center justify-content-around"@click.prevent="hide=!hide">
<h2>Q1.營業時間?</h2>
<i class="fas fa-chevron-down fa-2x"v-if="hide ==true"></i>
<i class="fas fa-chevron-up fa-2x"v-else></i>

</div>
<div class="answer text-center pt-3 ":class="{'d-none':hide}">
<h3 class="text-success"style="font-weight:bold">禮拜一~禮拜六 AM:900~PM:11:00</h3>
 </div>
 <hr>
 <div class="content mt-5 d-flex align-items-center justify-content-around"@click.prevent="hide2=!hide2">
<h2>Q2.有缺人嗎?如何應徵呢?</h2>
<i class="fas fa-chevron-down fa-2x"v-if="hide2 ==true"></i>
<i class="fas fa-chevron-up fa-2x"v-else></i>

</div>
<div class="answer text-center pt-3 ":class="{'d-none':hide2}">
<h3 class="text-success"style="font-weight:bold">有職缺的話會刊登在104人力銀行並搜尋滿漢全雞就能找到哦!</h3>
 </div>
 <hr>
 <div class="content mt-5 d-flex align-items-center justify-content-around"@click.prevent="hide3=!hide3">
<h2>Q3.有其他分店嗎?</h2>
<i class="fas fa-chevron-down fa-2x"v-if="hide2 ==true"></i>
<i class="fas fa-chevron-up fa-2x"v-else></i>

</div>
<div class="answer text-center pt-3 ":class="{'d-none':hide3}">
<h3 class="text-success"style="font-weight:bold">目前正在積極規劃中哦!</h3>
 </div>
 <hr>
  <div class="content mt-5 d-flex align-items-center justify-content-around"@click.prevent="hide4=!hide4">
<h2>Q4.有開放加盟嗎?</h2>
<i class="fas fa-chevron-down fa-2x"v-if="hide2 ==true"></i>
<i class="fas fa-chevron-up fa-2x"v-else></i>

</div>
<div class="answer text-center pt-3 ":class="{'d-none':hide4}">
<h3 class="text-success"style="font-weight:bold">目前正在積極規劃中哦!</h3>
 </div>
 <hr>
</div>
</div>
</template>
<style scoped>
.header{
border-bottom:3px solid black;
}
</style>
<script>
export default {
    data() {
        return {
           hide:true,
           hide2:true,
           hide3:true,
           hide4:true,
        }
    },
    methods: {
      
    },
}
</script>