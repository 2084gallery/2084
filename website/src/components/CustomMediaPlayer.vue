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
        src: require('assets/videos/virtual_mesh_hand.mp4'),
        type: 'video/mp4',
        poster: ''
      },
      {
        label: 'Glass Hand',
        src: require('assets/videos/glass_hand.mp4'),
        type: 'video/mp4',
        poster: ''
      },
      {
        label: 'Leather Hand',
        src: require('assets/videos/leather_hand.mp4'),
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
  z-index: 0;
  position: absolute;
  width: 60%;
  left: 0%;
}
</style>
