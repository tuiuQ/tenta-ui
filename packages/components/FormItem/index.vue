<template>
  <div class="te-form-item">
    <label
      class="te-form-item__label"
      :style="{
        width: labelWidth + 'px'
      }"
    >{{ label }}</label>
    <div class="te-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, toRefs } from 'vue'

export default defineComponent({
  name: "te-form-item",
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  setup () {
    const state: any = reactive({
      labelWidth: inject('labelWidth') as Number
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
.te-form-item {
  margin-bottom: 25px;
  .te-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .te-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
