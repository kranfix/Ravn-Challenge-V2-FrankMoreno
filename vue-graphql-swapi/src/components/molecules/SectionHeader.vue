<template>
  <cell :padding="padding" textAlign="left">
    <h2>{{ text }}</h2>
  </cell>
</template>

<script>
import Cell from '../atoms/Cell'

export default {
  components: { Cell },
  props: {
    text: {
      type: String,
      require: true
    }
  },
  data(){
    return {
      padding: { top: '32px', bottom: '8px' }
    }
  }
}
</script>
