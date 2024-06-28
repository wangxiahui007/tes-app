import { createApp } from 'vue'
import './style.css'
import naive from 'naive-ui'
import App from './App.vue'

const app = createApp(App)
app.use(naive) //全局引入naiveui
app.mount('#app')
