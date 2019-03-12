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
    item: Object
  },
  // Todo
  data () {
    return {
    }
  },
  methods: {
    addToCart () {
      this.increment()
    },
    increment () {
      this.$store.commit('INCREASE_ITEM_FROM_CART', this.item)
    },
    decrement () {
      this.$store.commit('DECREASE_ITEM_FROM_CART', this.item.id)
    }
  },
  computed: {
    addedAmount () {
      return this.$store.state.carts[this.item.id] ? this.$store.state.carts[this.item.id].amount : 0
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
