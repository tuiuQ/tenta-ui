import { createApp } from 'vue'
import App from './App.vue'
import TentaUI from '../packages'

const app = createApp(App)

app.use(TentaUI)
app.mount('#app')
