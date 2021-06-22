import AnSlide from './src/main.vue'

AnSlide.install = function (Vue: any) {
  Vue.component(AnSlide.name, AnSlide)
}

export default AnSlide
