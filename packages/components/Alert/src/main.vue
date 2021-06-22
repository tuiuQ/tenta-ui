<template>
  <div
    class="an-alert"
    :class="[
      `an-alert--${type}`,
      `is-${theme}`,
      {
        'is-center': center
      }
    ]"
    v-if="isShow"
  >
    <i
      v-if="showIcon"
      class="an-alert--icon"
      :class="[
        `an-icon-${type}`,
        {
          'is-big': !!description
        }
      ]"
    ></i>
    <div class="an-alert--content">
      <span
        class="an-alert--title"
        :class="{
          'is-bold': description
        }"
      >{{ title }}</span>
      <p
        class="an-alert--description"
        v-if="description"
      >
        {{ description }}
      </p>
      <i
        v-if="closable"
        class="an-alert--close-btn"
        :class="{
          'an-icon-close': !closeText
        }"
        @click="handleClose"
      >
        {{ closeText }}
      </i>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'


export default defineComponent({
  name: 'an-alert',
  props: {
    title: String,
    type: {
      type: String,
      default: 'info'
    },
    theme: {
      type: String,
      default: 'light'
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: String,
    showIcon: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    description: String
  },
  setup (props, ctx) {

    const state = reactive({
      isShow: true
    })
    const methods = {
      handleClose: () => {
        state.isShow = !state.isShow
        ctx.emit('close')
      }
    }

    return {
      ...methods,
      ...toRefs(state)
    }
  }
})
</script>

<style lang='less'>
@import '../../../assets/styles/components/alert';
</style>
