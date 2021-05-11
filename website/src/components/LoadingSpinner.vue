<template>
  <div id="loading-spinner" v-show="loading">
    <div class="top-left absolute">2</div>
    <div class="top-right absolute">0</div>
    <div class="bottom-right absolute">8</div>
    <div class="bottom-left absolute">4</div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    loading: {
      type: Boolean
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
