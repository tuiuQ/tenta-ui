<template>
  <div
    v-magnifier
    class="img-wrap"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px'
    }"
  >
    <a
      :href="link"
      class="mag-wrap"
      :target="blank ? '_blank' : ''"
      :style="{
        width: magWidth + 'px',
        height: magHeight + 'px'
      }"
    >
      <img
        class="mag-img"
        :src="imgUrl"
        :alt="imgAlt"
        :style="{
          width: imgWidth + 'px',
          height: imgHeight + 'px'
        }"
      >
    </a>
    <a
      class="img-lk"
      :href="link"
    >
      <img
        class="static-img"
        :src="imgUrl"
        :alt="imgAlt"
      >
    </a>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { magnifier } from '../../directives'

export default defineComponent({
  name: 'te-magnifier',
  props: {
    imgWidth: {
      type: Number,
      default: 375
    },
    imgHeight: {
      type: Number,
      default: 500
    },
    magWidth: {
      type: Number,
      default: 150
    },
    magHeight: {
      type: Number,
      default: 150
    },
    blank: {
      type: Boolean,
      default: false
    },
    link: String,
    imgUrl: String,
    imgAlt: String
  },
  directives: {
    magnifier
  }
})
</script>

<style scoped lang="less">
  .img-wrap {
    position: relative;
    border: 1px solid #ddd;
    box-shadow: 0 0 5px #999;
    .static-img {
      width: 100%;
    }
    .mag-wrap {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      background-color: #fff;
      box-shadow: 0 0 3px #ccc;
      cursor: move;
      overflow: hidden;
      &.show {
        display: block;
        transform: scale(2);
      }

      .mag-img {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
</style>
