<template>
  <label
    class="an-radio"
    :class="{
      'is-checked': model === label
    }"
  >
    <span class="an-radio__input">
      <span class="an-radio__inner"></span>
      <input
        class="an-radio__original"
        type="radio"
        :name="name"
        :value="label"
        v-model="model"
      >
    </span>
    <span class="an-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs, inject } from 'vue'
import { ComponentInternalInstance } from "@vue/runtime-core";
import { prefix } from '../../types/prefix'

export default defineComponent({
  name: `${prefix}radio`,
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  setup (props, ctx) {

    const RadioGroup = inject('RadioGroup') as ComponentInternalInstance
    const state = reactive({
      RadioGroup: inject('RadioGroup') as ComponentInternalInstance,
      model: computed({
        get: (): any => {
          return state.isGroup ? state.RadioGroup.props.modelValue : props.modelValue
        },
        set: (value: any): void => {
          state.isGroup
            ? state.RadioGroup.emit('update:modelValue', value)
            : ctx.emit('update:modelValue', value)
        }
      }),
      isGroup: computed(() => {
        return !!inject('RadioGroup')
      })
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
  @primary-color: #409eff;
  .an-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .an-radio__input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .an-radio__inner {
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: white;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after {
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .an-radio__original {
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .an-radio__label {
      font-size: 14px;
      padding-left: 10px;
    }

    &.is-checked {
      .an-radio__input {
        .an-radio__inner {
          border-color: @primary-color;
          background-color: @primary-color;
          &:after {
            transform: translate(-50%, -50%) scale(1)
          }
        }
      }
      .an-radio__label {}
      color: @primary-color;
    }
  }

</style>
