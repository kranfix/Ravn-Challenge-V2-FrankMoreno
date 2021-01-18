<template>
  <div class="sidebar">
  </div>
  <div class="content">
  </div>  
</template>

<script>
export default {
  
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

.sidebar {
  margin: 0;
  padding: 0;
  width: 350px;
  background-color: red;
  position: fixed;
  height: 100%;
  overflow: auto;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}
</style>