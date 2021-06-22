import AnAlert from './src/main.vue'

AnAlert.install = function (Vue: any) {
  Vue.component(AnAlert.name, AnAlert)
}

export default AnAlert
