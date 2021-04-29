<template>
  <q-form class="contact-form">
    <q-input readonly placeholder="2084 Gallery" class="q-field__border-black">
      <template #prepend>
        <span class="text-body2 text-black q-px-sm">To:</span>
      </template>
    </q-input>
    <q-input type="email" name="from" v-model="from" placeholder="Enter your email address" class="q-field__border-black">
      <template #prepend>
        <span class="text-body2 text-black q-px-sm">From:</span>
      </template>
    </q-input>
    <q-input type="textarea" name="message" v-model="message" placeholder="Write here" borderless>
      <template #prepend>
        <span class="text-body2 text-black q-px-sm">Message:</span>
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

.q-field__border-black::v-deep .q-field__control::before {
  border-bottom: 1px solid rgba(0, 0, 0, 1) !important;
}
</style>
