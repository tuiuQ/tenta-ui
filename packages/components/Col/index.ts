import AnCol from './src/main.vue'

AnCol.install = function (Vue: any) {
  Vue.component(AnCol.name, AnCol)
}

export default AnCol
