import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './msg/index'
import store from './store/store'

import './assets/main.css'

const app = createApp(App)

app.use(router)

//다국어
app.use(i18n)

//store
app.config.globalProperties.$store = store;
app.use(store);

app.mount('#app')
