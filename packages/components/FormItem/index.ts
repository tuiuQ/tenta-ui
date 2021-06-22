import AnFormItem from './src/index.vue'
import type { App } from 'vue'

AnFormItem.install = (app: App): void => {
  app.component(AnFormItem.name, AnFormItem)
}

export default AnFormItem