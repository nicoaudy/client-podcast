<template>
  <header class="topheader">
    <div class="container">
      <!--<p class="welcome">Oh hi. <strong>Please choose something to play.</strong></p>-->
      <player></player>
    </div>
  </header>
</template>

<script>
  import Player from './player/Player'

  export default {
    name: 'top-header',
    components: {
      Player
    }
  }
</script>

<style lang="scss">
  @import '~styles/variables';

  .welcome {
    font-size: 1.1em;
    text-align: center;
  }

  .topheader {
    display: flex;
    align-items: center;
    width: 100%;
    height: $header-height;
    background-color: #fff;
    position: fixed;
    top: 0; left: 0;
    padding: $header-padding;
    z-index: 2;

  }
</style>
