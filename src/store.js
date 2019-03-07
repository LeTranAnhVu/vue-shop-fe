import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
  },
  mutations: {
    SET_PRODUCTS (state, fetchedProducts) {
      state.products = fetchedProducts
    }

  },
  actions: {
    GET_PRODUCTS (context) {
      axios.get('http://localhost:4000/products')
        .then(res => {
          context.commit('SET_PRODUCTS', res.data)
          console.log('fetched successfully', res.data)
        })
    }
  }
})
