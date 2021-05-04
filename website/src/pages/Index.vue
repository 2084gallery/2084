<template>
  <q-page>
    <section class="row q-px-lg">
      <CustomMediaPlayer/>
      <!-- <LoadingSpinner/> -->
      <div class="col-12 col-md-5 q-mr-auto">
      </div>
      <div class="col-12 col-md-5" style="z-index: 1;">
        <h1>2 0 8 4 <br>Gallery</h1>
        <div class="q-mb-md">
          <q-btn
            v-for="(langOption, i) in langOptions"
            :key="i"
            :label="langOption.label"
            flat
            padding="none"
            no-caps
            no-hover
            :ripple="false"
            class="app-btn q-mr-xl"
            :class="{'active': isLangActive(langOption.value) }"
            @click="setLang(langOption.value)"
            @mouseover="hover = true"
            @mouseout="hover = false"
          />
        </div>
      </div>
      <div class="col-12 col-md-6 q-ml-auto">
        <div class="row">
          <div class="col-md-2">
            <div class="column">
              <q-btn class="app-btn" label="Explorer" flat padding="none" :ripple="false" no-caps @click="setTabs('explorer')" :class="{ 'active': isPanelActive('explorer') }"/>
              <q-btn class="app-btn" label="Contact" flat padding="none" :ripple="false" no-caps @click="setTabs('contact')" :class="{ 'active': isPanelActive('contact') }"/>
            </div>
          </div>
          <div class="col-md">
            <q-tab-panels
              v-model="tab"
              animated
              swipeable
              transition-prev="fade"
              transition-next="fade"
            >
              <q-tab-panel name="explorer" class="q-pa-none panel-content" :class="{'panel-content-disabled': hover }">
                <p style="column-count: 2" v-html="$t('explorer')"></p>
              </q-tab-panel>
              <q-tab-panel name="contact" class="q-pa-none">
                <ContactForm />
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </div>

    </section>
    <div class="text-bold q-mt-auto footer-logo q-pa-md">2084 Gallery</div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    ContactForm: () => import('components/ContactForm'),
    // LoadingSpinner: () => import('components/LoadingSpinner'),
    CustomMediaPlayer: () => import('components/CustomMediaPlayer')
  },
  meta: {
    title: '2084 Gallery',
    description: { name: 'description', content: '2084 Gallery resides in its commitment towards individuals invested body and soul in the discovery and preservation of our heritage' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
  },
  data () {
    return {
      tab: 'explorer',
      lang: this.$i18n.locale,
      hover: false,
      langOptions: [
        { value: 'fr-fr', label: 'Français' },
        { value: 'en-us', label: 'English' },
        { value: 'ch-ch', label: '普通' }
      ]
    }
  },
  methods: {
    isLangActive (langOption) {
      return this.lang === langOption
    },
    isPanelActive (tabName) {
      return this.tab === tabName
    },
    setTabs (name) {
      this.tab = name
    },
    setLang (lang) {
      this.lang = lang
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
<style lang="scss" scoped>
.footer-logo {
  position: absolute;
  bottom: 0;
}

.app-btn::v-deep {
  transition: color 0.7s;
  color: #777777;

  &:hover {
    color: black;
  }

  .q-focus-helper {
    background: transparent !important;
  }
}

.q-btn.active {
  color: black;
  font-weight: bold;
}

.panel-content {
  transition: color 0.7s;
}

.panel-content-disabled {
  color: #999999;
}
</style>
