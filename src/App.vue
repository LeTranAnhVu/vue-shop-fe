<template>
  <div id="app">
    <app-header></app-header>
    <main class="container">
      <!--cache the Products page-->
      <keep-alive include="Products">
        <router-view></router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/shared/AppHeader'

export default {
  name: 'App',
  components: {
    'app-header': AppHeader
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
