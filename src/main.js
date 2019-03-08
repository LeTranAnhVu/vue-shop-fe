// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import Lazyload from 'vue-lazyload-img'
import App from './App'
import router from './router'
import store from './store'
import CartStyleDirective from './directives/CartStyle_Directive'
Vue.config.productionTip = false

Vue.directive('cart-style', CartStyleDirective)

Vue.use(Lazyload, {
  // default false, recommand true
  fade: true,
  // it's better not set the speed now (because cellphones perfomance is better)
  // this option make images show slower
  // but if you open it, it does save network traffic data
  // speed: 20,
  // default 300, mostly, it's not necessary to set it
  time: 300,
  // unit:px, default 0, it allows the lazyload manager loads images(vertical) before an image appeard in screen
  preload: 500
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})
