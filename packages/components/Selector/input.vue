<template>
  <div class="te-selector-input">
    <label class="te-placeholder">{{ placeholder }}</label>
    <input
      type="text"
      class="input"
      :value="value"
      ref="inputValue"
      @input="searchOptions($event)"
      @focus="searchOptions($event)"
      @blur="setValue(value)"
    />
    <span class="icon te-icon-outlined_down_linedefuben"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'te-selector-input',
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    value: {
      type: String,
      default: ''
    }
  },
  setup (props, ctx) {
    const instance = getCurrentInstance()

    const methods = {
      searchOptions: (e: any) => {
        console.log(e);
        ctx.emit('searchOptions', e.target.value);
      },
      setValue: (value: string) => {
        const _input: any = instance?.refs.inputValue;

        if (_input.value.length > 0) {
          _input.value = value
        }
      }
    }

    return {
      ...methods
    }
  }
})
</script>

<style scoped lang="less">
  .te-selector-input {
    position: relative;
    width: 100%;
    height: 38px;

    .input {
      width: 100%;
      height: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      background-color: white;
      border: 1px solid #999999;
      border-radius: 5px;
      outline: none;
      transition: all .2s linear;

      &:focus {
        border-color: #1890ff;
        box-shadow: 0 0 3px #1890ff;
      }
    }

    .te-placeholder,
    .icon {
      position: absolute;
    }

    .te-placeholder {
      left: 15px;
      top: 8px;
      color: #999;
    }

    .icon {
      right: 15px;
      top: 12px;
      color: #999;

      &[class*=te-icon-] {
        font-size: 22px;
        top: 8px;
      }
    }
  }
</style>
