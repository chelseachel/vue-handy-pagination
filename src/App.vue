<template>
  <div id="app">
    <pagination></pagination>
  </div>
</template>

<script>
import Pagination from './components/Pagination'

export default {
  name: 'App',
  components: {
    Pagination
  }
}
</script>

<style lang="stylus">
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  margin-top 60px
</style>
