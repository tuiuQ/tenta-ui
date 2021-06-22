<template>
  <transition name="carousel-item">
    <div
      class="an-carousel-item"
      v-show="selfIndex === currentIndex"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent, getCurrentInstance, reactive, toRefs, watch } from 'vue'
import { ComponentInternalInstance } from '@vue/runtime-core'

export default defineComponent({
  name: 'an-carousel-item',
  setup: function () {
    const instance = getCurrentInstance() as ComponentInternalInstance
    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: (instance.parent as any)?.ctx.currentIndex
    });

    watch(() => {
      return (instance.parent as any)?.ctx.currentIndex
    }, (value) => {
      state.currentIndex = value
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang='less' scoped>
@import '../../../assets/styles/components/carousel-item';
</style>
