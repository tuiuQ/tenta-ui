<template>
  <div class="wrapper">
    <an-button type="primary" @click="open">Open</an-button>
    <an-dialog
      :visible.sync="visible"
      @close="close"
      width="30%"
    >
      <template v-slot:title>温馨提示</template>

      这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息
      这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息
      这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息
      这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息

      <template v-slot:footer>
        <an-button @click="close">取消</an-button>
        <an-button type="primary">确定</an-button>
      </template>
    </an-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: "Dialog",
  setup () {
    const state = reactive({
      visible: false
    })
    const methods = {
      open: () => {
        state.visible = true
      },
      close: () => {
        state.visible = false
      }
    }
    return {
      ...toRefs(state),
      ...methods
    }
  }
})
</script>

<style scoped lang="less">

</style>
