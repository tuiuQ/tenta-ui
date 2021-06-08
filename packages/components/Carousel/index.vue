<template>
  <div
    class="an-carousel"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <div class="inner">
      <an-carousel-dot
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      ></an-carousel-dot>

      <an-carousel-director
        dir="prev"
        @dirClick="dirClick"
        v-if="hasDirector"
      ></an-carousel-director>
      <an-carousel-director
        dir="next"
        @dirClick="dirClick"
        v-if="hasDirector"
      ></an-carousel-director>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance
} from 'vue'

import CarouselDot from './Dot.vue'
import CarouselDirector from './Director.vue'
import { Director } from '../../types/data-types'

export default defineComponent({
  name: 'an-carousel',
  components: {
    [CarouselDot.name]: CarouselDot,
    [CarouselDirector.name]: CarouselDirector
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    initial: {
      type: Number,
      default: 0
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    },
    dotBgColor: {
      type: String,
      default: "#ff5000"
    }
  },
  emits: ['dotClick', 'dirClick'],
  setup (props) {

    const instance = getCurrentInstance()

    const state = reactive({
      currentIndex: props.initial,
      itemLen: 0
    })

    let t: any = null

    const autoPlay = (): void => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex('next')
        }, props.duration)
      }
    }

    const setIndex = (dir: Director): void => {
      switch (dir) {
        case 'next':
          state.currentIndex += 1
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0
          }
          break
        case 'prev':
          state.currentIndex -= 1
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1
          }
          break
        default:
          break
      }
    }

    const dotClick = (index: number): void => {
      state.currentIndex = index
    }

    const dirClick = (dir: Director): void => {
      setIndex(dir)
    }

    const mouseEnter = (): void => {
      _clearIntervalFn()
    }

    const mouseLeave = (): void => {
      autoPlay()
    }

    onMounted((): void => {
      state.itemLen = <number>instance?.slots.default?.()[0].children?.length
      autoPlay()
    })

    onBeforeUnmount((): void => {
      _clearIntervalFn()
    })

    function _clearIntervalFn(): void {
      clearInterval(t);
      t = null
    }

    return {
      ...toRefs(state),
      dotClick,
      mouseEnter,
      mouseLeave,
      dirClick
    }
  }
})
</script>

<style scoped lang="less">
  .an-carousel {
    width: 100%;
    height: 100%;

    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>
