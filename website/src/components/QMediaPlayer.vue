<template>
  <q-media-player
    v-if="renderComponent"
    ref="media"
    :type="type"
    :autoplay="true"
    :loop="true"
    :muted="muted"
    :playsinline="true"
    :no-controls="true"
    :show-big-play-button="false"
    cross-origin="anonymous"
    :background-color="bgColor"
    :sources="sources"
    :poster="poster"
    @paused="avoidPausedByClick"
    @mediaPlayer="mediaPlayerConfig"
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
    renderComponent: true
  }),
  methods: {
    mediaPlayerConfig () {
      // This function is launched when the mediaPlayer component is fully created
      this.$refs.media.setCurrentTime(0.1)
    },
    endAction () {
      this.nextSource()
      this.$refs.media.play()
      // Launched when video come to an end
    },
    nextSource () {
      // Function for lauching the next source
      this.$emit('next-source', this.$refs.media.currentTime())
    },
    avoidPausedByClick () {
      // By default when the user click on the video, it triggered a pause event
      // This function was made to avoid this behavior
      this.$refs.media.play()
      this.$refs.media.$el.classList.add('fade-out')
      this.$refs.media.$el.classList.remove('fade-in')
      setTimeout(() => {
        this.nextSource()
        this.$refs.media.$el.classList.remove('fade-out')
        this.$refs.media.$el.classList.add('fade-in')
      }, 500)
    }
  }
}
</script>
<style lang="scss">
.fade-out {
  opacity: 0;
  transition: opacity 1.5s;
}
.fade-in {
  opacity: 1;
  transition: opacity 5s;
}
</style>
