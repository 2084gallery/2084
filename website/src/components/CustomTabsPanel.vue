<template>
  <q-tab-panels
    v-model="tabName"
    animated
    :swipeable="false"
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
    <q-tab-panel name="explorer" class="q-pa-none panel-content" :class="{'panel-content-disabled': hoverStatus }">
      <p class="text-content" v-html="$t('explorer')"></p>
    </q-tab-panel>
    <q-tab-panel name="contact" class="q-pa-none">
      <slot name="contact-form"></slot>
    </q-tab-panel>
  </q-tab-panels>
</template>
<script>
export default {
  name: 'CustomTabsPanel',
  props: {
    hover: { type: Boolean },
    tab: { type: String }
  },
  data: () => ({}),
  computed: {
    tabName () {
      return this.tab
    },
    hoverStatus () {
      return this.hover
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
