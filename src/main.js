import './assets/style.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(Toast)
app.use(pinia)
app.mount('#app')
