<template>
  <div class="container">
    <div
      class="an-row"
      :style="{
        marginLeft: gutter === 0 ? false : `-${gutter / 2}px`,
        marginRight: gutter === 0 ? false : `-${gutter / 2}px`
      }"
      :class="{
        'an-row--flex': type !== '',
        'is-justify-center': type !== '' && justify === 'center',
        'is-justify-end': type !== '' && justify === 'end',
        'is-justify-space-between': type !== '' && justify === 'space-between',
        'is-justify-space-around': type !== '' && justify === 'space-around',
        'is-align-start': type !== '' && align === 'start',
        'is-align-center': type !== '' && align === 'center',
        'is-align-end': type !== '' && align === 'end',
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import { prefix } from '../../types/prefix'

export default defineComponent({
  name: `${prefix}row`,
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ''
    },
    justify: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: ''
    }
  },
  setup (props, ctx) {
    provide('gutter', props.gutter);
  }
})
</script>

<style scoped lang="less">
.an-row--flex {
  display: flex;
}
.is-justify-center {
  justify-content: center;
}
.is-justify-end {
  justify-content: flex-end;
}
.is-justify-space-between {
  justify-content: space-between;
}
.is-justify-space-around {
  justify-content: space-around;
}
.is-align-start {
  align-items: flex-start;
}
.is-align-center {
  align-items: center;
}
.is-align-end {
  align-items: flex-end;
}
</style>
