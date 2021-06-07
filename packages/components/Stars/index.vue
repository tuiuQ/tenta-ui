<template>
  <div class="ui-stars">
    <span
      v-for="num in 5"
      :key="num"
      :class="[
        'icon',
        `te-icon-${theme}_${icon}`,
        num <= starNum ? 'active' : ''
      ]"
      :style="{fontSize: size + 'px'}"
      @click="setStarNum(num)"
    ></span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStars } from '../../hooks'

export default defineComponent({
  name: 'te-stars',
  props: {
    num: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 16
    },
    icon: {
      type: String,
      default: 'like_black'
    },
    theme: {
      type: String,
      default: 'filled'
    }
  },
  setup(props, ctx) {
    const [ starNum, setStarNum ] = useStars(props.num, () => {
      ctx.emit('getStarNum', starNum.value)
    })
    return {
      starNum,
      setStarNum
    }
  }
})
</script>

<style scoped lang="less">

  .icon {
    cursor: pointer;
    color: #ddd;
    &.active {
      color: #FBAB06;
    }
  }

</style>
