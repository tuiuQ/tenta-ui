<template>
  <div class="wrapper">
    <an-checkbox-group
      v-model="result"
    >
      <template v-for="(item, index) of hobby" :key="index">
        <an-checkbox :label="item"></an-checkbox>
      </template>
    </an-checkbox-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: "Checkbox",
  setup () {
    const state = reactive({
      hobby: ['按钮', '走马灯', '多选框', '单选框'],
      result: []
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">

</style>
