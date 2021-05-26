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
    <section class="row q-px-lg scroll">
      <div class="col-12 header-title-container">
        <div class="row">
          <div class="col-md-6 col-12 text-center c-mobile-higher-index">
            <h1 class="q-ma-sm-xl animated fadeIn smoother lt-lg text-left">2 0 8 4 <br>Gallery</h1>
          </div>
          <div class="col-md-6">
            <h1 class="q-mx-auto q-mx-md-none q-my-3xl animated fadeInRight duration-2s gt-md">2 0 8 4 <br>Gallery</h1>
          </div>
        </div>
      </div>
      <div class="rotating-hand" ref="hand">
        <HandPlayer />
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-3 col-sm-2 button-column-container" :class="{ 'is-scrolled': isScrolled }">
            <div class="column items-center q-mr-xl q-mr-sm-none button-container">
              <q-btn
                class="app-btn q-ml-md-xl animated delay-6s fadeIn smoother"
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
          <div class="col-9 col-sm-6">
            <LangSwitcher class="q-mb-md"
              @mouseover="hover = true"
              @mouseout="hover = false"
              v-if="!isPanelActive('quote')"
            />
            <div class="col-12 col-sm-6 q-ml-auto">
              <div class="row">
                <div class="col-md full-width">
                  <CustomTabsPanel :hover="hover" :tab="tab" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer class="footer-logo q-mt-auto q-ma-sm-xl  gt-xs"/>
    </section>
    </transition>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    HandPlayer: () => import('components/HandPlayer'),
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
.header-title-container {
  z-index: 9999;
  pointer-events: none;
}

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

@keyframes slideUp {
  from { margin-top: 0; }
  to   { margin-top: -60%; }
}

.rotating-hand {
  @media screen and (max-width: $breakpoint-xs) {
    margin-top: 0;
    animation: 1.5s ease-in-out slideUp;
    animation-delay: 8s;
    animation-fill-mode: forwards;
  }
}

.desktop-fullscreen {
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  @media screen and (max-width: $breakpoint-sm) {
    overflow-x: scroll;
  }
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
  }
}

.c-mobile-higher-index {
  @media screen and (min-width: $breakpoint-sm) {
    z-index: 1;
  }
  z-index: 0;
}
</style>
