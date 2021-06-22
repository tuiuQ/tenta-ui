import AnSwitch from './src/main.vue'

AnSwitch.install = function (Vue: any) {
  Vue.component(AnSwitch.name, AnSwitch)
}

export default AnSwitch
