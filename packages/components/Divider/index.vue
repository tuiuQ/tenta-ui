<template>
  <div
    class="te-divider"
    :class="[
      `te-divider--${type}`,
      'te-divider--with-text',
      orientation === 'center' ? '' : `te-divider--with-text-${orientation}`,
      {
        'te-divider--dashed': dashed
      }
    ]"
  >
    <span v-if="text" class="te-divider--inner-text">{{ text }}</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'te-divider',
  props: {
    text: {
      type: String
    },
    type: {
      type: String,
      default: 'horizontal'
    },
    orientation: {
      type: String,
      default: 'center'
    },
    dashed: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped lang="less">
  .te-divider {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    border-top: 1px solid rgba(0, 0, 0, .06);

    &.te-divider--horizontal {
      display: flex;
      clear: both;
      width: 100%;
      min-width: 100%;
      margin: 24px 0;
      &.te-divider--with-text {
        display: flex;
        margin: 16px 0;
        color: rgba(0, 0, 0, .85);
        font-weight: 500;
        font-size: 16px;
        white-space: nowrap;
        text-align: center;
        border-top: 0;
        border-top-color: rgba(0, 0, 0, .06);
        &:before {
          position: relative;
          top: 50%;
          width: 50%;
          border-top: 1px solid transparent;
          border-top-color: inherit;
          border-bottom: 0;
          transform: translateY(50%);
          content: "";
        }
        &:after {
          position: relative;
          top: 50%;
          width: 50%;
          border-top: 1px solid transparent;
          border-top-color: inherit;
          border-bottom: 0;
          transform: translateY(50%);
          content: "";
        }
      }
      &.te-divider--with-text-right:before {
        top: 50%;
        width: 95%;
      }
      &.te-divider--with-text-right:after {
        top: 50%;
        width: 5%;
      }
      &.te-divider--with-text-left:before {
        top: 50%;
        width: 5%;
      }
      &.te-divider--with-text-left:after {
         top: 50%;
         width: 95%;
       }
    }
    &.te-divider--vertical {
      position: relative;
      top: -.06em;
      display: inline-block;
      height: .9em;
      margin: 0 8px;
      vertical-align: middle;
      border-top: 0;
      border-left: 1px solid rgba(0, 0, 0, .06);
    }
    .te-divider--inner-text {
      display: inline-block;
      padding: 0 1em;
    }

    &.te-divider--dashed {
      background: none;
      border: dashed rgba(0, 0, 0, .06);
      border-width: 1px 0 0;
      &:before {
        border-style: dashed none none;
      }
      &:after {
        border-style: dashed none none;
      }
    }
  }
</style>
