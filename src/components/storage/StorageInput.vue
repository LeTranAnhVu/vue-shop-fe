<template>
  <div>
    <!--<input class="cus-input" type="text" v-model="dummyfile">-->
    <div class="input-group mb-3">
      <input type="text" class="form-control" v-model="fileName">
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">{{extension}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StorageInput',
  data () {
    return {
      dummyfile: 'abcyxz.23.234.23.dfa-sjhdfssddddfa-sds.png',
      folder: {}
    }
  },
  computed: {
    extension () {
      return this.dummyfile.split('.').slice(-1)[0]
    },
    fileName () {
      const restLen = this.dummyfile.length - this.extension.length
      return this.dummyfile.substring(0, restLen - 1)
    }
  }
}
</script>

<style scoped>
  .cus-input{
    width: 400px
  }

</style>
