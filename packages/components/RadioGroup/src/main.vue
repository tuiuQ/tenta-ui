<template>
  <div class="an-radio-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, getCurrentInstance } from 'vue'
import { ComponentInternalInstance } from "@vue/runtime-core";

export default defineComponent({
  name: "an-radio-group",
  props: {
    modelValue: null
  },
  setup () {
    const instance = getCurrentInstance() as ComponentInternalInstance
    provide('RadioGroup', instance)
  }
})
</script>

<style scoped lang="less">

</style>
