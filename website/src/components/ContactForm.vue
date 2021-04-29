<template>
  <q-form class="contact-form">
    <q-input readonly :placeholder="$t('contactForm.to.placeholder')" class="input-border-black">
      <template #prepend>
        <span class="text-body2 text-black q-px-sm">{{$t('contactForm.to.label')}}</span>
      </template>
    </q-input>
    <q-input type="email" name="from" v-model="from" :placeholder="$t('contactForm.from.placeholder')" class="input-border-black">
      <template #prepend>
        <span class="text-body2 text-black q-px-sm">{{$t('contactForm.from.label')}}</span>
      </template>
    </q-input>
    <q-input type="textarea" name="message" v-model="message" :placeholder="$t('contactForm.message.placeholder')" borderless>
      <template #prepend>
        <span class="text-body2 text-black q-px-sm">{{$t('contactForm.message.label')}}</span>
      </template>
      <template>
        <div class="q-px-sm q-pb-md column">
          <q-btn label="send" outline square color="black" class="no-border-radius q-mt-auto"/>
        </div>
      </template>
    </q-input>
  </q-form>
</template>
<script>
export default {
  name: '',
  data: () => ({
    from: '',
    message: ''
  })
}
</script>
<style lang="scss" scoped>
.contact-form {
  border: 1px solid black;
}

.q-field__control {
  color: transparent;
  border: none !important; //then is focused remove default border
}

.input-border-black {
  &::v-deep .q-field__control::before {
    border-bottom: 1px solid rgba(0, 0, 0, 1) !important;
  }

  &::v-deep .q-field__control::after {
    background: transparent;
  }
}

</style>
