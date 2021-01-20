<template>
  <div>
    <div class="appbar">
      Ravn Star Wars Registry
    </div>
    <home-page/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style scoped>
.appbar {
  background-color: var(--rv-black);
  color: white;
  text-align: left;
  padding: 16px 33px 16px 33px;
  font-size: 17;
  font-weight: bold;
}
</style>