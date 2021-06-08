<template>
  <div
    class="an-col"
    :class="[
      xs,
      md,
      sm
    ]"
    :style="{
      paddingLeft: isGutter ? `${gutter / 2}px` : false,
      paddingRight: isGutter ? `${gutter / 2}px` : false,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, toRefs, computed } from 'vue'

export default defineComponent({
  name: "an-col",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    xs: {
      type: Number,
      default: 0
    },
    sm: {
      type: Number,
      default: 0
    },
    md: {
      type: Number,
      default: 0
    },
    lg: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    }
  },
  setup (props) {
    const state = reactive({
      gutter: inject('gutter'),
      isGutter: () => {
        return state.gutter !== 0
      },
      xs: computed(() => {
        if (props.xs !== 0) {
          if (props.push !== 0) {
            return `an-col-xs-${props.xs} an-col-xs-push-${props.push}`
          }
          if (props.pull !== 0) {
            return `an-col-xs-${props.xs} an-col-xs-pull-${props.pull}`
          }
          return `an-col-xs-${props.xs}`
        } else {
          return false
        }
      }),
      md: computed(() => {
        if (props.md !== 0) {
          if (props.push !== 0) {
            return `an-col-md-${props.md} an-col-md-push-${props.push}`
          }
          if (props.pull !== 0) {
            return `an-col-md-${props.md} an-col-md-pull-${props.pull}`
          }
          return `an-col-md-${props.md}`
        } else if (props.span !== 0) {
          if (props.push !== 0) {
            return `an-col-md-${props.span} an-col-md-push-${props.push}`
          }
          if (props.pull !== 0) {
            return `an-col-md-${props.span} an-col-md-pull-${props.pull}`
          }
          return `an-col-md-${props.span}`
        } else {
          return false
        }
      }),
      sm: computed(() => {
        if (props.sm !== 0) {
          if (props.push !== 0) {
            return `an-col-sm-${props.sm} an-col-sm-push-${props.push}`
          }
          if (props.pull !== 0) {
            return `an-col-sm-${props.sm} an-col-sm-pull-${props.pull}`
          }
          return `an-col-sm-${props.sm}`
        } else {
          return false
        }
      }),
      lg: computed(() => {
        if (props.lg !== 0) {
          if (props.push !== 0) {
            return `an-col-lg-${props.lg} an-col-lg-push-${props.push}`
          }
          if (props.pull !== 0) {
            return `an-col-lg-${props.lg} an-col-lg-pull-${props.pull}`
          }
          return `an-col-lg-${props.lg}`
        } else {
          return false
        }
      }),
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
</style>
