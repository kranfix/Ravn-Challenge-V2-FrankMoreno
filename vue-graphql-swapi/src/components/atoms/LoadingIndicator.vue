<template>
  <div class="row">
    <div>
      <div class="loader"></div>
    </div>
    <h2 class="lowEmphasis" style="padding-left: 8px;">Loading</h2>
  </div>
</template>

<style scoped>
.row {
  display: flex;
}

.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid var(--rv-light);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>