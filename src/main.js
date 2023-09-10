import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import WOW from 'wow.js/dist/wow.min.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
new WOW().init();

app.mount('#app')
