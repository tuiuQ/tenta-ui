import AnDivider from './src/main.vue'

AnDivider.install = function (Vue: any) {
  Vue.component(AnDivider.name, AnDivider)
}

export default AnDivider
