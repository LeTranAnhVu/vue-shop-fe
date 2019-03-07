<template>
  <div class="overlay--center">
    <div class="spinner-border text-primary spinner--lg spinner--thick" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner'
}
</script>

<style scoped>
  .spinner--lg{
    width: 100px;
    height: 100px
  }
  .spinner--thick{
    border: 1.25em solid currentColor;
    border-right-color: transparent;
  }
  .overlay--center{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
    background: #2c3e509c;
  }

</style>
