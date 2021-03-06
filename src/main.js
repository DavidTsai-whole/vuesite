// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import './bus'
//驗證
import 
{ 
  ValidationObserver, ValidationProvider, extend, localize, configure 
} from 'vee-validate';

import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';
// import Swiper JS
import Swiper,{Navigation, Pagination} from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper();



import currency from './filters/currency'
    //全域載入
Vue.filter('currency',currency)
Vue.component('Loading',Loading);


Vue.config.productionTip = false;

Vue.use(VueAxios, axios)
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});

axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App, },
  template: '<App/>',
  router
});

router.beforeEach((to, from, next) => {
 
  if(to.meta.requiresAuth){
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
     if(response.data.success){
       next();
     }else{
       next({
         path:'/login',
       })
     }
 
 })
  }else{
    next();
  }
});


