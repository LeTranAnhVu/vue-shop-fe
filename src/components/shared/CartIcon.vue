<template>
  <div class="cart">
    <i class="fa fa-cart-arrow-down cart-icon" aria-hidden="true"></i>
    <div class="cart-number">{{number}}</div>
  </div>
</template>

<script>
export default {
  name: 'CartIcon',
  data () {
    return {
    }
  },
  computed: {
    number () {
      return this.$store.getters.cartLength
    }
  }
}
</script>

<style scoped>
  .cart{
    position: relative;
  }
  .cart-icon{
    font-size: 1.5rem;
    position: relative;
    z-index: 555;
  }
  .cart-number{
    min-width: 20px;
    min-height: 20px;
    color: #ff0d0d;
    border-radius: 5px;
    text-align: center;
    position: absolute;
    top: -5px;
    left: 20px;
    padding: 1px 3px;
    z-index: 1;
    font-size: .9rem;
    line-height: 22px;
    letter-spacing: 1.5px;
    font-weight: 700;
    text-shadow: 0px 0px 10px white;
  }
</style>
