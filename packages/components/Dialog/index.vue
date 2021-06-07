<template>

  <transition name="dialog-fade">
    <div
      class="te-dialog__wrapper"
      v-show="visible"
      @click.self="handleClose"
    >
      <div
        class="te-dialog"
        :style="{
        width: width,
        top: top
      }"
      >
        <div class="te-dialog__header">
          <slot name="title">
            <span class="te-dialog__title">{{ title }}</span>
          </slot>
          <te-button
            class="te-dialog__header-btn"
            type="text"
            icon="close"
            theme="outlined"
            @click="handleClose"
          ></te-button>
        </div>
        <div class="te-dialog__body">
          <slot></slot>
        </div>
        <div class="te-dialog__footer">
          <slot name="footer" v-if="$slots.footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'te-dialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: '这是一段信息'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    modal: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup (props, ctx) {

    const handleClose = () => {
      ctx.emit('close', false)
    }

    return {
      handleClose
    }
  }
})
</script>

<style scoped lang="less">
.te-dialog__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, .5);

  .te-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    box-sizing: border-box;
    width: 30%;

    .te-dialog__header {
      padding: 20px 20px 10px;
      .te-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .te-dialog__header-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        font-size: 16px;
      }
    }

    .te-dialog__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      // 深度选择器 scss ::v-deep  less /deep/
      /deep/ .te-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

.dialog-fade-enter-active {
  animation: fade .3s;
}

.dialog-fade-leave-active {
  animation: fade .3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
