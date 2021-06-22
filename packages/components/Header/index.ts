import AnHeader from './src/main.vue'

AnHeader.install = function (Vue: any) {
  Vue.component(AnHeader.name, AnHeader)
}

export default AnHeader
