<template>
  <header
    class="an-header"
    :style="{
      height: height
    }"
  >
    <slot></slot>
  </header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'an-header',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
})
</script>

<style lang='less'>
@import '../../../assets/styles/components/header';
</style>
