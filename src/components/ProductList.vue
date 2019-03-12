<template>
  <div>
    <loading-spinner v-if="isLoading" ></loading-spinner>
    <div class="row" v-if="products.length !== 0">
      <div class="col-md-4"
           v-for="i in renderNumber"
           :key="products[i-1].id"
      >
        <product :product="products[i-1]"></product>
      </div>
    </div>
  </div>

</template>

<script>
import Product from './Product'
import LoadingSpinner from './shared/LoadingSpinner'

export default {
  name: 'ProductList',
  components: {
    'loading-spinner': LoadingSpinner,
    'product': Product
  },

  // life cycle
  beforeCreate () {
    this.$store.dispatch('GET_PRODUCTS')
  },
  updated () {
    this.isLoading = false
  },
  beforeMount () {
    this.startListenScroll()
  },
  activated () {
    this.startListenScroll()
  },
  beforeDestroy () {
    this.stopListenScroll()
  },
  deactivated () {
    this.stopListenScroll()
  },

  // data
  data () {
    return {
      isLoading: true,
      renderNumber: 10 // default show n products
    }
  },

  computed: {
    products () {
      return this.$store.state.products
    },
    carts () {
      console.log('products list carts changed')
      return this.$store.state.carts
    }
  },

  methods: {
    showMoreProduct () {
      this.stopListenScroll()
      // let this = this
      setTimeout(() => {
        this.renderNumber += 4
      }, 500)
      setTimeout(() => {
        this.startListenScroll()
      }, 2000)
    },
    onScroll () {
      let d = document.documentElement
      let offset = d.scrollTop + window.innerHeight
      let height = d.offsetHeight
      if (offset >= height) {
        // hit the bottom
        this.showMoreProduct()
      }
    },
    startListenScroll () {
      window.addEventListener('scroll', this.onScroll)
    },
    stopListenScroll () {
      window.removeEventListener('scroll', this.onScroll)
    }
  }
}
</script>

<style scoped>

</style>
