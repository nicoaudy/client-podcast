<template>
  <div id="app">
    <top-header></top-header>
    <div class="container">
      <home></home>
    </div>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader'
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    TopHeader,
    Home
  }
}
</script>

<style>
</style>
