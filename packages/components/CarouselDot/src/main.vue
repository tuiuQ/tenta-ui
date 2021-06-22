<template>
  <div class="an-carousel-dot-wrapper" v-if="hasDot">
    <div
      class="dot-item"
      v-for="item in itemLen"
      :key="item"
    >
      <a
        href="javascript:void(0)"
        class="dot-lk"
        :style="{
          backgroundColor: (item - 1) === currentIndex ? dotBgColor : 'white'
        }"
        @click="dotClick(item - 1)"
      ></a>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'an-carousel-dot',
  props: {
    itemLen: Number,
    hasDot: {
      type: Boolean,
      default: true
    },
    currentIndex: Number,
    dotBgColor: {
      type: String,
      default: '#FF5000'
    }
  },
  setup (props, ctx) {
    const dotClick = (index: number) => {
      ctx.emit('dotClick', index)
    }

    return {
      dotClick
    }
  }
})
</script>

<style lang='less'>
@import '../../../assets/styles/components/carousel-dot';
</style>
