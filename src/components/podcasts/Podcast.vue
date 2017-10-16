<template>
    <div class="podcast">
        <a href="#" class="podcast__play">
            <img src="../../assets/img/play.svg" alt="Play" class="podcast__playbutton">
        </a>
        <div class="podcast__details">
            <div class="podcast__sub">2 days ago</div>
            <h1 class="podcast__header">
                Lorem Ipsum Title
            </h1>
            <p>Lorem ipsum description</p>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'podcast'
    }
</script>

<style lang="scss">
    @import '~styles/variables';

    .podcast {
        background-color: #fff;
        display: flex;
        min-height: 240px;
        border-radius: $global-radius;
        box-shadow: 0 5px 10px rgba(#000000, 0.5);
        margin-bottom: 40px;
        overflow: hidden;

        &__sub {
            font-weight: 500;
        }

        &__details {
            flex: 1;
            padding: 40px;
        }

        &__play {
            width: 15%;
            display: none;
            background-color: $blue;
            overflow: hidden;
            align-items: center;
            justify-content: center;
            border-top-left-radius: $global-radius;
            border-bottm-left-radius: $global-radius;
            transition: margin-left 180ms ease-in-out;

            &:hover {
                .podcast__playbutton {
                    transform: scale(1.5) rotate(-10deg);
                    opacity: 1;
                }
            }

            &--hidden {
                margin-left: -15%;
            }
        }

        &__playbutton {
            color: #222;
            opacity: .4;
            width: 60%;
            transition: all 180ms ease-in-out;
        }
    }

    @media only screen and (min-width: 768px) {
        .podcast__play {
            display: flex;
        }
    }
</style>