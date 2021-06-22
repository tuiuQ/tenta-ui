import AnAside from './src/main.vue'

AnAside.install = function (Vue: any) {
  Vue.component(AnAside.name, AnAside)
}

export default AnAside
