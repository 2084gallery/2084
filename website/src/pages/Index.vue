<template>
  <q-page class="desktop-fullscreen">
    <!-- <LoadingSpinner/> -->
    <section class="row q-px-lg">
      <div class="col-12">
        <div class="row">
          <div class="col-md-6 col-12 text-center c-mobile-higher-index">
            <h1 v-if="!$q.platform.is.desktop" class="q-mx-md-none">2 0 8 4 <br>Gallery</h1>
          </div>
          <div class="col-md-6">
            <h1 v-if="$q.platform.is.desktop" class="q-mx-auto q-mx-md-none animated fadeInRight smoother">2 0 8 4 <br>Gallery</h1>
          </div>
        </div>
      </div>
      <CustomMediaPlayer/>
      <div class="col-12">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-3 col-md-2">
            <div class="column items-center q-mr-xl q-mr-sm-none">
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
                :ripple="false" no-caps
                @click="setTabs('contact')"
                :class="{ 'btn-active': isPanelActive('contact') }"
                v-if="!isPanelActive('quote')"
              />

            </div>
          </div>
          <div class="col-9 col-md-6">
            <LangSwitcher class="q-mb-md" @mouseover="hover = true" @mouseout="hover = false" v-if="!isPanelActive('quote')"/>
            <div class="col-12 col-md-6 q-ml-auto">
              <div class="row">
                <div class="col-md">
                  <custom-tabs-panel :hover="hover" :tab="tab">
                    <template v-slot:contact-form>
                      <ContactForm/>
                    </template>
                  </custom-tabs-panel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer class="footer-logo q-mt-auto q-pa-md mobile-hide"/>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    CustomMediaPlayer: () => import('components/CustomMediaPlayer'),
    LangSwitcher: () => import('components/LangSwitcher'),
    CustomTabsPanel: () => import('components/CustomTabsPanel'),
    ContactForm: () => import('components/ContactForm'),
    Footer: () => import('components/Footer')
    // LoadingSpinner: () => import('components/LoadingSpinner'),
  },
  meta: {
    title: '2084 Gallery',
    description: { name: 'description', content: '2084 Gallery resides in its commitment towards individuals invested body and soul in the discovery and preservation of our heritage' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
  },
  data () {
    return {
      tab: 'quote',
      hover: false
    }
  },
  methods: {
    isPanelActive (tabName) {
      return this.tab === tabName
    },
    setTabs (name) {
      this.tab = name
    }
  }
}
</script>
<style lang="scss" scoped>
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
