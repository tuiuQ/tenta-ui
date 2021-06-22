<template>
  <div class="an-carousel-director dir-next" v-if="dir === 'next'">
    <a
      href="javascript:void(0)"
      @click="dirClick(dir)"
    >
      <i class="an-icon-right"></i>
    </a>
  </div>
  <div class="an-carousel-director dir-prev" v-if="dir === 'prev'">
    <a
      href="javascript:void(0)"
      @click="dirClick(dir)"
    >
      <i class="an-icon-left"></i>
    </a>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'an-carousel-director',
  props: {
    dir: String
  },
  setup (props, ctx) {
    const dirClick = (dir: string) => {
      ctx.emit('dirClick', dir)
    }

    return {
      dirClick
    }
  }
})
</script>

<style lang='less'>
@import '../../../assets/styles/components/carousel-director';
</style>
