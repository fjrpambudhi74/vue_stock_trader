import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import portofolio from './modules/portofolio'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stocks,
    portofolio
  }
});