import AnMain from './src/main.vue'

AnMain.install = function (Vue: any) {
  Vue.component(AnMain.name, AnMain)
}

export default AnMain
