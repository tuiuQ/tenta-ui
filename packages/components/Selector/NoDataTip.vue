<template>
  <div class="no-data-tip">
    - 没有搜索到数据 -
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { prefix } from '../../types/prefix'

export default defineComponent({
  name: `${prefix}notdata-tip`
})
</script>

<style scoped lang="less">
.no-data-tip {
  height: 300px;
  line-height: 300px;
  font-size: 16px;
  color: #666;
  text-align: center;
}
</style>
