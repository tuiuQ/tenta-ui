<template>
  <div class="wrapper">
    <an-radio-group v-model="gender">
      <an-radio label="1">man</an-radio>
      <an-radio label="2">woman</an-radio>
    </an-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: "Radio",
  setup () {
    const state = reactive({
      gender: '1'
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">

</style>
