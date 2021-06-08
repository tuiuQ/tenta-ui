<template>
  <div class="wrapper">
    <an-switch v-model="active"></an-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: "Switch",
  setup () {
    const state = reactive({
      active: false
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">

</style>
