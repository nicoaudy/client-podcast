<template>
  <div>
    <podcast></podcast>
    <podcast></podcast>
    <podcast></podcast>
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
