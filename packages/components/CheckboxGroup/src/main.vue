<template>
  <div class="an-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, getCurrentInstance } from 'vue'
import { ComponentInternalInstance } from '@vue/runtime-core'

export default defineComponent({
  name: "an-checkbox-group",
  props: {
    modelValue: Array,
    size: String,
    disabled: {
      type: Boolean,
      default: false
    },
    min: Number,
    max: Number
  },
  setup () {
    const instance = getCurrentInstance() as ComponentInternalInstance
    provide('CheckboxGroup', instance)
  }
})
</script>

<style scoped lang="less">

</style>
