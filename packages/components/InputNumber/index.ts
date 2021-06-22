import AnInputNumber from './src/main.vue'

AnInputNumber.install = function (Vue: any) {
  Vue.component(AnInputNumber.name, AnInputNumber)
}

export default AnInputNumber
