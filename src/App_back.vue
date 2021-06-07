<template>
  <div class="wrapper">
<!--    <te-magnifier-->
<!--      :link="link"-->
<!--      :blank="blank"-->
<!--      :imgUrl="imgUrl"-->
<!--      :imgWidth="imgWidth"-->
<!--      :imgHeight="imgHeight"-->
<!--      :magWidth="magWidth"-->
<!--      :magHeight="magHeight"-->
<!--    />-->

<!--    <te-stars-->
<!--      :num="4"-->
<!--      :size="30"-->
<!--      @getStarNum="getStarNum"-->
<!--    />-->

<!--    <te-modal-->
<!--      :show="true"-->
<!--      :width="300"-->
<!--      :borderRadius="10"-->
<!--      headerBackgroundColor="#007bff"-->
<!--      headerText="this is a super modal"-->
<!--      headerTextColor="#fff"-->
<!--      contentText="this is a super modalthis is a super modalthis is a super modalthis is a super modalthis is a super modalthis is a super modal"-->
<!--      contentTextColor="#333"-->
<!--      position="center"-->
<!--      :btnGroupShow="true"-->
<!--      confirmText="是"-->
<!--      cancelText="否"-->
<!--      @confirm="modalConfirm"-->
<!--      @close="modalClose"-->
<!--    />-->

<!--    <div class="row">-->
<!--      <te-button>Default</te-button>-->
<!--      <te-button type="primary">Primary</te-button>-->
<!--      <te-button type="dashed">Dashed</te-button>-->
<!--      <te-button type="success">Success</te-button>-->
<!--      <te-button type="info">Info</te-button>-->
<!--      <te-button type="warning">Warning</te-button>-->
<!--      <te-button type="danger">Danger</te-button>-->
<!--      <te-button type="text">Text</te-button>-->
<!--    </div>-->
<!--    <div class="row">-->
<!--      <te-button round>Default</te-button>-->
<!--      <te-button round type="primary">Primary</te-button>-->
<!--      <te-button round type="dashed">Dashed</te-button>-->
<!--      <te-button round type="success">Success</te-button>-->
<!--      <te-button round type="info">Info</te-button>-->
<!--      <te-button round type="warning">Warning</te-button>-->
<!--      <te-button round type="danger">Danger</te-button>-->
<!--    </div>-->
<!--    <div class="row">-->
<!--      <te-button size="small">Default</te-button>-->
<!--      <te-button size="small" type="primary">Primary</te-button>-->
<!--      <te-button size="small" type="dashed">Dashed</te-button>-->
<!--      <te-button size="small" type="success">Success</te-button>-->
<!--      <te-button size="small" type="info">Info</te-button>-->
<!--      <te-button size="small" type="warning">Warning</te-button>-->
<!--      <te-button size="small" type="danger">Danger</te-button>-->
<!--    </div>-->
<!--    <div class="row">-->
<!--      <te-button size="large">Default</te-button>-->
<!--      <te-button size="large" type="primary">Primary</te-button>-->
<!--      <te-button size="large" type="dashed">Dashed</te-button>-->
<!--      <te-button size="large" type="success">Success</te-button>-->
<!--      <te-button size="large" type="info">Info</te-button>-->
<!--      <te-button size="large" type="warning">Warning</te-button>-->
<!--      <te-button size="large" type="danger">Danger</te-button>-->
<!--    </div>-->
<!--    <div class="row">-->
<!--      <te-button circle>D</te-button>-->
<!--      <te-button circle type="primary">D</te-button>-->
<!--      <te-button circle type="dashed">D</te-button>-->
<!--      <te-button circle type="success">D</te-button>-->
<!--      <te-button circle type="info">D</te-button>-->
<!--      <te-button circle type="warning">D</te-button>-->
<!--      <te-button circle type="danger">D</te-button>-->
<!--    </div>-->
<!--    <div class="row">-->
<!--      <te-button disable>Default</te-button>-->
<!--      <te-button disable type="primary">Primary</te-button>-->
<!--      <te-button disable type="dashed">Dashed</te-button>-->
<!--      <te-button disable type="success">Success</te-button>-->
<!--      <te-button disable type="info">Info</te-button>-->
<!--      <te-button disable type="warning">Warning</te-button>-->
<!--      <te-button disable type="danger">Danger</te-button>-->
<!--      <te-button disable type="text">Text</te-button>-->
<!--    </div>-->
<!--    <div class="row">-->
<!--      <te-button size="large" block>Default</te-button>-->
<!--      <te-button size="large" block type="primary">Primary</te-button>-->
<!--      <te-button size="large" block type="dashed">Dashed</te-button>-->
<!--      <te-button size="large" block type="success">Success</te-button>-->
<!--      <te-button size="large" block type="info">Info</te-button>-->
<!--      <te-button size="large" block type="warning">Warning</te-button>-->
<!--      <te-button @click="test" size="large" block type="danger">Danger</te-button>-->
<!--    </div>-->

<!--    <te-button type="success" icon="apple" theme="outlined" @click="setClick">按钮</te-button>-->
<!--    <te-demo @click="setClick"></te-demo>-->
<!--    <te-divider-->
<!--      text="分割线"-->
<!--      type="horizontal"-->
<!--      orientation="right"-->
<!--      plain-->
<!--      dashed-->
<!--    ></te-divider>-->


<!--    App-->
<!--    <te-divider type="vertical"></te-divider>-->
<!--    Divider-->


<!--    <te-selector></te-selector>-->
<!--    <div class="container">-->
<!--      <te-carousel-->
<!--        :autoplay="true"-->
<!--        :duration="3000"-->
<!--        :initial="0"-->
<!--        :hasDot="true"-->
<!--        :hasDirector="false"-->
<!--      >-->
<!--        <te-carousel-item-->
<!--          v-for="(item, index) in CarouselData"-->
<!--          :key="index"-->
<!--        >-->
<!--          <img :src="require(`./assets/images/${item.src}`)" :alt="item.name" />-->
<!--        </te-carousel-item>-->
<!--      </te-carousel>-->
<!--    </div>-->

<!--    <te-button @click="open">按钮</te-button>-->

<!--    <te-dialog-->
<!--      content="这是一段信息"-->
<!--      title="温馨提示"-->
<!--      width="60%"-->
<!--      :visible="visible"-->
<!--      @close="close"-->
<!--    >-->
<!--      <template v-slot:title>-->
<!--        <h3 style="color: red">我是标题</h3>-->
<!--      </template>-->
<!--      <ul>-->
<!--        <li>1</li>-->
<!--        <li>2</li>-->
<!--        <li>3</li>-->
<!--      </ul>-->

<!--      <template v-slot:footer>-->
<!--        <te-button @click="visible = false">取消</te-button>-->
<!--        <te-button type="primary">确定</te-button>-->
<!--      </template>-->
<!--    </te-dialog>-->
<!--    <div class="container">-->
<!--      <te-selector-->
<!--        placeholder="请选择框架"-->
<!--        @setItemValue="setItemValue"-->
<!--        :data="SelectorData"-->
<!--      ></te-selector>-->
<!--    </div>-->

<!--    <te-stars-->
<!--      :num="0"-->
<!--      size="40"-->
<!--    ></te-stars>-->
<!--    <div class="container">-->
<!--      <te-input-->
<!--        placeholder="请输入用户名"-->
<!--        type="password"-->
<!--        name="username"-->
<!--        disabled-->
<!--      ></te-input>-->

<!--      <te-input-->
<!--        placeholder="请输入用户名"-->
<!--        v-model="username"-->
<!--        disabled-->
<!--      ></te-input>-->
<!--      <te-input-->
<!--        placeholder="请输入用户名"-->
<!--        v-model="username"-->
<!--        clearable-->
<!--      ></te-input>-->
<!--      <te-input-->
<!--        placeholder="请输入用户名"-->
<!--        v-model="username"-->
<!--        show-password-->
<!--      ></te-input>-->
<!--      <span>{{ username }}</span>-->

<!--      <te-switch-->
<!--        v-model="active"-->
<!--        activeColor="red"-->
<!--        inactiveColor="blue"-->
<!--      ></te-switch>-->

<!--      <te-radio-group v-model="gender">-->
<!--        <te-radio-->
<!--          label="1"-->
<!--        >man</te-radio>-->
<!--        <te-radio-->
<!--          label="2"-->
<!--        >woman</te-radio>-->
<!--      </te-radio-group>-->
<!--      {{ gender }}-->
<!--      {{ active }}-->

<!--      <te-checkbox-->
<!--        v-model="active"-->
<!--      >-->
<!--        App-->
<!--      </te-checkbox>-->

<!--      <te-checkbox-group v-model="result">-->
<!--        <template-->
<!--          v-for="(item, i) in hobby"-->
<!--          :key="i"-->
<!--        >-->
<!--          <te-checkbox :label="item"></te-checkbox>-->
<!--        </template>-->

<!--      </te-checkbox-group>-->

<!--      {{ active }}-->
<!--    </div>-->


    <te-selector
      placeholder="请选择框架"
      :data="SelectorData"
    ></te-selector>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import CarouselData from '@/data/carousel'
import SelectorData from '@/data/selector'

export default defineComponent({
  name: 'App',
  setup() {

    const state = reactive({
      visible: false,
      placeholder: '请输入',
      username: 'zs',
      active: true,
      gender: '1',
      hobby: ['抽烟', '喝酒', '烫头'],
      result: []
    })

    const methods = {
      open: (): void => {
        state.visible = true
      },
      close: (visible: boolean): void => {
        state.visible = visible
      },
      setItemValue: (value: string) => {
        console.log(value);
      }
    }
    return {
      CarouselData,
      SelectorData,
      ...methods,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less">
  //.wrapper {
  //  width: 375px;
  //  margin: 100px auto;
  //}
  //.row {
  //  margin: 20px 0;
  //  .te-button {
  //    margin: 0 10px;
  //  }
  //}

  .container {
    width: 1080px;
    height: 420px;
    margin: 150px auto;
  }
</style>
