<template>
  <div>
    <transition-group name="fade">
      <podcast :key="1"></podcast>
    </transition-group>
    <a href="#" class="load-more">Load older podcasts</a>
  </div>
</template>

<script>
  import Podcast from './podcasts/Podcast'

  export default {
    name: 'home',
    components: {
      Podcast
    }
  }
</script>

<style lang="scss">
  .load-more {
    display: block;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    text-align: center;
    margin-bottom: 40px;
    color: inherit;
    text-decoration: none;
    font-weight: 500;
  }
</style>