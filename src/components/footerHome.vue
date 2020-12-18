<template> 
<div> 
<div class="footer bg-primary pt-4">
<h2 class="text-center"style="color:#dcd9cb;font-family: Tangerine">ChillBurger</h2>

<ul class="list-unstyled foo justify-content-center d-flex">
<li><a href=""><i class="fab fa-instagram fa-2x text-danger"></i></a></li>
<li><a href=""><i class="fab fa-line fa-2x text-success"></i></a></li>
<li><a href=""><i class="fab fa-facebook fa-2x text-info"></i></a></li>
</ul>
<div class="div text-center">
<p style="color:#dcd9cb">地址:新北市土城區雞腿街999號<br>電話:0912345678</p>
<a class="h5 text-danger"style="font-weight:bold" href="#/question">還有其他問題?</a>

</div>


</div>
</div>
</template>
<style>
 .wrap{
    max-width: 1250px;
    margin: 0 auto;
    
  }


img{
    max-width: 100%;
    height:auto;
  }
  
  a{
    text-decoration: none;
    font-weight:bold;
  }
.footer{
  padding-top: 13px;
  
  
  margin-top: 20px;
}
.footer h2{
  font-family: cursive;
  font-weight: bold;
  color:black;
}
.foo a{
 display: block;
 padding-right: 7px;
 
}
.foo a:hover{
  transform: scale(1.2);
}
.div{
  padding-bottom: 10px;
  font-weight: bold;
}

</style>