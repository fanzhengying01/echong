import Vue from 'vue'
import Router from 'vue-router'

import First from '../pages/First/First.vue'
import Second from '../pages/Second/Second.vue'
import Third from '../pages/Third/Third.vue'
import Fourth from '../pages/Fourth/Fourth.vue'
import Tleft from "../pages/Tleft/Tleft.vue"
import Tright from '../pages/Tright/Tright.vue'
import TRlist from '../pages/TRlist/TRlist.vue'



Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/first',
      component: First,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/Second',
      component:Second,
      children:[
        {
          path:'/Second/tleft',
          component:Tleft,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/Second/tright',
          component:Tright,
          meta:{
            showFooter:true
          }
        },
        {
          path:'',
          redirect:'/Second/tleft'
        }
      ]
    },
    {
      path:'/Third',
      component:Third
    },
    {
      path:'/Fourth',
      component:Fourth
    },
    {
      path:'/',
      redirect:'/First'
    },
    {
      path:'/trlist',
      component:TRlist
    }
  ]
})
