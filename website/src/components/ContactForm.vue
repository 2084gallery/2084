<template>
  <q-form ref="contactForm" class="contact-form" @submit.prevent="sendEmail">
    <q-input ref="surname" name="surname" placeholder="Enter your surname" v-model="honey" class="hidden"/>
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
    <q-input
      type="textarea"
      required
      name="message"
      dense
      class="q-pb-none"
      v-model="message"
      :placeholder="$t('contactForm.message.placeholder')"
      borderless
      lazy-rules
      :rules="[ val => val.length >= 3 || 'Please use minimum 4 characters']"
    >
      <template #prepend>
        <span class="text-black q-pl-md">{{$t('contactForm.message.label')}} :</span>
      </template>
      <template>
        <div class="q-pa-md column">
          <q-btn outline square color="black" class="no-border-radius q-mt-auto" type="submit" :disabled="submitted">
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
    honey: '',
    from: '',
    message: '',
    submitted: false
  }),
  computed: {
    lang () {
      return this.$i18n.locale
    },
    rows () {
      return this.$q.screen.lt.md ? 13 : 8
    }
  },
  methods: {
    getPayload () {
      return {
        lang: this.lang,
        mail: this.from,
        content: this.message
      }
    },
    isBot () {
      return this.honey.length > 0
    },
    async sendEmail () {
      const valid = await this.$refs.contactForm.validate()
      if (!valid) return
      if (this.isBot()) {
        return await this.$router.push({ name: 'congratz' })
      }

      const payload = this.getPayload()

      const res = await this.$axios.post('/send-email', payload)
        .catch(e => this.$q.notify('Error while sending email'))
      if (res) {
        this.isSubmitted = true
        this.$q.notify('Email send with success')
      }
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
