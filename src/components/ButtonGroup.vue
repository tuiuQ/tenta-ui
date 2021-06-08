<template>
  <div class="wrapper">
    <div class="row">
      <div class="title">
        基础
      </div>
      <an-button>Default</an-button>
      <an-button type="primary">Primary</an-button>
      <an-button type="dashed">Dashed</an-button>
      <an-button type="success">Success</an-button>
      <an-button type="info">Info</an-button>
      <an-button type="warning">Warning</an-button>
      <an-button type="danger">Danger</an-button>
      <an-button type="text">Text</an-button>
    </div>
    <div class="row">
      <div class="title">
        round
      </div>
      <an-button round>Default</an-button>
      <an-button round type="primary">Primary</an-button>
      <an-button round type="dashed">Dashed</an-button>
      <an-button round type="success">Success</an-button>
      <an-button round type="info">Info</an-button>
      <an-button round type="warning">Warning</an-button>
      <an-button round type="danger">Danger</an-button>
    </div>
    <div class="row">
      <div class="title">
        large
      </div>
      <an-button size="large">Default</an-button>
      <an-button size="large" type="primary">Primary</an-button>
      <an-button size="large" type="dashed">Dashed</an-button>
      <an-button size="large" type="success">Success</an-button>
      <an-button size="large" type="info">Info</an-button>
      <an-button size="large" type="warning">Warning</an-button>
      <an-button size="large" type="danger">Danger</an-button>
      <an-button size="large" type="text">Text</an-button>
    </div>
    <div class="row">
      <div class="title">
        small
      </div>
      <an-button size="small">Default</an-button>
      <an-button size="small" type="primary">Primary</an-button>
      <an-button size="small" type="dashed">Dashed</an-button>
      <an-button size="small" type="success">Success</an-button>
      <an-button size="small" type="info">Info</an-button>
      <an-button size="small" type="warning">Warning</an-button>
      <an-button size="small" type="danger">Danger</an-button>
      <an-button size="small" type="text">Text</an-button>
    </div>
    <div class="row">
      <div class="title">
        circle
      </div>
      <an-button circle>
        <span class="an-icon-filled_acoount"></span>
      </an-button>
      <an-button circle type="primary">
        <span class="an-icon-filled_acoount"></span>
      </an-button>
      <an-button circle type="dashed">
        <span class="an-icon-filled_acoount"></span>
      </an-button>
      <an-button circle type="success">
        <span class="an-icon-filled_acoount"></span>
      </an-button>
      <an-button circle type="info">
        <span class="an-icon-filled_acoount"></span>
      </an-button>
      <an-button circle type="warning">
        <span class="an-icon-filled_acoount"></span>
      </an-button>
      <an-button circle type="danger">
        <span class="an-icon-filled_acoount"></span>
      </an-button>
      <an-button circle type="text">
        <span class="an-icon-filled_acoount"></span>
      </an-button>
    </div>
    <div class="row">
      <div class="title">
        disabled
      </div>
      <an-button disable>Default</an-button>
      <an-button disable type="primary">Primary</an-button>
      <an-button disable type="dashed">Dashed</an-button>
      <an-button disable type="success">Success</an-button>
      <an-button disable type="info">Info</an-button>
      <an-button disable type="warning">Warning</an-button>
      <an-button disable type="danger">Danger</an-button>
      <an-button disable type="text">Text</an-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ButtonGroup"
})
</script>

<style scoped lang="less">

.row {
  margin: 20px 0;
  .title {
    width: 100px;
    text-align: left;
    margin: 10px 0;
  }
  .an-button {
    margin: 0 20px;
  }
}
</style>
