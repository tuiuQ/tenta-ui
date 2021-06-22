import AnForm from './src/index.vue'
import type { App } from 'vue'

AnForm.install = (app: App): void => {
  app.component(AnForm.name, AnForm)
}

export default AnForm