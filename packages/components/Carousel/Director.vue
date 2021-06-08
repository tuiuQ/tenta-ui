<template>
  <div class="director dir-next" v-if="dir === 'next'">
    <a
      href="javascript:void(0);"
      @click="dirClick(dir)"
    >&gt;</a>
  </div>
  <div class="director dir-prev" v-if="dir === 'prev'">
    <a
      href="javascript:void(0);"
      @click="dirClick(dir)"
    >&lt;</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'an-carousel-director',
  props: {
    dir: String
  },
  emits: ['dirClick'],
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

<style scoped lang="less">
 .director {
   position: absolute;
   top: 50%;
   z-index: 1;
   margin-top: -15px;
   width: 20px;
   height: 30px;
   text-align: center;
   line-height: 30px;
   color: white;
   background-color: rgba(0, 0, 0, .5);

   a {
     color: white;
     text-decoration: none;
   }

   &.dir-next {
     right: 0;
   }

   &.dir-prev {
     left: 0;
   }
 }
</style>
