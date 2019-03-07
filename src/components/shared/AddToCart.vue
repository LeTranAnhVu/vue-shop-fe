<template>
  <div>
    <button
      v-if="!isAddedToCart"
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
  data () {
    return {
      addedAmount: 0,
      isAddedToCart: false
    }
  },
  methods: {
    addToCart () {
      this.isAddedToCart = true
      this.increment()
    },
    increment () {
      this.addedAmount++
    },
    decrement () {
      this.addedAmount--
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
