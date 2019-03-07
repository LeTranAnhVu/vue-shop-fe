<template>
  <section>
    <h1>Checkout page</h1>
    <section>
      <!--message cart in empty-->
      <div v-if="isCartEmpty">
        <h3>Oops! Your cart is empty.</h3>
        <router-link to="/products">
          <span>
            go for shopping
          <i class="fa fa-arrow-circle-right"></i>
          </span>
        </router-link>
      </div>
      <!--end message cart in empty-->

      <!--table-->
      <table v-else class="table">
        <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Image</th>
          <th scope="col">Price(per item)</th>
          <th scope="col">Amount</th>
          <th scope="col">Total</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="cart in carts" :key="cart.item.id">
            <td>{{cart.item.name}}</td>
            <td>
              <img width="100" class="img-thumbnail" :src="cart.item.image" alt="cart.item.name">
            </td>
            <td>{{cart.item.price}}</td>
            <td>
              <add-to-cart :item="cart.item" :amount="cart.amount"></add-to-cart>
            </td>
            <td>{{cart.amount* cart.item.price}}</td>
          </tr>

        </tbody>
      </table>
      <!--end table-->
    </section>
  </section>
</template>

<script>
import AddToCart from '../shared/AddToCart'

export default {
  name: 'Checkout',
  components: {
    'add-to-cart': AddToCart
  },

  computed: {
    isCartEmpty () {
      return this.$store.getters.cartLength <= 0
    },
    carts () {
      return this.$store.state.carts
    }
  }
}
</script>

<style scoped>

</style>
