<template>
  <div class="footer bg-dark1 pt-4">
    <h2 class="text-center">ChillBurger</h2>

    <ul class="list-unstyled justify-content-center d-flex">
      <li>
        <a href="#"><i class="fab fa-instagram fa-2x text-danger"></i></a>
      </li>
      <li>
        <a href="#"><i class="fab fa-line fa-2x text-success"></i></a>
      </li>
      <li>
        <a href="#"><i class="fab fa-facebook fa-2x text-info"></i></a>
      </li>
    </ul>
    <div class="footerInner text-center">
      <p>地址:新北市土城區雞腿街999號<br />電話:0912345678</p>
      <a class="h5 text-danger font-weight-bold" href="#/question">還有其他問題?</a>
    </div>
  </div>
</template>

<style>
    .footer{
    padding-top: 13px;
    margin-top: 20px;
  }
.footer h2{
    color:#dcd9cb;
    font-family:'Indie Flower',cursive;
    font-weight: bold;
}
.footerInner{
    padding-bottom: 10px;
    font-weight: bold;
}
.footerInner p{
    padding-bottom: 10px;
    font-weight: bold;
    color:#dcd9cb;
}
.footer ul a{
    display: block;
    padding-right: 7px;
}
.footer ul a:hover{
    transform: scale(1.2);
}
</style>
