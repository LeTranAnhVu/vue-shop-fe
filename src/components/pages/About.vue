<template>
  <section>
    <h1>About page</h1>
    <storage-input></storage-input>

  </section>
</template>

<script>
import StorageInput from '../storage/StorageInput'

export default {
  name: 'About',
  components: {
    'storage-input': StorageInput
  }
}
</script>

<style scoped>

</style>
