<template>
  <div
    class="modal-mask"
    v-show="modalShow"
  >

    <div
      class="ui-modal"
      :style="{
        width: width + 'px',
        borderRadius: borderRadius + 'px',
        top: position === 'center' ? '50%' : '50px',
        transform: position === 'center' ? 'translate(-50%, -50%)' : ''
      }"
    >
      <header
        class="header"
        :style="{
          color: headerTextColor,
          backgroundColor: headerBackgroundColor
        }"
      >
        <h1>{{ headerText }}</h1>
        <a
          href="javascript:void(0)"
          @click="cancel"
        >
<!--          &times;-->
          <span class="te-icon-outlined_close"></span>
        </a>
      </header>
      <article class="content">
        <p
          :style="{
            color: contentTextColor
          }"
        >{{ contentText }}</p>
      </article>
      <div
        class="btn-group"
        v-if="btnGroupShow"
      >
        <te-button
          type="primary"
          class="btn"
          @click="confirm"
        >{{ confirmText }}</te-button>
        <te-button
          type="info"
          class="btn"
          @click="cancel"
        >{{ cancelText }}</te-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'te-modal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 300
    },
    borderRadius: {
      type: Number,
      default: 0
    },
    headerBackgroundColor: {
      type: String,
      default: "#fff"
    },
    headerText: {
      type: String,
      default: 'this is a super modal'
    },
    headerTextColor: {
      type: String,
      default: "#000"
    },
    contentText: {
      type: String,
      default: ""
    },
    contentTextColor: {
      type: String,
      default: "#000"
    },
    position: {
      type: String,
      default: "top"
    },
    btnGroupShow: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    }
  },

  setup(props, ctx) {

    const state = reactive({
      modalShow: props.show
    })
    const confirm = () => {
      state.modalShow = false
      ctx.emit('confirm')
    }

    const cancel = () => {
      state.modalShow = false
      ctx.emit('close')
    }
    return {
      confirm,
      cancel,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);

    a {
      text-decoration: none;
      outline: none;
      color: inherit;
    }

    h1, p {
      font-weight: normal;
      margin: 0;
    }

    button {
      outline: none;
      border: none;
    }

    .ui-modal {
      position: fixed;
      left: 50%;
      background-color: white;
      overflow: hidden;
      box-shadow: 1px 2px 3px #333;
      transform: translateX(-50%);
      .header {
        height: 44px;
        padding: 0 15px;
        box-sizing: border-box;

        h1 {
          display: inline-block;
          font-size: 18px;
          line-height: 44px;
        }

        a {
          float: right;
          font-size: 20px;
          margin-top: 6px;
        }
      }
      .content {
        padding: 15px;
        box-sizing: border-box;
      }

      .btn-group {
        height: 30px;
        padding: 10px 15px;
        border-top: 1px solid #ddd;
        .btn {
          float: right;
          min-width: 80px;
          height: 30px;
          font-size: 14px;
          border-radius: 3px;
          cursor: pointer;
          margin: 0 8px;

          &.btn-confirm {
            color: white;
            margin-left: 15px;
          }

          &.btn-cancel {
            color: #666;
            background-color: #ddd;
          }
        }
      }
    }
  }
</style>
