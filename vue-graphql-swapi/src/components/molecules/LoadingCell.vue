<template>
  <cell>
    <loading-indicator/>
  </cell>
</template>

<script>
import Cell from '../atoms/Cell'
import LoadingIndicator from '../atoms/LoadingIndicator.vue'

export default {
  components: {
    Cell,
    LoadingIndicator
  },
}
</script>
