<template>
  <div
    class="an-col"
    :style="{
      paddingLeft: isGutter ? `${gutter / 2}px` : false,
      paddingRight: isGutter ? `${gutter / 2}px` : false
    }"
    :class="[
      xs,
      sm,
      md,
      lg,
      lx
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  reactive,
  toRefs,
  computed
} from 'vue'

export default defineComponent({
  name: "an-col",
  props: {
    span: {
      type: Number,
      default: 0
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
    lx: {
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
      isGutter: computed(() => {
        return state.gutter !== 0
      }),
      xs: computed(() => {
        if (props.xs) {
          let className = `an-col-xs-${props.xs}`
          if (props.offset) {
            className = `${className} an-col-xs-offset-${props.offset}`
          }
          if (props.push) {
            className = `${className} an-col-xs-push-${props.push}`
          }
          if (props.pull) {
            className = `${className} an-col-xs-pull-${props.pull}`
          }
          return className
        }
      }),
      sm: computed(() => {
        if (props.sm) {
          let className = `an-col-sm-${props.sm}`
          if (props.offset) {
            className = `${className} an-col-sm-offset-${props.offset}`
          }
          if (props.push) {
            className = `${className} an-col-sm-push-${props.push}`
          }
          if (props.pull) {
            className = `${className} an-col-sm-pull-${props.pull}`
          }
          return className
        }
      }),
      md: computed(() => {
        let className = ''
        if (props.md) {
          className = `an-col-md-${props.md}`
        } else if (props.span) {
          className = `an-col-md-${props.span}`
        }
        if (props.offset) {
          className = `${className} an-col-md-offset-${props.offset}`
        }
        if (props.push) {
          className = `${className} an-col-md-push-${props.push}`
        }
        if (props.pull) {
          className = `${className} an-col-md-pull-${props.pull}`
        }
        return className
      }),
      lg: computed(() => {
        if (props.lg) {
          let className = ` an-col-lg-${props.lg}`
          if (props.offset) {
            className = `${className} an-col-lg-offset-${props.offset}`
          }
          if (props.push) {
            className = `${className} an-col-lg-push-${props.push}`
          }
          if (props.pull) {
            className = `${className} an-col-lg-pull-${props.pull}`
          }
          return className
        }
      }),
      lx: computed(() => {
        if (props.lx) {
          let className = `an-col-lx-${props.lx}`
          if (props.offset) {
            className = `${className} an-col-lx-offset-${props.offset}`
          }
          if (props.push) {
            className = `${className} an-col-lx-push-${props.push}`
          }
          if (props.pull) {
            className = `${className} an-col-lx-pull-${props.pull}`
          }
          return className
        }
      })
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">

</style>
