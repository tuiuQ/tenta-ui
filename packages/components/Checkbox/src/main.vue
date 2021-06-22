<template>
  <label
    class="an-checkbox"
    :class="[
      {
        'is-checked': isChecked,
        'is-disabled': disabled,
        'is-bordered': border
      },
      checkboxSize
    ]"

  >
    <span
      class="an-checkbox--input"
      :class="{
        'is-checked': isChecked,
        'is-disabled': disabled
      }"
    >
      <span class="an-checkbox--inner"></span>
      <input
        type="checkbox"
        class="an-checkbox--original"
        :value="label"
        v-model="model"
        :disabled="disabled"
        @change="handleChange"
      >
    </span>
    <span class="an-checkbox--label">
      <slot></slot>
      <span v-if="!$slots.default">
        {{ checkboxLabel }}
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  inject
} from 'vue'
import { ComponentInternalInstance } from '@vue/runtime-core'


export default defineComponent({
  name: "an-checkbox",
  props: {
    modelValue: [String, Number, Boolean],
    label: [String, Number, Boolean],
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    size: String,
    name: String,
    checked: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  setup (props, ctx) {
    type modelValueType = string | number | boolean

    const CheckboxGroup = inject('CheckboxGroup') as ComponentInternalInstance
    const state = reactive({
      model: computed({
        get: (): any => {
          return state.isGroup
            ? CheckboxGroup.props.modelValue
            : props.modelValue
        },
        set: (value: modelValueType) => {
          state.isGroup
            ? CheckboxGroup.emit('update:modelValue', value)
            : ctx.emit('update:modelValue', value)
        }
      }),
      isChecked: computed((): modelValueType => {
        return state.isGroup
          ? (state.model as any).includes(props.label)
          : state.model
      }),
      isGroup: computed((): boolean => {
        return !!CheckboxGroup
      }),
      checkboxSize: computed(() => {
        if (state.isGroup && CheckboxGroup.props.size) {
          return `an-checkbox--${CheckboxGroup.props.size}`
        } else if (props.size) {
          return `an-checkbox--${props.size}`
        } else {
          return ''
        }
      }),
      checkboxLabel: computed(() => {
        if (state.isChecked) {
          if (props.trueLabel) {
            return props.trueLabel
          } else {
            return props.label
          }
        } else {
          if (props.falseLabel) {
            return props.falseLabel
          } else {
            return props.label
          }
        }
      })
    })
    const methods = {
      handleChange: (e: MouseEvent) => {
        ctx.emit('change', (e.target as any).value)
      }
    }
    return {
      ...toRefs(state),
      ...methods
    }
  }
})
</script>

<style scoped lang="less">
@import "../../../assets/styles/components/checkbox";
</style>
