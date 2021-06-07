<template>
  <div class="te-form">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, getCurrentInstance } from 'vue'
import { ComponentInternalInstance } from "@vue/runtime-core";
import {prop} from "vue-class-component";

export default defineComponent({
  name: "te-form",
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
