<template>
  <cell text-align="left" :show-divider="true">
    <h2>{{ title }}</h2>
    <p class="lowEmphasis">{{ subtitle }}</p>
    
    <template v-slot:trailing>
      <div>
        <i class="material-icons icon-button">chevron_right</i>
      </div>
    </template>
  </cell>
</template>

<script>
import Cell from '../atoms/Cell'

export default {
  components: {
    Cell,
  },
  props: {
    title: {
      type: String,
      require: true,
    },
    subtitle: {
      type: String,
      require: true,
    },
  }
}
</script>

<style>
.icon-button {
  padding-top: 36px;
  padding-right: 36px;
}
</style>