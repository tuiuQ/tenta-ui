import AnCarouselDirector from './src/main.vue'

AnCarouselDirector.install = function (Vue: any) {
  Vue.component(AnCarouselDirector.name, AnCarouselDirector)
}

export default AnCarouselDirector
