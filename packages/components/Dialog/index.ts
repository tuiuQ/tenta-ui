import AnDialog from './src/index.vue'
import type { App } from 'vue'

AnDialog.install = function (app: App): void {
  app.component(AnDialog.name, AnDialog)
}

export default AnDialog