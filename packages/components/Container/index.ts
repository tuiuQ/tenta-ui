import AnContainer from './src/main.vue'

AnContainer.install = function (Vue: any) {
  Vue.component(AnContainer.name, AnContainer)
}

export default AnContainer
