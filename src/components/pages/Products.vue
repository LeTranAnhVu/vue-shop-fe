<template>
  <section>
    <h1>Product page</h1>
    <product-list></product-list>
  </section>
</template>

<script>

import ProductList from '../ProductList'
export default {
  name: 'Products',
  components: {
    'product-list': ProductList
  }
}
</script>

<style scoped>

</style>
