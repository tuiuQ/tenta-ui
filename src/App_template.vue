<template>
  <div class="container">
    <div class="title">按钮</div>
    <ButtonGroup></ButtonGroup>
<!--    <div class="title">走马灯</div>-->
<!--    <Carousel></Carousel>-->
    <div class="title">多选框</div>
    <Checkbox></Checkbox>
    <div class="title">Dialog</div>
    <Dialog></Dialog>
    <div class="title">分割线</div>
    <an-divider text="分割线" orientation="left"></an-divider>
    <an-divider text="分割线"></an-divider>
    <an-divider text="分割线" orientation="right"></an-divider>
    <div class="title">放大镜</div>
    <Magnifier></Magnifier>
<!--    <div class="title">Modal</div>-->
<!--    <Modal></Modal>-->
    <div class="title">Radio</div>
    <Radio></Radio>
    <div class="title">Selector</div>
    <Selector></Selector>
    <div class="title">Stars</div>
    <Stars></Stars>
    <div class="title">Switch</div>
    <Switch></Switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import ButtonGroup  from './components/ButtonGroup.vue'
import Carousel from './components/Carousel.vue'
import Checkbox from './components/Checkbox.vue'
import Dialog from './components/Dialog.vue'
import Magnifier from './components/Magnifier.vue'
import Modal from './components/Modal.vue'
import Radio from './components/Radio.vue'
import Selector from './components/Selector.vue'
import Stars from './components/Stars.vue'
import Switch from './components/Switch.vue'

export default defineComponent({
  name: 'App',
  components: {
    ButtonGroup,
    Carousel,
    Checkbox,
    Dialog,
    Magnifier,
    Modal,
    Radio,
    Selector,
    Stars,
    Switch
  },
  setup() {

    const state = reactive({
      model: {}
    })

    const methods = {

    }
    return {
      ...methods,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less">
  .wrapper {
    border: .5px solid #ddd;
    padding: 10px;
  }
  .row {
    margin: 20px 0;
    .te-button {
      margin: 0 10px;
    }
  }

  .container {
    width: 1080px;
    margin: 150px auto;
    .title {
      margin: 5px 0;
    }
  }
</style>
