<template>
  <div class="wrapper">
    <an-magnifier
      :imgUrl="imgUrl"
      imgAlt="IU"
      :magWidth="100"
      :magHeight="100"
      :imgWidth="400"
      :imgHeight="606"
    ></an-magnifier>
    <an-magnifier
      :imgUrl="imgUrl"
      imgAlt="IU"
      :magWidth="100"
      :magHeight="100"
      :imgWidth="400"
      :imgHeight="606"
    ></an-magnifier>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: "Magnifier",
  setup () {
    const state = reactive({
      imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F07%2F20200207113602_tmmjo.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625673493&t=4d137ceeabcdc93f5d8e741ea6bef6fd',
      link: 'http://www.baidu.com'
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
.wrapper {
  display: flex;
  /deep/ .img-wrap {
    margin: 0 20px;
  }
}
</style>
