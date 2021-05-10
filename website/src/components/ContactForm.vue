<template>
  <q-form class="contact-form">
    <q-input readonly :placeholder="$t('contactForm.to.placeholder')" dense class="input-border-black">
      <template #prepend>
        <span class="text-black q-pl-md">{{$t('contactForm.to.label')}} :</span>
      </template>
    </q-input>
    <q-input type="email" name="from" v-model="from" :placeholder="$t('contactForm.from.placeholder')" dense class="input-border-black">
      <template #prepend class="q-pr-none">
        <span class="text-black q-pl-md">{{$t('contactForm.from.label')}} :</span>
      </template>
    </q-input>
    <q-input type="textarea" :rows="rows" name="message" dense class="q-pb-none" v-model="message" :placeholder="$t('contactForm.message.placeholder')" borderless>
      <template #prepend>
        <span class="text-black q-pl-md">{{$t('contactForm.message.label')}} :</span>
      </template>
      <template>
        <div class="send-btn">
          <q-btn outline square color="black" class="no-border-radius q-mt-auto">
          <template>
            <span class="q-my-auto">send</span>
          </template>
          </q-btn>
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
  }),
  computed: {
    rows () {
      return this.$q.screen.lt.md ? 13 : 8
    }
  }
}
</script>
<style lang="scss" scoped>
.send-btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
  @media screen and (max-width: $breakpoint-sm) {
    &::v-deep .q-btn__wrapper {
      padding: 4px 6px;
    }
  }
}
.contact-form {
  border: 1px solid black;

  &::v-deep .q-field__prepend {
    padding-right: 3px
  }
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
