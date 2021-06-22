<template>
  <div
    class="an-row"
    :style="{
      marginLeft: gutter !== 0 ? `-${gutter / 2}px` : false,
      marginRight: gutter !== 0 ? `-${gutter / 2}px` : false
    }"
    :class="[
      `${type === 'flex' ? 'an-row--flex' : '' }`,
      `${justify === '' ? '' : 'is-justify-' + justify}`,
      `${align === '' ? '' : 'is-align-' + align}`
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'

export default defineComponent({
  name: "an-row",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ""
    },
    justify: {
      type: String,
      default: ""
    },
    align: {
      type: String,
      default: ""
    }
  },
  setup (props) {
    provide('gutter', props.gutter)
  }
})
</script>

<style scoped lang="less">

</style>
