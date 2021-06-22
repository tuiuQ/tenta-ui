<template>
  <div
    class="an-carousel"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <div class="an-carousel--inner">
      <slot></slot>
      <an-carousel-dot
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        :hasDot="hasDot"
        @dotClick="dotClick"
      ></an-carousel-dot>

      <an-carousel-director
        dir="prev"
        @dirClick="dirClick"
      ></an-carousel-director>
      <an-carousel-director
        dir="next"
        @dirClick="dirClick"
      ></an-carousel-director>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance
} from 'vue'
import { ComponentInternalInstance } from '@vue/runtime-core'
import AnCarouselDot from '../../CarouselDot'
import AnCarouselDirector from '../../CarouselDirector'

export default defineComponent({
  name: 'an-carousel',
  components: {
    [AnCarouselDot.name]: AnCarouselDot,
    [AnCarouselDirector.name]: AnCarouselDirector
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
    hasDirect: {
      type: Boolean,
      default: true
    },
    dotBgColor: String
  },
  setup (props, ctx) {
    const instance = getCurrentInstance() as ComponentInternalInstance
    const state = reactive({
      currentIndex: props.initial,
      itemLen: computed(() => {
        if (ctx.slots.default) {
          return ctx.slots.default()[0].children.length
        }
        return 0
      })
    })


    let t: any = null

    const autoPlay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex('next')
        }, props.duration)
      }
    }

    const setIndex = (dir: string): void => {
      switch (dir) {
        case 'next':
          state.currentIndex += 1
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0
          }
          break
        case 'prev':
          state.currentIndex -= 1
          if (state.currentIndex < 0) {
            state.currentIndex = state.itemLen - 1
          }
          break
        default:
          break
      }
    }

    const dotClick = (index: number) => {
      state.currentIndex = index
    }

    const dirClick = (dir: string) => {
      setIndex(dir)
    }
    const mouseEnter = () => {
      _clearInterval()
    }

    const mouseLeave = () => {
      autoPlay()
    }

    onMounted(() => {
      autoPlay()
    })

    onBeforeUnmount(() => {
      _clearInterval()
    })

    function _clearInterval() {
      clearInterval(t)
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

<style lang='less'>
  @import '../../../assets/styles/components/carousel';
</style>
