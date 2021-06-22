import AnDemo from './src/main.vue'

AnDemo.install = function (Vue: any) {
  Vue.component(AnDemo.name, AnDemo)
}

export default AnDemo
