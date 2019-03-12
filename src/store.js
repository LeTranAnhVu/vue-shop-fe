import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// cart = {item:item, amount: number}
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    products: [],
    carts: {}
  },
  getters: {
    cartLength: (state) => {
      return Object.keys(state.carts).length
    }
  },
  mutations: {
    SET_PRODUCTS (state, fetchedProducts) {
      state.products = fetchedProducts
    },
    INCREASE_ITEM_FROM_CART (state, product) {
      console.log('increase item', product)

      if (!product) return null
      if (state.carts[product.id]) {
        // if the item is exist in cart. then increase 1
        state.carts[product.id].amount++
      } else {
        // if does not
        // then add new item to carts
        state.carts[product.id] = {
          item: product,
          amount: 1
        }
      }
      // update the cart - bad way
      // TODO : find other way to update the getters
      state.carts = JSON.parse(JSON.stringify(state.carts))
    },
    DECREASE_ITEM_FROM_CART (state, productId) {
      const empty = 0
      if (productId === undefined || productId === null) return null
      if (state.carts[productId]) {
        // if the item is exist in cart. then decrease 1
        state.carts[productId].amount--
        if (state.carts[productId].amount === empty) {
          // after decrease if the number is 0 then we need to remove the item from the cart
          delete state.carts[productId] // return undefine
        }
      }
      // update the cart - bad way
      // TODO : find other way to update the getters
      state.carts = JSON.parse(JSON.stringify(state.carts))
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
