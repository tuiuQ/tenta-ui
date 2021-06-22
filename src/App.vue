<template>
  <an-row>
    <an-col :sm="5" :md="12">
      <div class="content"></div>
    </an-col>
    <an-col :sm="19" :md="12">
      <div class="content"></div>
    </an-col>
  </an-row>
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
    
  }

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

</style>
