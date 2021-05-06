<template>
  <div id="loading-spinner" v-show="loading">
    <transition-group name="slide" tag="span">
      <div
      v-for="element in spinnerElements"
      :key="element.content"
      class="absolute"
      :style="{ top: element.position.top, left: element.position.left, transition: 'all 2s ease', color: color}"
      >
        {{element.content}}
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    loading: {
      type: Boolean
    }
  },
  data: () => ({
    counter: 0,
    color: '#000',
    oldEl: {},
    renderComponent: true,
    spinnerElements: []
  }),
  methods: {
    settingElementsPosition () {
      this.color = '#999999'
      for (; this.counter < this.spinnerElements.length; this.counter++) {
        if (this.counter === 3) {
          this.spinnerElements[this.counter].position = this.oldEl.position
          this.spinnerElements[this.counter].to = this.oldEl.to
          return
        }
        this.spinnerElements[this.counter].position = this.spinnerElements[this.counter + 1].position
        this.spinnerElements[this.counter].to = this.spinnerElements[this.counter + 1].to
      }
    },
    initiatingSpin (timer) {
      this.oldEl.position = this.spinnerElements[0].position
      this.oldEl.to = this.spinnerElements[0].to
      this.counter = 0
      setTimeout(() => (
        this.settingElementsPosition()
      ), timer)
    }
  },
  mounted () {
    if (!this.$q.platform.is.desktop) {
      console.log('mobile')
      this.spinnerElements.push(
        { content: '2', position: { top: '40%', left: '35%' }, to: 'right' },
        { content: '0', position: { top: '40%', left: '55%' }, to: 'down' },
        { content: '8', position: { top: '50%', left: '55%' }, to: 'left' },
        { content: '4', position: { top: '50%', left: '35%' }, to: 'up' }
      )
    } else {
      this.spinnerElements.push(
        { content: '2', position: { top: '40%', left: '45%' }, to: 'right' },
        { content: '0', position: { top: '40%', left: '50%' }, to: 'down' },
        { content: '8', position: { top: '50%', left: '50%' }, to: 'left' },
        { content: '4', position: { top: '50%', left: '45%' }, to: 'up' })
    }
    this.initiatingSpin(1000)
  },
  updated () {
    this.initiatingSpin(2000)
  }
}
</script>
<style lang="scss" scoped>
#loading-spinner {
  z-index: 999;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  font-size: 4rem;
  font-weight: 900;
  color: #000;
}

</style>
