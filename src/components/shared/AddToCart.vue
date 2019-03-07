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
    },
    decrement () {
      this.addedAmount--
      this.$store.commit('DECREASE_ITEM_FROM_CART', this.item.id)
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
</style>
