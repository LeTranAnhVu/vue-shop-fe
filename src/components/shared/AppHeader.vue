<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Shop</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <!--Home-->
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <!--Products-->
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" to="/products" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              Products
            </router-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/products">Foods & Drinks</router-link>
              <router-link class="dropdown-item" to="#">House Hold</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="#">Other</router-link>
            </div>
          </li>
          <!--News-->
          <li class="nav-item">
            <router-link class="nav-link" to="#">News <span class="sr-only">(current)</span></router-link>
          </li>
          <!--About-->
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About <span class="sr-only">(current)</span></router-link>
          </li>
          <!--Contact-->
          <li class="nav-item">
            <router-link class="nav-link" to="#">Contact <span class="sr-only">(current)</span></router-link>
          </li>
          <!--cart-->
          <li class="nav-item">
            <router-link class="nav-link" to="/checkout">
              <cart-icon></cart-icon>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import CartIcon from './CartIcon'

export default {
  name: 'AppHeader',
  components: {
    'cart-icon': CartIcon
  }
}
</script>

<style scoped>

</style>
