import Vue from 'vue'
import VueRouter from 'vue-router'
import homeDashBoard from '@/components/homeDashBoard'
import newHome from '@/components/pages/newhome'
import Login from '@/components/login'
import Dashboard from '@/components/dashboard'
import Product from '@/components/pages/product'
import Coupon from '@/components/pages/coupon'
import Customer from '@/components/pages/cutomerProduct'
import singleProduct from '@/components/pages/singleProduct'
import cart from '@/components/pages/cart'
import Checkout from '@/components/pages/checkout'
import CheckoutFinal from '@/components/pages/checkoutFinal'
import Track from '@/components/pages/track'
import CoustomerCoupon from '@/components/pages/coustomerCoupon'
import Question from '@/components/pages/question'
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
      {
        path:"*",
        redirect:'home'
      },
     
       {
           name:'basic',
           path:'/',
           component:homeDashBoard,
           
           children:
           [
              {
                
                path:'home',
                component:newHome,
               
              },
              {
                path:'login',
                component:Login,
              },
              {
                name:'customP',
                path:'product',
                component:Customer,
            
              },
              {
                
                path:'products/:id',
                component:singleProduct,
     
            },
            {
              path:'cart',
              component:cart,
            },
            {
              path:'checkout',
              component:Checkout,
            },
            {
              path:'checkoutFinal/:id',
              component:CheckoutFinal,
            },
            {
              path:'track',
              component:Track,
            },
            {
              path:'coustomerCoupon',
              component:CoustomerCoupon,
            },
            {
              path:'question',
              component:Question,
            },
              
           ]
       },
       {
         name:'product',
         path:'/admin',
         component:Dashboard,
         meta:{requiresAuth:true},
         children:[

          {
            path:'product',
            component:Product,
            meta:{requiresAuth:true},
          },
          {
            path:'coupon',
            component:Coupon,
            meta:{requiresAuth:true},
          },
          
         ]
       },

   

     
          
       

    ],
});