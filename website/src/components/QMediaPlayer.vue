<template>
  <q-media-player
    v-if="renderComponent"
    ref="media"
    :type="type"
    :loop="true"
    :muted="muted"
    :playsinline="true"
    :no-controls="true"
    :show-big-play-button="false"
    cross-origin="anonymous"
    :background-color="bgColor"
    :sources="sources"
    :poster="poster"
    @paused="startTransition"
    @ready="mediaPlayerConfig"
    @canplaythrough="endTransition"
    :class="isTransitioning ? 'fade-out' : 'fade-in'"
  />
</template>

<script>
import { QMediaPlayer } from '@quasar/quasar-ui-qmediaplayer'
export default {
  components: {
    QMediaPlayer
  },
  props: {
    type: {
      type: String
    },
    sources: {
      type: Array
    },
    bgColor: {
      type: String
    },
    muted: {
      type: Boolean
    },
    poster: {
      type: String
    }
  },
  data: () => ({
    renderComponent: true,
    isTransitioning: false
  }),
  methods: {
    mediaPlayerConfig () {
      // This function is launched when the mediaPlayer component is fully created
      this.$refs.media.play()
      this.$refs.media.$el.muted = ''
    },
    endAction () {
      this.nextSource()
      this.$refs.media.play()
      // Launched when video come to an end
    },
    nextSource () {
      // Function for lauching the next source
      const transitionDuration = 1500
      setTimeout(() =>
        this.$emit('next-source', this.$refs.media.currentTime()), transitionDuration)
    },
    endTransition () {
      this.isTransitioning = false
    },
    startTransition () {
      // By default when the user click on the video, it triggered a pause event
      // This function was made to avoid this behavior
      this.$refs.media.play()
      this.isTransitioning = true
      this.nextSource()
    }
  }
}
</script>
<style lang="scss">
.q-media {
  opacity: 1;
  transition: opacity 2s;
  &.fade-out {
    opacity: 0;
  }
  &.fade-in {
    opacity: 1;
    transition: opacity 4s;
  }
}

</style>
