<template>
  <div id="app">
    <top-header></top-header>
    <div class="container">
      <home></home>
      <a href="">Click Me!</a>
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

<style lang="scss">
  @import '~styles/variables';

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #edeff0;
    margin-top: calc(#{$header-height} + 40px);
  }

  p {
    line-height: 1.5;
  }

  a {
    color: rgba(#387bc9, .9);
    transition: color 100ms ease-in;

    &:hover {
      color: #387bc9;
    }
  }

  .container {
    max-width: 780px;
    margin: 0 auto;
    flex: 1;
  }
</style>
