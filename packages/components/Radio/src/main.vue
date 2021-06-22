<template>
  <label
    class="an-radio"
    :class="{
      'is-checked': model === label
    }"
  >
    <span
      class="an-radio--input"
      :class="{
        'is-checked': model === label
      }"
    >
      <span class="an-radio--inner"></span>
      <input
        type="radio"
        :value="label"
        v-model="model"
        :name="name"
        class="an-radio--original"
      />
    </span>
    <span class="an-radio--label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
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
  name: "an-radio",
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: null,
    name: String
  },
  setup (props, ctx) {
    const state = reactive({
      model: computed({
        get: () => {
          return state.isGroup
            ? state.RadioGroup.props.modelValue
            : props.modelValue
        },
        set: (value) => {
          state.isGroup
            ? state.RadioGroup.emit('update:modelValue', value)
            : ctx.emit('update:modelValue', value)
        }
      }),
      RadioGroup: inject('RadioGroup') as ComponentInternalInstance,
      isGroup: () => {
        return !!state.RadioGroup
      }
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
@import "../../../assets/styles/components/radio";
</style>
