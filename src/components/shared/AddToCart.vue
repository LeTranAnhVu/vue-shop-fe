<template>
  <div>
    <button
      v-if="!addedAmount"
      class="btn btn-success add-to-cart"
      @click="addToCart"
    >Add to cart</button>
    <div v-else class="amount">
      <button
        class="btn-item-cart btn btn-danger"
        @click="increment">+</button>
      <p>{{addedAmount}}</p>
      <button
        class="btn-item-cart btn btn-danger"
        @click="decrement">-</button>
    </div>
  </div>

</template>

<script>
import { saveImageToLocalStorage } from '../../helper/helper'
export default {
  name: 'AddToCart',
  props: {
    item: Object,
    amount: Number
  },
  // Todo
  data () {
    return {
      addedAmount: this.amount || 0
    }
  },
  methods: {
    addToCart () {
      this.increment()
    },
    increment () {
      this.addedAmount++
      this.$store.commit('INCREASE_ITEM_FROM_CART', this.item)
      if (this.addedAmount === 1) {
        let img = this.$el.getElementsByTagName('img')[0]
        saveImageToLocalStorage(img)
      }
    },
    decrement () {
      this.addedAmount--
      this.$store.commit('DECREASE_ITEM_FROM_CART', this.item.id)
      console.log('cart list', this.$store.state.carts)
    }
  },
  watch: {
    addedAmount () {
      if (this.addedAmount === 0) {
        this.isAddedToCart = false
      }
    }
  }
}
</script>

<style scoped>
  .amount{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .amount p{
    flex-grow: 1;
    text-align: center;
    margin-bottom: 0;
  }
  .add-to-cart{
    margin: auto;
    display: block;
  }
  .btn-item-cart{
    width: 50px;
    font-size: 1.5rem;
    padding: 0
  }
  .basic{
    width: 80px;
  }
  .basic .amount{
    width: 100%;
  }
  .basic .amount .btn-item-cart{
    width: 20px;
    font-size: 1rem;
    padding: 0;
    background: transparent;
    border-color: #000;
    color: #000
  }
</style>
