// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import loading from './common/image/timg.gif'
import VueLazyload from 'vue-lazyload'

import {Button} from 'mint-ui'

import 'mint-ui/lib/style.css'

import './mock/mockserver'

Vue.use(VueLazyload, {
  loading
})

Vue.component(Button.name,Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render:h => h(App),
  store
})
