<template>
  <aside
    class="an-aside"
    :style="{
      width: width
    }"
  >
    <slot></slot>
  </aside>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'an-aside',
  props: {
    width: {
      type: String,
      default: '200px'
    }
  }
})
</script>

<style lang='less'>
@import '../../../assets/styles/components/aside';
</style>
