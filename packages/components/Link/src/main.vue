<template>
  <a
    class="an-link"
    :class="[
      `${type === '' ? '' : 'an-link--' + type}`,
      {
        'is-underline': disabled ? false : underline,
        'is-disabled': disabled
      }
    ]"
    :href="disabled ? null : href"
    :target="disabled ? false : target"
    ref="link"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <span class="an-link--inner">
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { ComponentInternalInstance } from "@vue/runtime-core";


export default defineComponent({
  name: "an-link",
  props: {
    type: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    const instance = getCurrentInstance() as ComponentInternalInstance
    const methods = {
      handleClick: (e: MouseEvent) => {
        console.log(e);
      }
    }
    return {
      ...methods
    }
  }
})
</script>

<style scoped lang="less">
@import "../../../assets/styles/components/link";
</style>
