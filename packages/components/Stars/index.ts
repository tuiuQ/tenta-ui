import AnStars from './src/index.vue'
import type { App } from 'vue'

AnStars.install = (app: App): void => {
  app.component(AnStars.name, AnStars)
}

export default AnStars