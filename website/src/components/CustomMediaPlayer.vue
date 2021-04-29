<template>
  <QMediaPlayer
  type="video"
  bgColor="white"
  :muted="true"
  :show-big-play-button="false"
  :sources="video.sources"
  :poster="video.poster"
>
</QMediaPlayer>
</template>

<script>
import QMediaPlayer from './QMediaPlayer'
export default {
  name: 'CustomMediaPlayer',
  components: {
    QMediaPlayer
  },
  data: () => ({
    video: {
      label: 'Spinning Hand',
      poster: '',
      sources: [
        {
          src: 'public/virtual_mesh_hand.mp4',
          type: 'video/mp4'
        }
      ]
    }
  }),
  methods: {}
}
</script>
<style lang="scss">
</style>
