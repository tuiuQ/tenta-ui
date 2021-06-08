<template>
  <div class="wrapper">
    <an-selector
      :data="SelectorData"
      placeholder="请选择框架"
    ></an-selector>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SelectorData from '../data/selector'

export default defineComponent({
  name: "Selector",
  setup () {
    return {
      SelectorData
    }
  }
})
</script>

<style scoped lang="less">

</style>
