<template>
  <div id="">
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
      class="app-btn q-mr-xl"
      :class="{'lang-active': isLangActive(langOption.value) }"
      @click="setLang(langOption.value)"
      @mouseover="$emit('mouseover')"
      @mouseout="$emit('mouseout')"
    />
  </div>
</template>
<script>
export default {
  name: 'LangSwitcher',
  data () {
    return {
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
</style>
