import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Portofolio from '../components/portofolio/Portofolio.vue'
import Stocks from '../components/stocks/Stocks.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portofolio',
    name: 'Portofolio',
    component: Portofolio
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router