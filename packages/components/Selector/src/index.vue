<template>
  <div class="an-selector" v-focus>
    <an-selector-input
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    ></an-selector-input>

    <an-selector-menu
      :data="data"
      @setItemValue="setItemValue"
      :searchValue="searchValue"
    ></an-selector-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import SelectorInput from './src/input.vue'
import SelectorMenu from './Menu.vue'
import { MenuItem } from '../../../types/data-types'
import focus from './focus'


export default defineComponent({
  name: `an-selector`,
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
  .an-selector {
    position: relative;
    width: 300px;
  }
</style>
