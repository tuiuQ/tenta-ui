import AnCarouselItem from './src/main.vue'

AnCarouselItem.install = function (Vue: any) {
  Vue.component(AnCarouselItem.name, AnCarouselItem)
}

export default AnCarouselItem
