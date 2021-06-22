import AnButtonGroup from '../Button/src/button-group.vue'

AnButtonGroup.install = function (Vue: any) {
  Vue.component(AnButtonGroup.name, AnButtonGroup)
}

export default AnButtonGroup
