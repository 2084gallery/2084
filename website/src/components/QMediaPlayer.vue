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
      // Function launched when component is fully created
    },
    endAction () {
      // Launched when video come to an end
    },
    nextSource () {
      // Function for lauching the next source
    },
    avoidPausedByClick () {
      // By default when the user click on the video, it triggered a pause event
      // This function was made to avoid this behavior
      this.$refs.media.play()
    },
    weird () {
      console.log('click')
    }
  }
}
</script>
<style lang="scss">
</style>
