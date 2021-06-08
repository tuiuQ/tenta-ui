<template>
  <div class="wrapper">
    <an-button type="primary" @click="show=true">Show</an-button>
    <an-modal :show="show"></an-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: "Modal",
  setup () {
    const state = reactive({
      show: false
    })
    const showModal = () => {
      console.log(state.show)
      state.show = true
    }
    return {
      ...toRefs(state),
      showModal
    }
  }
})
</script>

<style scoped lang="less">

</style>
