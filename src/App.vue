<template>
  <div class="container">
    <te-form
      :model="model"
      :label-width="100"
    >
      <te-form-item label="用户名">
        <te-input
          placeholder="请输入用户名"
          v-model="model.username"
        ></te-input>
      </te-form-item>

      <te-form-item label="记住用户">
        <te-switch
          v-model="model.active"
        ></te-switch>
      </te-form-item>
    </te-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {

    const state = reactive({
      model: {}
    })

    const methods = {

    }
    return {
      ...methods,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less">
  .wrapper {
    width: 375px;
    margin: 100px auto;
  }
  .row {
    margin: 20px 0;
    .te-button {
      margin: 0 10px;
    }
  }

  .container {
    width: 1080px;
    height: 420px;
    margin: 150px auto;
  }
</style>
