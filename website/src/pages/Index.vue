<template>
  <q-page>
    <section class="row q-px-lg">
      <div class="col-12 col-md-5 q-mr-auto">

      </div>
      <div class="col-12 col-md-5">
        <h1 class="text-bold">2084 <br>Gallery</h1>
        <div class="q-mb-md">
          <q-btn
            v-for="(langOption, i) in langOptions"
            :key="i"
            :label="langOption.label"
            flat
            padding="none"
            no-caps
            class="lang-btn q-mr-xl"
            :class="{'active': isLangActive(langOption.value) }"
            @click="setLang(langOption.value)"
          />
        </div>
      </div>
      <div class="col-12 col-md-6 q-ml-auto">
        <div class="row">
          <div class="col-md-2">
            <div class="column">
              <q-btn label="Explorer" flat padding="none" :ripple="false" no-caps @click="setTabs('explorer')"/>
              <q-btn label="Contact" flat padding="none" :ripple="false" no-caps @click="setTabs('contact')"/>
            </div>
          </div>
          <div class="col-md">
            <q-tab-panels
              v-model="tab"
              animated
              swipeable
              transition-prev="jump-up"
              transition-next="jump-up"
            >
            <q-tab-panel name="explorer" class="q-pa-none">
              <p style="column-count: 2" v-html="$t('explorer')"></p>
            </q-tab-panel>

              <q-tab-panel name="contact">
                <q-form></q-form>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </div>

    </section>
    <p class="text-bold q-mt-auto">2084 Gallery</p>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      tab: 'explorer',
      lang: this.$i18n.locale,
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
    setTabs (name) {
      this.tab = name
    },
    setLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
<style lang="scss" scoped>
.lang-btn {
  color: #777777;
  &:hover {
    color: black;
  }
}

.lang-btn.active {
  color: black;
  font-weight: bold;
}
</style>
