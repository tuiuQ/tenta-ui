<template>
  <div
    class="an-input-number"
    :class="{
      'is-disabled': disabled
    }"
    v-is-number
  >
    <span
      class="an-input-number__decrease"
      @click="jian"
      :class="{
        'is-disabled': model <= min
      }"
    >
      <i class="an-icon-jian"></i>
    </span>
    <span
      class="an-input-number__increase"
      @click="add"
      :class="{
        'is-disabled': model >= max
      }"
    >
      <i class="an-icon-add"></i>
    </span>
    <an-input
      v-model="model"
      :max="max"
      :min="min"
      :disabled="disabled"
      :maxlength="currentNumLength"
    ></an-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { isNumber } from '../../../directives'
import Input from '../../Input'

export default defineComponent({
  name: "an-input-number",
  directives: {
    isNumber
  },
  components: {
    [Input.name]: Input
  },
  props: {
    modelValue: Number,
    min: Number,
    max: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    precision: {
      type: Number,
      default: 2
    }
  },
  setup (props, ctx) {
    const state = reactive({
      model: computed({
        get: (): number => {
          if (props.modelValue) {
            return props.modelValue
          } else if (props.modelValue > props.max) {
            return props.max
          } else if (props.modelValue < props.min) {
            return props.min
          } else {
            return 0
          }
        },
        set: (value: string | number): void => {
          console.log(value);
          if (value > props.max) {
            ctx.emit('update:modelValue', 10)
          } else if (value < props.min) {
            ctx.emit('update:modelValue', 1)
          } else {
            ctx.emit('update:modelValue', parseInt(value as String))
          }
        }
      }),
      currentNumLength: computed(() => {
        if (props.step > 0 && props.step < 1) {
          return (props.max + '').length + 1 + props.precision
        } else {
          return (props.max + '').length
        }

      })
    })

    const methods = {
      jian: (): void => {
        if (state.model > props.min && !props.disabled) {
          let value: number = props.modelValue - parseFloat(props.step)
          if (value > props.min) {
            value = parseFloat(value.toFixed(props.precision))
            ctx.emit('update:modelValue', value)
            ctx.emit('change', value)
          } else {
            ctx.emit('update:modelValue', props.min)
            ctx.emit('change', props.min)
          }
        }
      },
      add: (): void => {
        if (state.model < props.max && !props.disabled) {
          let value: number = props.modelValue + parseFloat(props.step)
          console.log(value);
          if (value < props.max) {
            value = parseFloat(value.toFixed(props.precision))
            ctx.emit('update:modelValue', value)
            ctx.emit('change', value)
          } else {
            ctx.emit('update:modelValue', props.max)
            ctx.emit('change', props.max)
          }
        }
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
@import "../../../assets/styles/components/input-number";
</style>
