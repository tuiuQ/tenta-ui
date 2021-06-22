import AnCarousel from './src/main.vue'

AnCarousel.install = function (Vue: any) {
  Vue.component(AnCarousel.name, AnCarousel)
}

export default AnCarousel
