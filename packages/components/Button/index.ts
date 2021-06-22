import AnButton from './src/button.vue'

AnButton.install = function (Vue: any) {
  Vue.component(AnButton.name, AnButton)
}

export default AnButton
