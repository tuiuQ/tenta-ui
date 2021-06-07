<template>
  <div
    class="te-switch"
    @click="changeSwitch"
    :class="{'is-checked': modelValue}"
  >
    <span
      class="te-switch__core"
      :style="{
        backgroundColor: modelValue ? activeColor : inactiveColor,
        borderColor: modelValue ? activeColor : inactiveColor,
      }"
    >
      <span class="te-switch__button"></span>
    </span>
    <input
      type="checkbox"
      class="te-switch__input"
      :name="name"
      ref="input"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import Instance = WebAssembly.Instance;
import {ComponentInternalInstance} from "@vue/runtime-core";

export default defineComponent({
  name: "te-switch",
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
.te-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .te-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .te-switch__core {
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
    .te-switch__button {
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
    .te-switch__core {
      background-color: #409eff;
      border-color: #409eff;
      .te-switch__button {
        transform: translateX(20px)
      }
    }
  }
}
</style>
