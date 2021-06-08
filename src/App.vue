<template>
  <div class="container">
    <an-row type="flex" justify="center">
      <an-col :span="8">
        <an-input-number
          v-model="value"
        ></an-input-number>
      </an-col>
    </an-row>
    {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {

    const state = reactive({
      model: {},
      value: 2
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
* {
  margin: 0;
  padding: 0;
}
  //.wrapper {
  //  border: .5px solid #ddd;
  //  padding: 10px;
  //}
  //.row {
  //  margin: 20px 0;
  //  .te-button {
  //    margin: 0 10px;
  //  }
  //}
  //
  //.container {
  //  width: 1080px;
  //  margin: 150px auto;
  //  .title {
  //    margin: 5px 0;
  //  }
  //}

  .container {
    width: 100%;
    margin: 150px auto;
    .an-row {
      .an-col {
        margin-bottom: 20px;
        .content {
          height: 38px;
          background: gray;
          border-radius: 4px;
        }
      }
    }
  }
</style>
