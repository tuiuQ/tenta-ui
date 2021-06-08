<template>
  <div
    class="an-input"
    :class="{ 'an-input--suffix': isShowSuffix }"
    v-focus
  >
    <label
      class="an-placeholder"
      :class="{'is-disabled': disabled}"
      v-show="!modelValue"
    >{{ placeholder }}</label>
    <input
      :type="inputType"
      class="inner"
      :name="name"
      :disabled="disabled"
      :class="{'is-disabled': disabled}"
      :value="modelValue"
      @input="handleModelValue"
      @keydown="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <span class="an-input__suffix" v-if="isShowSuffix">
      <i
        v-if="clearable"
        class="an-input__icon an-icon-outlined_close"
        @click="$emit('update:modelValue', '')"
      ></i>
      <i
        v-if="showPassword"
        class="an-input__icon an-icon-outlined_visible"
        @click="updateShowPassword"
      ></i>
    </span>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    computed,
    reactive,
    toRefs
  } from 'vue'
  import { focus } from '../../directives'

  export default defineComponent({
    name: "an-input",
    directives: {
      focus
    },
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      modelValue: [String, Number],
      clearable: {
        type: Boolean,
        default: false
      },
      showPassword: {
        type: Boolean,
        default: false
      },
      inputNumber: {
        type: Boolean,
        default: false
      }
    },
    setup (props, ctx) {
      const reg = /[a-zA-Z]+/i

      const state = reactive({
        stateShowPassword: props.showPassword
      })
      const methods = {
        updateShowPassword: () => {
          state.stateShowPassword = !state.stateShowPassword
        },
        clearValue: (e: InputEvent) => {
          console.log(e);
          ctx.emit('input', '')
        },
        handleInput: (e: MouseEvent) => {
          ctx.emit('keydown', e)
        },
        handleBlur: (e: MouseEvent) => {
          ctx.emit('blur', e)
        },
        handleModelValue: (e: MouseEvent) => {
          ctx.emit('update:modelValue', (e.target as any).value)
        },
        handleFocus: (e: MouseEvent) => {
          ctx.emit('focus', e)
        }
      }

      const inputType = computed(() => {
        if (state.stateShowPassword) {
          return 'password'
        } else {
          return props.type
        }
      })

      const isShowSuffix = computed(() => {
        return props.showPassword || props.clearable
      })

      return {
        ...methods,
        ...toRefs(state),
        inputType,
        isShowSuffix
      }
    }
  })
</script>

<style scoped lang="less">
  .an-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    height: 40px;

    .inner {
      -webkit-appearance: none;
      background-color: white;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: inherit;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      &:focus {
        outline: none;
        border-color: #409eff;
      }

      &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }

    .an-placeholder {
      position: absolute;
      top: 50%;
      left: 18px;
      z-index: 2;
      color: #999;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      transform: translateY(-50%);
      &.is-disabled {
        cursor: not-allowed;
      }
    }
  }

  .an-input--suffix {
    .inner {
      padding-right: 30px;
    }

    .an-input__suffix {
      position: absolute;
      height: 100%;
      right: 10px;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i {
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645, .045, .355, 1);
      }

      .an-icon-outlined_close {
        display: none;
      }
    }


  }
</style>
