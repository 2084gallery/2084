<template>
  <q-tab-panels
    v-model="tabName"
    :swipeable="false"
  >
    <q-tab-panel name="quote" class="q-pa-none panel-content animated delay-5s fadeIn smoother citation-bloc">
      <div class="text-grey w-50">
        <div class="q-mb-sm text-italic">“Une expérience bien conçue et bien conduite procure un plaisir comparable à celui qu'éprouve l'artisan devant un travail bien fait.”</div>
        <div class="text-right q-mr-md-md">Pierre Curie</div>
      </div>
    </q-tab-panel>
    <q-tab-panel
      name="explorer"
      class="q-pa-none panel-content scroll"
      :class="{'panel-content-disabled': hoverStatus, 'animated duration-3s fadeIn': tabName === 'explorer'}"
    >
      <p id="text-content" class="text-content" v-html="$t('explorer')"></p>
    </q-tab-panel>
      <q-tab-panel
      name="contact"
      class="q-pa-none panel-content scroll"
      :class="{'animated duration-3s fadeIn': tabName === 'contact'}"
      >
        <ContactForm/>
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
.q-tab-panels {
  background-color: transparent !important;
}
.panel-content {
  transition: color 0.7s;
  max-height: 300px;
  overflow-y: hidden;
  @media screen and(max-width: $breakpoint-sm) {
    max-height: 100%
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

.citation-bloc {
  padding-right: 5%;
  margin-top: 2px;
  @media screen and(min-width: $breakpoint-md) {
    margin-top: 4px;
  }
}
</style>
