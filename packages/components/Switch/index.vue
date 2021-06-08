<template>
  <div
    class="an-switch"
    @click="changeSwitch"
    :class="{'is-checked': modelValue}"
  >
    <span
      class="an-switch__core"
      :style="{
        backgroundColor: modelValue ? activeColor : inactiveColor,
        borderColor: modelValue ? activeColor : inactiveColor,
      }"
    >
      <span class="an-switch__button"></span>
    </span>
    <input
      type="checkbox"
      class="an-switch__input"
      :name="name"
      ref="input"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import { prefix } from '../../types/prefix'
import {ComponentInternalInstance} from "@vue/runtime-core";

export default defineComponent({
  name: `${prefix}switch`,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: "#409eff"
    },
    inactiveColor: {
      type: String,
      default: "#dcdfe6"
    },
    name: {
      type: String,
      default: ''
    }
  },
  setup (props, ctx) {
    const instance = getCurrentInstance() as ComponentInternalInstance
    onMounted(() => {
      (instance.refs.input as HTMLInputElement).checked = props.modelValue
    })
    const methods = {
      changeSwitch: (e: any) => {
        (instance.refs.input as HTMLInputElement).checked = props.modelValue
        ctx.emit('update:modelValue', !props.modelValue)
      }
    }

    return {
      ...methods
    }
  }
})
</script>

<style scoped lang="less">
.an-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .an-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .an-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s, background-color .3s;
    vertical-align:  middle;
    .an-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }

  &.is-checked {
    .an-switch__core {
      background-color: #409eff;
      border-color: #409eff;
      .an-switch__button {
        transform: translateX(20px)
      }
    }
  }
}
</style>
