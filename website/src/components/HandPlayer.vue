<template>
  <q-media-player
    ref="media"
    type="video"
    :loop="true"
    :muted="true"
    :playsinline="true"
    :no-controls="true"
    :show-big-play-button="false"
    cross-origin="anonymous"
    background-color="white"
    :source="source"
    @paused="startTransition"
    @canplaythrough="endTransition"
    :class="{ 'fade-out': isTransitioning } "
    autoplay
  />
</template>

<script>
import { QMediaPlayer } from '@quasar/quasar-ui-qmediaplayer'
export default {
  components: {
    QMediaPlayer
  },
  data () {
    return {
      currentVideoIndex: 0,
      isTransitioning: false,
      videos: [
        'https://res.cloudinary.com/g2084/video/upload/v1620058861/media/hand_iron_xu7yk5.mp4',
        'https://res.cloudinary.com/g2084/video/upload/v1622115981/media/hand_glass_vzjtsc.mp4',
        'https://res.cloudinary.com/g2084/video/upload/v1620058859/media/hand_mesh_nshlvr.mp4',
        'https://res.cloudinary.com/g2084/video/upload/v1620058859/media/hand_leather_xjrca8.mp4'
      ],
      source: null
    }
  },
  mounted () {
    this.setSource()
  },
  methods: {
    endTransition () {
      const isFirefoxOrSafari = this.$q.platform.is.firefox || this.$q.platform.is.safari
      const transitionDuration = isFirefoxOrSafari ? 1500 : 300
      setTimeout(() => {
        this.isTransitioning = false
        this.$refs.media.play()
      }, transitionDuration)
    },
    startTransition () {
      // Prevent user from pausing the video
      this.$refs.media.play()
      this.isTransitioning = true
      this.setNextSource()
    },
    isLastVideo () {
      return this.currentVideoIndex + 1 === this.videos.length
    },
    incrementCurrentVideoIndex () {
      this.currentVideoIndex = this.isLastVideo() ? 0 : ++this.currentVideoIndex
    },
    setSource (time = 0.5) {
      this.source = `${this.videos[this.currentVideoIndex]}#t=${time}`
    },
    setNextSource () {
      const transitionDuration = 1500
      setTimeout(() => {
        const previousVideoTime = this.$refs.media.currentTime()
        this.incrementCurrentVideoIndex()
        this.setSource(previousVideoTime)
      }, transitionDuration)
    }
  }
}
</script>
<style lang="scss">
.q-media {
  opacity: 1;
  transition: opacity 2s;
  &.fade-out {
    opacity: 0 !important;
  }
}

video{
  width: 100%
}

.q-media {
  width: 43%;
  position: absolute;
  top: 15%;
  left: 0%;

  // Tablets landscape
  @media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-md) and (orientation: landscape) {
    width: 50%;
    top: 20%;
    left: 2%;
  }

  // Tablets portrait
  @media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-md) and (orientation: portrait) {
    width: 50%;
    top: 15%;
    left: 2%;
  }

  // Phones
  @media screen and (max-width: $breakpoint-xs) {
    margin-top: -10%;
    z-index: -1;
    position: inherit;
    height: 320px !important;
    max-height: 400px !important;
    width: 100%;
  }
}
</style>
