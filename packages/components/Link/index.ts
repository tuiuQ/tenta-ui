import AnLink from './src/main.vue'

AnLink.install = function (Vue: any) {
  Vue.component(AnLink.name, AnLink)
}

export default AnLink
