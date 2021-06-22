<template>
  <div
    class="an-input"
    :class="[
      {
        'is-disabled': disabled,
        'an-input__suffix': isSuffix,
        'an-input__prefix': isPrefix,
        'an-input-group': $slots.prepend || $slots.append,
        'an-input-group--prepend': $slots.prepend,
        'an-input-group--append': $slots.append
      },
      `${size ? 'an-input--' + size : ''}`
    ]"
    v-input-focus
  >
    <div
      class="an-input-group__prepend"
      v-if="$slots.prepend"
      ref="prepend"
    >
      <slot name="prepend"></slot>
    </div>

    <input
      class="an-input--inner"
      :placeholder="placeholder"
      v-model="model"
      :disabled="disabled"
      :type="inputType"
      :maxlength="maxlength"
      :minlength="minlength"
      :min="min"
      :max="max"
      @blur="handleBlur"
    />
    <!--  prefix  -->
    <span
      class="an-input--prefix"
      v-if="isPrefix"
    >
      <slot
        name="prefix"
        v-if="$slots.prefix"
      ></slot>
      <template v-if="isPrefix">
        <i
          class="an-input--icon"
          :class="[prefixIcon]"
        ></i>
      </template>
    </span>
    <!--  suffix  -->
    <span
      class="an-input--suffix"
      v-if="isSuffix"
    >
      <span class="an-input--suffix-inner">
        <i
          v-if="clearfix"
          class="an-input--icon an-input--clear an-icon-close"
          @click="handleClear"
        ></i>
        <i
          v-if="showPassword"
          class="an-input--icon an-input--view an-icon-view"
          @click="handleShow"
        ></i>
        <slot
          v-if="$slots.suffix"
          name="suffix"
        ></slot>
        <template v-if="suffixIcon">
          <i
            class="an-input--icon"
            :class="[suffixIcon]"
          ></i>
        </template>
        <span class="an-input--count" v-if="showWordLimit && (maxlength || minlength)">
          <span class="an-input--count-inner" v-if="maxlength">
            {{ currentStrLength }}/{{ maxlength }}
          </span>
          <span class="an-input--count-inner" v-else-if="minlength">
            {{ minlength }}/{{ currentStrLength }}
          </span>
        </span>
      </span>
    </span>
    <div
      class="an-input-group__append"
      v-if="$slots.append"
      ref="append"
    >
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed
} from 'vue'
import { inputFocus } from '../../../directives'

export default defineComponent({
  name: "an-input",
  directives: {
    inputFocus
  },
  props: {
    modelValue: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    clearfix: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    suffixIcon: String,
    prefixIcon: String,
    size: String,
    maxlength: String,
    minlength: String,
    showWordLimit: {
      type: Boolean,
      default: false
    },
    name: String,
    readonly: {
      type: Boolean,
      default: false
    },
    max: null,
    min: null
  },
  setup (props, ctx) {

    const state = reactive({
      model: computed({
        get: (): string => props.modelValue,
        set: (value: string): void => {
          ctx.emit('update:modelValue', value)
        }
      }),
      isShowPassword: props.showPassword,
      inputType: computed((): string => {
        return state.isShowPassword
          ? 'password'
          : props.type
      }),
      isSuffix: computed(() => {
        return !!(props.clearfix || props.showPassword || props.suffixIcon || ctx.slots.suffix || props.showWordLimit)
      }),
      isPrefix: computed(() => {
        return !!(props.prefixIcon || ctx.slots.prefix)
      }),
      currentStrLength: computed(() => {
        if (state.model) {
          return state.model.length
        } else {
          return 0
        }
      })
    })

    const methods = {
      handleClear: () => {
        ctx.emit('update:modelValue', '')
      },
      handleShow: () => {
        state.isShowPassword = !state.isShowPassword
      },
      handleBlur: () => {
        ctx.emit('update:modelValue', state.model)
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
@import "../../../assets/styles/components/input";
</style>
