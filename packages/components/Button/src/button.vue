<template>
  <button
    class="an-button"
    :class="[
      `${type === '' ? '' : 'an-button--' + type}`,
      `${plain === true ? 'is-plain': ''}`,
      `${round === true ? 'is-round' : ''}`,
      `${circle === true ? 'is-circle' : ''}`,
      `${disabled === true ? 'is-disabled' : ''}`,
      `${size === '' ? '' : 'an-button--' + size}`
    ]"
    :disabled="disabled"
    @click="handleClick"
    :type="nativeType"
  >
    <i v-if="icon" class="an-icon" :class="[icon]"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "an-button",
  props: {
    type: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    nativeType: String
  },
  setup (props, ctx) {
    const methods = {
      handleClick: (e: MouseEvent) => {
        ctx.emit('click', e)
      }
    }

    return {
      ...methods
    }
  }
})
</script>

<style scoped lang="less">
@import "../../../assets/styles/components/button";
</style>
