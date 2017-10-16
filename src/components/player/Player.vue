<template>
    <div class="player">
        <div class="player__header">
            <span>Now playing</span> : {{ podcast.title }}
        </div>
        <audio controls autoplay ref="player" class="player__audio">
            <source type="audio/mp3" :src="podcast.files.mp3"></source>
        </audio>
    </div>
</template>

<script>
    export default {
      name: 'player',
      props: [
        'podcast'
      ],
      watch: {
        podcast () {
          this.$refs.player.load()
        }
      }
    }
</script>

<style lang="scss">
    .player {
        width: 100%;

        &__audio {
            width: 100%;
        }

        &__header {
            font-weight: 500px;
            margin-bottom: 20px;

            span {
                font-weight: 800;
            }
        }
    }
</style>