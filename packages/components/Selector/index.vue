<template>
  <div class="te-selector" v-focus>
    <te-selector-input
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    ></te-selector-input>

    <te-selector-menu
      :data="data"
      @setItemValue="setItemValue"
      :searchValue="searchValue"
    ></te-selector-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import SelectorInput from './input.vue'
import SelectorMenu from './Menu.vue'
import { MenuItem } from '../../types/data-types'
import focus from './focus'


export default defineComponent({
  name: 'te-selector',
  components: {
    [SelectorInput.name]: SelectorInput,
    [SelectorMenu.name]: SelectorMenu
  },
  directives: {
    focus
  },
  props: {
    placeholder: String,
    data: Array
  },
  setup (props, ctx) {
    const state = reactive({
      inputValue: '',
      searchValue: ''
    })

    const methods = {
      setItemValue: (item: MenuItem) => {
        state.inputValue = item.text
        ctx.emit('setItemValue', item.value)
      },
      searchOptions: (value: string) => {
        state.searchValue = value
      }
    }

    return {
      ...methods,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
  .te-selector {
    position: relative;
    width: 300px;
  }
</style>
