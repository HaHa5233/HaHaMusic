import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入tailwindcss
import './assets/css/taildwindcss.css'
// 引入element-plus样式
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
