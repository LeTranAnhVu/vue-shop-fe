<template>
  <div class="card mb-5" style="width: 18rem;">
    <div class="img-swrapper" :class="{'img-swrapper--not-load': !isImageLoaded }">
      <img class="card-img-top product-img"  :src="product.image" alt="product.name">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <p>£ {{product.price}}</p>
      <!--buttons add to cart-->
      <add-to-cart :item="product"></add-to-cart>
    </div>
  </div>
</template>

<script>
import AddToCart from './shared/AddToCart'

export default {
  name: 'product',
  components: {
    'add-to-cart': AddToCart
  },
  props: {
    product: Object
  },
  // life cycle
  mounted () {
    this.waitForShowImage()
  },

  data () {
    return {
      isImageLoaded: false
    }
  },

  methods: {
    waitForShowImage () {
      let imgEl = this.$el.getElementsByClassName('product-img')[0]
      imgEl.onload = () => {
        this.isImageLoaded = true
      }
    }
  }
}
</script>

<style scoped>

  .img-swrapper{
    position: relative;
  }
  .img-swrapper--not-load::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #bdc3c7;
  }
</style>
