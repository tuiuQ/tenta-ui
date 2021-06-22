<template>
  <div>

  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { lazyload } from '../../../directives'

export default defineComponent({
  name: 'an-demo',
  directives: {
    lazyload
  },
  setup () {
    const imgs = [
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3754629430,458249399&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=790981907,3944393508&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=534486318,1094186657&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3104375086,3940791289&fm=26&gp=0.jpg",
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4160046558,738415711&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2294294432,2121430111&fm=11&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2096181286,2741394334&fm=26&gp=0.jpg"
    ]

    return {
      imgs
    }
  }
})
</script>

<style lang='less'>
@import '../../../assets/styles/components/demo';

</style>
