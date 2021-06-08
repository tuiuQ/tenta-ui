<template>
  <transition>
    <div class="an-carousel-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs,
  watch
} from 'vue'

export default defineComponent({
  name: "an-carousel-item",
  emits: ['dirClick'],
  setup () {
    const instance = getCurrentInstance()
    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex
    })

    watch(() => {
      return instance.parent.ctx.currentIndex
    }, (value) => {
      state.currentIndex = value
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
   img {
     width: 100%;
   }

   .an-carousel-item {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
   }

   .v-enter-active,
   .v-leave-active {
     transition: all .3s linear;
   }

   .v-enter-active {
     transform: translateX(100%);
   }

   .v-enter-to {
     transform: translateX(0);
   }

   .v-leave-active {
     transform: translateX(0);
   }

   .v-leave-to {
     transform: translateX(-100%);
   }
</style>
