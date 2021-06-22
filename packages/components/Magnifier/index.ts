import AnMagnifier from './src/index.vue'
import type { App } from 'vue'

AnMagnifier.install = (app: App): void => {
  app.component(AnMagnifier.name, AnMagnifier)
}

export default AnMagnifier