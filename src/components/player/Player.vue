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
    import { mapActions } from 'vuex'

    export default {
      name: 'player',
      props: [
        'podcast'
      ],
      watch: {
        podcast () {
          this.$refs.player.load()
        }
      },
      methods: {
        ...mapActions({
          setPlaying: 'player/setPlaying'
        })
      },
      mounted () {
        this.$refs.player.addEventListener('ended', () => {
          this.setPlaying(null)
        })
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