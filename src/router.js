import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from './components/pages/Products'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/products', component: Products}
  ]
})
