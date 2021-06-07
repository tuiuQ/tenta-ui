<template>
  <div class="te-selector-menu">
    <template v-if="searchData.length > 0">
      <div
        class="menu-item"
        v-for="(item, index) of searchData"
        :key="index"
        @click="setItemValue(item)"
      >
        {{ item.text }}
      </div>
    </template>
    <te-notdata-tip v-else></te-notdata-tip>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  watch
} from 'vue'
import { MenuItem } from '../../types/data-types'
import NotDataTip from './NoDataTip.vue'

export default defineComponent({
  name: "te-selector-menu",
  components: {
    [NotDataTip.name]: NotDataTip
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            value: '1',
            text: 'one'
          },
          {
            id: 2,
            value: '2',
            text: 'two'
          },
          {
            id: 1,
            value: '3',
            text: 'three'
          }
        ]
      }
    },
    searchValue: String
  },
  setup (props, ctx) {
    const searchData: any = ref([])

    onMounted(() => {
      searchData.value = props.data
    })

    watch(() => {
      return props.searchValue
    }, (value: any) => {
      filterData(value)
    })

    const filterData = (value: string) => {
      searchData.value = props.data.filter((item: any) => {
        return item.text.toLowerCase().includes((props.searchValue as String).toLowerCase())
      })
    }

    const methods = {
      setItemValue: (item: MenuItem): void => {
        ctx.emit('setItemValue', item)
      }
    }

    return {
      ...methods,
      searchData
    }
  }
})
</script>

<style scoped lang="less">
  .te-selector-menu {
    display: none;
    position: absolute;
    left: 0;
    top: 48px;
    width: 100%;
    background-color: white;
    box-shadow: 0 0 10px #ddd;
    border-radius: 5px;
    cursor: pointer;

    .menu-item {
      height: 35px;
      text-align: center;
      line-height: 35px;
      font-size: 14px;
      color: #666;
      margin: 10px 0;
      transition: background-color .2s linear;

      &:hover {
        background-color: #ededed;
      }
    }
  }
</style>
