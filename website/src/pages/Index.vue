<template>
  <q-page>
    <section class="row q-px-lg">
      <div class="col-12 col-md-5 q-mr-auto">
        test
      </div>
      <div class="col-12 col-md-5">
        <h1 class="text-bold">2084 <br>Gallery</h1>
        <div class="q-mb-md">
          <q-btn label="Français" flat padding="none" no-caps class="q-mr-xl" />
          <q-btn label="English" flat padding="none" no-caps class="q-mr-xl" />
          <q-btn label="普通" flat padding="none" no-caps class="q-mr-xl" />
        </div>
      </div>
      <div class="col-12 col-md-6 q-ml-auto">
        <div class="row">
          <div class="col-md-2">
            <div class="column">
              <q-btn label="Explorer" flat padding="none" ripple="false" no-caps @click="setTabs('explorer')"/>
              <q-btn label="Contact" flat padding="none" ripple="false" no-caps @click="setTabs('contact')"/>
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
              <p style="column-count: 2">Le propos de 2084 Gallery s’adresse aux amateurs qui souhaiteront s’investir corps et âme dans la découverte et la préservation de nos patrimoines.
      Le club rassemblera des personnes attentives, ouvertes, curieuses et déterminées. C’est par la bienveillance et la reconnaissance que nous écrirons ensemble un chapitre de notre histoire commune.
      Au sein de cet espace intimiste, humble hommage au véritable luxe dans ce qu’il a de plus vertueux, nous forgerons des projets pour dessiner le futur.</p>
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
  data: () => ({
    tab: 'explorer'
  }),
  methods: {
    setTabs (name) {
      this.tab = name
    }
  }
}
</script>
