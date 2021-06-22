<template>
  <div
    class="an-divider"
    :class="[
      `an-divider--${type}`,
      'an-divider--with-text',
      orientation === 'center' ? '' : `an-divider--with-text-${orientation}`,
      {
        'an-divider--dashed': dashed
      }
    ]"
  >
    <span v-if="text" class="an-divider--inner-text">{{ text }}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'an-divider',
  props: {
    text: {
      type: String
    },
    type: {
      type: String,
      default: 'horizontal'
    },
    orientation: {
      type: String,
      default: 'center'
    },
    dashed: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang='less'>
@import '../../../assets/styles/components/divider';
</style>
