<template>


<div class="header bg-dark1 mb-5  d-flex  justify-content-around align-items-center ">
<h1 class="h1Title"@click="goHome">ChillBurger</h1>



  
  <ul class="menu list-unstyled d-flex  pt-3">
  <li>
  <a  href="#/product"><i class="fas fa-book-open"></i>美味菜單</a>
  </li>
  <li>
  <a href="#/track"><i class="far fa-grin-hearts"></i>我的收藏</a>
  </li>
  <li>
  <a href="#/login"><i class="fas fa-sign-in-alt"></i>後台管理</a>
  </li>
    </ul>
    <a href="#"class="rwdMenu"@click.prevent="showmenu"><i class="fas fa-bars fa-3x"></i></a>

</div>


</template>


<script>
import $ from 'jquery'
export default {
  data() {
    return {
      getItem:[],
      number:'',
    }
  },
  methods: {
    getitem(){
      this.getItem = JSON.parse(localStorage.getItem('tableData'));
      this.number = this.getItem.length;
      
      
    },
    goHome(){
     this.$router.push('/');
    },
    showmenu(){
      $('body').toggleClass('menu-show');
    },
  },
  created() {
    this.getitem();
  },
}
</script>
