<template>
  <q-page>
    <section class="row q-px-lg">
      <div class="col-12 col-md-5 q-mr-auto">
      </div>
      <div class="col-12 col-md-5">
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
            class="lang-btn q-mr-xl"
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
              <q-btn label="Explorer" flat padding="none" :ripple="false" no-caps @click="setTabs('explorer')" :class="{ 'active': isPanelActive('explorer') }"/>
              <q-btn label="Contact" flat padding="none" :ripple="false" no-caps @click="setTabs('contact')" :class="{ 'active': isPanelActive('contact') }"/>
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
    ContactForm: () => import('components/ContactForm')
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
<style lang="scss">
.footer-logo {
  position: absolute;
  bottom: 0;
}
.q-btn {
  color: #777777;
  &:hover {
    color: black;
  }
}

body.desktop .q-hoverable:hover > .q-focus-helper {
  background: transparent;
}

.q-btn.active {
  color: black;
  font-weight: bold;
}

.panel-content {
  transition: color 1s;
}

.panel-content-disabled {
  color: #999999;
}
</style>
