<template>
  <label
    class="an-checkbox"
    :class="{
      'is-checked': isChecked
    }"
  >
    <span class="an-checkbox__input">
      <span class="an-checkbox__inner"></span>
      <input
        type="checkbox"
        class="an-checkbox__original"
        :name="name"
        :value="label"
        v-model="model"
      >
    </span>
    <span class="an-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  toRefs,
  inject
} from 'vue'
import {ComponentInternalInstance} from "@vue/runtime-core";

export default defineComponent({
  name: "an-checkbox",
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  setup (props, ctx) {
    const CheckboxGroup = inject('CheckboxGroup') as ComponentInternalInstance

    const state: any = reactive({
      model: computed({
        get: (): any =>  {
          return state.isGroup
            ? CheckboxGroup.props.modelValue
            : props.modelValue
        },
        set: (value: any): void => {
          state.isGroup
            ? CheckboxGroup.emit('update:modelValue', value)
            : ctx.emit('update:modelValue', value)
        }
      }),
      isGroup: computed(() => {
        return !!CheckboxGroup
      }),
      isChecked: computed(() => {
        return state.isGroup
          ? state.model.includes(props.label)
          : state.model
      })
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
.an-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .an-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .an-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: white;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71, -.46, .29, 1),
                  background-color .25s cubic-bezier(.71, -.46, .29, 1);
      &:after {
        box-sizing: border-box;
        content: '';
        border: 1px solid white;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .an-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      height: 0;
      width: 0;
      z-index: -1;
    }
  }
  .an-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
  &.is-checked {
    .an-checkbox__input {
      .an-checkbox__inner {
        background-color: #409eff;
        border-color: #409eff;
      }
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
    .an-checkbox__label {
      color: #409eff;
    }
  }
}
</style>
