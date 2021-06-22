import AnInput from './src/main.vue'

AnInput.install = function (Vue: any) {
  Vue.component(AnInput.name, AnInput)
}

export default AnInput
