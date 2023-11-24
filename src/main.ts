import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import { createPinia } from 'pinia'
import 'vue-final-modal/style.css'




import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const vfm = createVfm()
app.use(vfm).mount('#app')
