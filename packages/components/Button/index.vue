<template>
  <button
    @click="handleClick"
    class="te-button"
    :class="[
      `te-button--${type}`,
      {
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disable,
        'is-block': block
      },
      `te-button--${size}`
    ]"
  >
    <i
      v-if="icon"
      :class="'te-icon-' + theme + '_' + icon"
      :style="{ color: iconColor }"
    ></i>
    <span v-if="$slots.default" ><slot></slot></span>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

/**
 * 按钮组件
 * @props type: String
 * @props round: Boolean
 * @props size: String
 * @props circle: Boolean
 * @props disable Boolean
 * @props block Boolean
 * @props icon String
 * @props theme String
 * @func click emit
 */
export default defineComponent({
  name: 'te-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    round: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    circle: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'outlined'
    },
    iconColor: {
      type: String,
      default: '#333!important'
    }
  },
  setup(props, ctx) {
    const handleClick = () => {
      ctx.emit('click')
    }

    return {
      handleClick
    }
  }
})
</script>

<style scoped lang="less">
  @import "./styles";

</style>
