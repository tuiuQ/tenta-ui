<template>
  <section
    class="an-container"
    :class="{
      'is-vertical': dir === 'vertical'
    }"
  >
    <slot></slot>
  </section>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'an-container',
  props: {
    direction: String
  },
  setup (props, ctx) {
    let dir = ref('horizontal')
    if (props.direction) {
      dir = props.direction
    } else {
      if (ctx.slots.default) {
        const slots = ctx.slots.default()
        slots.forEach(slot => {
          if (slot.type.name === 'an-header' || slot.type.name === 'an-footer') {
            dir = ref('vertical')
          }
        })
      }
    }
    return {
      dir
    }
  }
})
</script>

<style lang='less'>
@import '../../../assets/styles/components/container';
</style>
