<template>
  <div>
    <div :style="style">
      <slot></slot>
    </div>
    
    <div v-if="showDivider" :style="{paddingLeft: _padding.left}">
      <hr class="solid">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showDivider: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: Object,
      default: {},
    },
    textAlign: {
      type: String,
      default: 'center'
    }
  },
  computed: {
    _padding() {
      return {
        left: '16px',
        right: '16px',
        top: '16px',
        bottom: '16px',
        ...this.padding
      }
    },
    style() {
      return {
        paddingLeft: this._padding.left,
        paddingRight: this._padding.right,
        paddingTop: this._padding.top,
        paddingBottom: this._padding.bottom,
        textAlign: this.textAlign,
      }
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
};

hr.solid {
  padding-left: 16;
  border-top: 1px solid var(--rv-light);
}
</style>