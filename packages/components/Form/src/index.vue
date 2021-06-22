<template>
  <div class="an-form">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, getCurrentInstance } from 'vue'
import { ComponentInternalInstance } from "@vue/runtime-core";

export default defineComponent({
  name: "an-form",
  props: {
    model: {
      type: Object,
      default: {},
      required: true
    },
    labelWidth: {
      type: Number,
      default: 80
    }
  },
  setup (props, ctx) {
    const instance = getCurrentInstance() as ComponentInternalInstance
    provide('Form', instance)
    provide('labelWidth', props.labelWidth)
  }
})
</script>

<style scoped lang="less">

</style>
