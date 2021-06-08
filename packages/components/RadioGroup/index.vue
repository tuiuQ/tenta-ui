<template>
  <div class="an-radio-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, provide } from 'vue'
import { prefix } from '../../types/prefix'

export default defineComponent({
  name: `${prefix}radio-group`,
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
