import AnSelector from './src/index.vue'
import type { App } from 'vue'

AnSelector.install = (app: App): void => {
  app.component(AnSelector.name, AnSelector)
}

export default AnSelector