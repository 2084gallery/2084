<template>
  <q-tab-panels
    v-model="tabName"
    animated
    :swipeable="false"
  >
    <q-tab-panel name="quote" class="q-pa-none panel-content animated delay-5s fadeIn smoother">
      <div class="text-grey">
        <div class="q-mb-sm">“Une expérience bien conçue et bien conduite procure un plaisir comparable à celui qu'éprouve l'artisan devant un travail bien fait”</div>
        <div class="q-mb-sm">“A well-designed and well-conducted experience gives a pleasure comparable to what the craftsman feels in front of a job well done.”</div>
        <div class="q-mb-sm">“精心设计和良好操作的体验可带来与工匠在做得好的工作之前所能感觉到的愉悦感”</div>
        <div>- Pierre Curie</div>
      </div>
    </q-tab-panel>
    <q-tab-panel
      name="explorer"
      class="q-pa-none panel-content scroll"
      :class="{'panel-content-disabled': hoverStatus }"
    >
      <p id="text-content" class="text-content" v-html="$t('explorer')"></p>
    </q-tab-panel>
    <q-tab-panel name="contact" class="q-pa-none panel-content scroll">
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
.panel-content {
  transition: color 0.7s;
  max-height: 300px;
  overflow-y: scroll;
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
</style>
