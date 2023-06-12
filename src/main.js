import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './msg/index'

const app = createApp(App)

app.use(router)

//다국어
app.use(i18n)

app.mount('#app')
