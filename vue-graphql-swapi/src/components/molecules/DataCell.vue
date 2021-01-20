<template>
  <cell show-divider>
    <div class="row">
      <h2 class="lowEmphasis">{{ category }}</h2>
      <h2>{{ value }}</h2>
    </div>
  </cell>
</template>

<script>
import Cell from '../atoms/Cell'

export default {
  components: { Cell },
  props: {
    category: {
      type: String,
      require: true,
    },
    value: {
      type: String,
      require: true,
    },
  },
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
