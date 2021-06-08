<template>
  <div class="wrapper">
    <div class="contains">
      <an-carousel
        :autoplay="true"
        :duration="3000"
        :initial="2"
        :hasDot="true"
        :hasDirector="true"
      >
        <template
          v-for="(item, index) in CarouselData"
          :key="index"
        >
          <an-carousel-item>
            <img :src="require(`../assets/images/${item.src}`)">
          </an-carousel-item>
        </template>
      </an-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CarouselData from '../data/carousel'

export default defineComponent({
  name: "Carousel",
  setup () {
    return {
      CarouselData
    }
  }
})
</script>

<style scoped lang="less">
.wrapper {
  padding: 10px 0;
}
.contains {
  width: 1080px;
  height: 420px;
}
</style>
