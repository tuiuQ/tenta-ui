import AnRadio from './src/main.vue'
import Vue from 'vue'

AnRadio.install = function (Vue: any) {
  Vue.component(AnRadio.name, AnRadio)
}

export default AnRadio
