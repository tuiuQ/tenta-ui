<template>
  <main class="an-main">
    <slot></slot>
  </main>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'an-main'
})
</script>

<style lang='less'>
@import '../../../assets/styles/components/main';
</style>
