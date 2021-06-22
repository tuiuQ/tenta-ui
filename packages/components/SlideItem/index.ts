import AnSlideItem from './src/main.vue'

AnSlideItem.install = function (Vue: any) {
  Vue.component(AnSlideItem.name, AnSlideItem)
}

export default AnSlideItem
