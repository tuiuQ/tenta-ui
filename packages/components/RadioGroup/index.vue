<template>
  <div class="te-radio-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, provide } from 'vue'

export default defineComponent({
  name: "te-radio-group",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    }
  },
  setup () {
    const instance = getCurrentInstance()
    provide('RadioGroup', instance)
  }

})
</script>

<style scoped lang="less">

</style>
