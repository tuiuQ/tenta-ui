<template>
  <footer
    class="an-footer"
    :style="{
      height: height
    }"
  >
    <slot></slot>
  </footer>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'an-footer',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
})
</script>

<style lang='less'>
@import '../../../assets/styles/components/footer';
</style>
