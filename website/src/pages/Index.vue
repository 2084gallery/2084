<template>
  <q-page class="desktop-fullscreen">
    <transition
      v-if="loading"
      enter-active-class="animated fadeIn smooth"
      leave-active-class="animated fadeOut smooth"
    >
      <LoadingSpinner :loading="loading"/>
    </transition>
    <transition
      v-else
      enter-active-class="animated fadeIn smooth"
    >
    <section class="row q-px-lg">
      <div class="col-12">
        <div class="row">
          <div class="col-md-6 col-12 text-center c-mobile-higher-index">
            <h1 class="q-mx-md-none animated fadeIn smoother lt-lg">2 0 8 4 <br>Gallery</h1>
          </div>
          <div class="col-md-6">
            <h1 class="q-mx-auto q-mx-md-none animated fadeInRight smoother gt-md">2 0 8 4 <br>Gallery</h1>
          </div>
        </div>
      </div>
      <div class="rotating-hand" ref="hand">
        <CustomMediaPlayer />
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-3 col-md-2 button-column-container" :class="{ 'is-scrolled': isScrolled }">
            <div class="column items-center q-mr-xl q-mr-sm-none button-container">
              <q-btn
                class="app-btn q-ml-md-xl animated delay-4s fadeIn smoother"
                align="right"
                label="Explorer"
                flat
                padding="none"
                :ripple="false"
                no-caps
                @click="setTabs('explorer')"
                :class="{ 'btn-active': isPanelActive('explorer') || isPanelActive('quote') }"
              />
              <q-btn
                class="app-btn q-ml-md-xl"
                align="right"
                label="Contact"
                flat
                padding="none"
                :ripple="false"
                no-caps
                @click="setTabs('contact')"
                :class="{ 'btn-active': isPanelActive('contact') }"
                v-if="!isPanelActive('quote')"
              />

            </div>
          </div>
          <div class="col-9 col-md-6">
            <LangSwitcher class="q-mb-md"
              @mouseover="hover = true"
              @mouseout="hover = false"
              v-if="!isPanelActive('quote')"
            />
            <div class="col-12 col-md-6 q-ml-auto">
              <div class="row">
                <div class="col-md">
                  <CustomTabsPanel :hover="hover" :tab="tab" @text-scrolled="animateScrollHand" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer class="footer-logo q-mt-auto q-pa-md gt-md"/>
    </section>
    </transition>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    CustomMediaPlayer: () => import('components/CustomMediaPlayer'),
    LangSwitcher: () => import('components/LangSwitcher'),
    CustomTabsPanel: () => import('components/CustomTabsPanel'),
    Footer: () => import('components/Footer'),
    LoadingSpinner: () => import('components/LoadingSpinner')
  },
  meta: {
    title: '2084 Gallery',
    description: { name: 'description', content: '2084 Gallery resides in its commitment towards individuals invested body and soul in the discovery and preservation of our heritage' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
  },
  data () {
    return {
      tab: 'quote',
      hover: false,
      loading: true,
      isScrolled: false
    }
  },
  methods: {
    animateScrollHand (info) {
      const hand = this.$refs.hand
      let margin

      if (info.direction === 'up' && info.position === 0) {
        this.isScrolled = false
        margin = '0%'
      }
      if (info.direction === 'down' && info.position > 0) {
        this.isScrolled = true
        margin = '-60%'
      }
      hand.style.marginTop = margin
    },
    isPanelActive (tabName) {
      return this.tab === tabName
    },
    setTabs (name) {
      this.tab = name
    },
    loader () {
      setTimeout(() => {
        this.loading = false
      }, 5000)
    }
  },
  created () {
    this.loader()
  }
}
</script>
<style lang="scss" scoped>

.button-column-container {
  .button-container {
    transition: margin 1s;
    margin-top: 0%
  }
  &.is-scrolled {
    display: flex;
    flex-direction: column;
    .button-container {
      margin-top: 150%;
    }
  }
}

.rotating-hand {
  transition: margin 1s
}

.desktop-fullscreen {
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
}

.footer-logo {
  position: absolute;
  bottom: 0;
}

h1 {
  font-size: 120px;
  @media screen and (max-width: $breakpoint-sm) {
    font-size: 108px;
    margin-top: 1.3rem;
    margin-bottom: 0;
  }
}

.c-mobile-higher-index {
  @media screen and (min-width: $breakpoint-sm) {
    z-index: 1;
  }
  z-index: 0;
}
</style>
