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
        src: 'https://res.cloudinary.com/g2084/video/upload/v1620058859/media/hand_mesh_nshlvr.mp4',
        type: 'video/mp4',
        poster: ''
      },
      {
        label: 'Glass Hand',
        src: 'https://res.cloudinary.com/g2084/video/upload/v1620058861/media/hand_glass_y3v88c.mp4',
        type: 'video/mp4',
        poster: ''
      },
      {
        label: 'Leather Hand',
        src: 'https://res.cloudinary.com/g2084/video/upload/v1620058859/media/hand_leather_xjrca8.mp4',
        type: 'video/mp4',
        poster: ''
      },
      {
        label: 'Iron Hand',
        src: 'https://res.cloudinary.com/g2084/video/upload/v1620058861/media/hand_iron_xu7yk5.mp4',
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
  position: absolute;
  top: 20%;
  width: 50%;
  left: 0%;
  max-height: 80%;
  @media screen and (max-width: $breakpoint-sm) {
    display: block;
    position: inherit;
    width: 100%;
    max-height: 80%;
    z-index: -1;
  }
}
.q-media.bg-white {
  @media screen and (max-width: $breakpoint-md) {
    height: 35vh;
  }
}
</style>
