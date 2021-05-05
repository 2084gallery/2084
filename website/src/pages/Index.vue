<template>
  <q-page>
    <!-- <LoadingSpinner/> -->
    <section class="row q-px-lg">
      <div class="col-12">
        <div class="row">
          <div class="col-md-6 col-12 text-center">
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
                  <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    transition-prev="fade"
                    transition-next="fade"
                  >
                    <q-tab-panel name="quote" class="q-pa-none panel-content animated delay-5s fadeIn smoother">
                      <div class="text-grey">
                        <div>“Citation main”</div>
                        <div>“Hand quote”</div>
                        <div>“手价”</div>
                      </div>
                    </q-tab-panel>
                    <q-tab-panel name="explorer" class="q-pa-none panel-content" :class="{'panel-content-disabled': hover }">
                      <p class="text-content" v-html="$t('explorer')"></p>
                    </q-tab-panel>
                    <q-tab-panel name="contact" class="q-pa-none">
                      <ContactForm />
                    </q-tab-panel>
                  </q-tab-panels>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer class="footer-logo q-mt-auto q-pa-md"/>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    ContactForm: () => import('components/ContactForm'),
    CustomMediaPlayer: () => import('components/CustomMediaPlayer'),
    Footer: () => import('components/Footer'),
    LangSwitcher: () => import('components/LangSwitcher')
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

.footer-logo {
  position: absolute;
  bottom: 0;
}

.panel-content {
  transition: color 0.7s;
  max-height: 300px;
}

.panel-content-disabled {
  color: #999999;
}

.text-content {
  column-count: 1;
  @media screen and(min-width: $breakpoint-md) {
    column-count: 2;
    padding-right: 5%;
  }
}

h1 {
  font-size: 120px;
  @media screen and (max-width: $breakpoint-sm) {
    font-size: 108px;
    margin-top: 1.3rem;
    margin-bottom: 0;
  }
}
</style>
