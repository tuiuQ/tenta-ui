<template>
  <label
    class="an-switch"
    :class="{
      'is-checked': isChecked,
      'is-disabled': disabled
    }"
  >
    <input type="checkbox" :disabled="disabled" :value="model" v-model="model" class="an-switch--input">
    <span
      class="an-switch--label an-switch--left"
      :class="{
        'is-active': !isChecked
      }"
      v-if="inactiveValue"
    >{{ inactiveValue }}</span>
    <span
      class="an-switch--core"
      :style="{
        width: width,
        borderColor: isChecked ? activeColor : inactiveColor,
        backgroundColor: isChecked ? activeColor : inactiveColor
      }"
    >
      <span
        class="an-switch--action"
        :style="{
          borderColor: isChecked ? activeColor : inactiveColor
        }"
      >
      </span>
    </span>
    <span
      class="an-switch--label an-switch--right"
      :class="{
        'is-active': isChecked
      }"
      v-if="activeValue"
    >{{ activeValue }}</span>
  </label>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  computed
} from 'vue'

export default defineComponent({
  name: 'an-switch',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeColor: {
      type: String,
      default: "#409EFF"
    },
    inactiveColor: {
      type: String,
      default: "#C0CCDA"
    },
    name: String,
    width: {
      type: Number,
      default: 40
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup (props, ctx) {
    type modelType = string | boolean | number;
    const state = reactive({
      model: computed({
        get: (): boolean => {
          return !!props.modelValue
        },
        set: (value: modelType): void => {
          ctx.emit('update:modelValue', value)
        }
      }),
      isChecked: computed((): boolean => {
        return state.model === true || state.model === props.activeValue
      })
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang='less'>
@import '../../../assets/styles/components/switch';
</style>
