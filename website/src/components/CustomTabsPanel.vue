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
    <q-tab-panel
      name="explorer"
      class="q-pa-none panel-content scroll"
      :class="{'panel-content-disabled': hoverStatus }"
    >
      <p id="text-content" class="text-content" v-html="$t('explorer')"></p>
      <q-scroll-observer @scroll="emitTextScrolled" />
    </q-tab-panel>
    <q-tab-panel name="contact" class="q-pa-none panel-content scroll">
      <ContactForm/>
      <q-scroll-observer @scroll="emitTextScrolled" />
    </q-tab-panel>
  </q-tab-panels>
</template>
<script>
export default {
  name: 'CustomTabsPanel',
  components: {
    ContactForm: () => import('components/ContactForm')
  },
  props: {
    hover: { type: Boolean },
    tab: { type: String }
  },
  methods: {
    emitTextScrolled (info) {
      this.$emit('content-scrolled', info)
    }
  },
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
.panel-content {
  transition: color 0.7s;
  max-height: 300px;
  overflow-y: scroll;
  @media screen and(max-width: $breakpoint-sm) {
    max-height: 250px;
  }
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
  @media screen and(min-width: $breakpoint-sm) and (max-width: $breakpoint-md) {
    width: 40%;
  }
}
</style>
