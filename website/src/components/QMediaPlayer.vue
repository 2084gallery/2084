<template>
  <q-media-player
    :type="type"
    cross-origin="anonymous"
    :loop="true"
    :no-controls="true"
    :background-color="bgColor"
    :muted="muted"
    :autoplay="true"
    :show-big-play-button="false"
    :sources="sources"
    @ended="endAction"
    @paused="avoidPausedByClick"
    @mediaPlayer="mediaPlayerConfig"
    ref="media"
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
    }
  },
  methods: {
    mediaPlayerConfig () {
      // This function is launched when the mediaPlayer component is fully created
      this.$refs.media.setCurrentTime(0.1)
    },
    endAction () {
      // Launched when video come to an end
    },
    nextSource () {
      // Function for lauching the next source
      this.$emit('next-source', this.$refs.media.currentTime())
    },
    avoidPausedByClick () {
      // By default when the user click on the video, it triggered a pause event
      // This function was made to avoid this behavior
      this.nextSource()
      this.$refs.media.play()
    }
  }
}
</script>
<style lang="scss">
</style>
