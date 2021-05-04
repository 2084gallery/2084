<template>
  <div id="loading-spinner" v-show="spinning" @click="spinning = false">
    <transition-group name="slide" tag="span">
      <div
      v-for="element in spinnerElements"
      :key="element.content"
      class="absolute"
      :style="{ top: element.style.position.top, left: element.style.position.left, transition: element.style.transition }"
      >
        {{element.content}}
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: '',
  data: () => ({
    spinning: true,
    counter: 0,
    oldEl: {},
    renderComponent: true,
    spinnerElements: [
      { content: '2', style: { position: { top: '40%', left: '35%' }, transition: 'all 2s ease' }, to: 'right' },
      { content: '0', style: { position: { top: '40%', left: '65%' }, transition: 'all 2s ease' }, to: 'down' },
      { content: '8', style: { position: { top: '60%', left: '65%' }, transition: 'all 2s ease' }, to: 'left' },
      { content: '4', style: { position: { top: '60%', left: '35%' }, transition: 'all 2s ease' }, to: 'up' }
    ]
  }),
  methods: {
    settingElementsPosition () {
      for (; this.counter < this.spinnerElements.length; this.counter++) {
        if (this.counter === 3) {
          this.spinnerElements[this.counter].style = this.oldEl.style
          this.spinnerElements[this.counter].to = this.oldEl.to
          return
        }
        this.spinnerElements[this.counter].style = this.spinnerElements[this.counter + 1].style
        this.spinnerElements[this.counter].to = this.spinnerElements[this.counter + 1].to
      }
    },
    initiatingSpin (timer) {
      this.oldEl.style = this.spinnerElements[0].style
      this.oldEl.to = this.spinnerElements[0].to
      this.counter = 0
      setTimeout(() => (
        this.settingElementsPosition()
      ), timer)
    }
  },
  mounted () {
    this.initiatingSpin(1000)
  },
  updated () {
    this.initiatingSpin(500)
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
  color: #777777;
  font-size: 4rem;
  font-weight: 900;
}
</style>
