<template>
  <q-page>
    <!-- <LoadingSpinner/> -->
    <section class="row q-px-lg">
      <div class="col-12 z-999">
        <div class="row">
          <div class="col-md-6 col-12 text-center">
            <h1 v-if="!$q.platform.is.desktop" class="q-mx-md-none">2 0 8 4 <br>Gallery</h1>
          </div>
          <div class="col-md-6">
            <h1 v-if="$q.platform.is.desktop" class="q-mx-auto q-mx-md-none">2 0 8 4 <br>Gallery</h1>
          </div>
        </div>
      </div>
      <CustomMediaPlayer/>
      <div class="col-12 z-999">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-3 col-md-2">
            <div class="column items-center q-mr-xl q-mr-sm-none">
              <q-btn class="app-btn q-ml-md-xl" align="right" label="Explorer" flat padding="none" :ripple="false" no-caps @click="setTabs('explorer')" :class="{ 'active': isPanelActive('explorer') }"/>
              <q-btn class="app-btn q-ml-md-xl" align="right" label="Contact" flat padding="none" :ripple="false" no-caps @click="setTabs('contact')" :class="{ 'active': isPanelActive('contact') }"/>
            </div>
          </div>
          <div class="col-9 col-md-6">
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
                :fab-mini="false"
                class="app-btn q-mr-md-xl q-mr-lg"
                :class="{'lang-active': isLangActive(langOption.value) }"
                @click="setLang(langOption.value)"
                @mouseover="hover = true"
                @mouseout="hover = false"
              />
            </div>
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
@mixin underlined-active ($direction, $size-direction, $width, $height, $bottom) {
  content: '';
  position: absolute;
  #{$direction}: $size-direction;
  bottom: $bottom;
  width: $width;
  height: $height;
  background: #000;
  border-width: 0 0 1px;
  border-style: solid;
}

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
  font-weight: bold;
  position: relative;
  color: #000;
  &::after {
    @include underlined-active('right', 0, 50px, 1px, 5px)
  }
}

.lang-active {
  font-weight: bold;
  position: relative;
  color: #000;
  &::after {
    @include underlined-active('left', 0, 15px, 1px, 5px)
  }
}

.panel-content {
  transition: color 0.7s;
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
  @media screen and (max-width: $breakpoint-sm) {
    margin-top: 1.3rem;
    margin-bottom: 0;
  }
}
$indexes: (
    0,
    1,
    2,
    3,
    999
);
@each $index in $indexes {
  .z-#{$index} {
  z-index: $index;
}

}
</style>
