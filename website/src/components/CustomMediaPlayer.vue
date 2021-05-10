<template>
  <QMediaPlayer
  type="video"
  bgColor="white"
  :muted="true"
  :show-big-play-button="false"
  :sources="sources"
  :poster="sources.poster"
  @next-source="nextResource"
/>
</template>

<script>
export default {
  name: 'CustomMediaPlayer',
  components: {
    QMediaPlayer: () => import('components/QMediaPlayer')
  },
  data: () => ({
    currentVideoIndex: 0,
    sources: [],
    videos: [
      {
        label: 'Virtual Mesh Hand',
        src: require('assets/videos/mesh.mp4'),
        type: 'video/mp4',
        poster: ''
      },
      {
        label: 'Glass Hand',
        src: require('assets/videos/glass.mp4'),
        type: 'video/mp4',
        poster: ''
      },
      {
        label: 'Leather Hand',
        src: require('assets/videos/leather.mp4'),
        type: 'video/mp4',
        poster: ''
      },
      {
        label: 'Iron Hand',
        src: require('assets/videos/iron.mp4'),
        type: 'video/mp4',
        poster: ''
      }
    ]
  }),
  mounted () {
    this.initMedia()
  },
  methods: {
    initMedia () {
      this.getNextSource(this.videos[this.currentVideoIndex], '0.3')
      this.videos[this.currentVideoIndex].src = `${this.videos[this.currentVideoIndex].src}#t=0.3`
      this.sources = [this.videos[this.currentVideoIndex]]
      this.currentVideoIndex++
    },
    getNextSource (source, startTime) {
      // This function add the previous source current time
      const newSrc = this.removeTimeIndicator(source)
      source.src = `${newSrc}#t=${startTime}`
      return [source]
    },
    removeTimeIndicator (source) {
      // This function remove the #t time indicator
      return source.src.split('#t')[0]
    },
    nextResource (currentTime) {
      if (this.videos.length > this.currentVideoIndex) {
        this.sources = this.getNextSource(this.videos[this.currentVideoIndex], currentTime)
        this.currentVideoIndex++
      } else {
        this.sources = this.getNextSource(this.videos[0], currentTime)
        this.currentVideoIndex = 1
      }
    }
  }
}
</script>
<style lang="scss">
video{
  width: 100%
}
.q-media.bg-white {
  width: 43%;
  position: absolute;
  top: 15%;
  left: 0%;
  // Phones
  @media screen and (max-width: $breakpoint-sm) {
    margin-top: -10%;
    z-index: -1;
    height: 320px !important;
    max-height: 400px !important;
    position: inherit;
    width: 100%;
    video {
      width: 327px !important;
      height: 320px !important;
    }
  }
  // Tablets landscape
  @media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-md) {
    top: 30%;
    left: 5%;
  }
}
</style>
