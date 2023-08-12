import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入tailwindcss
import './assets/css/taildwindcss.css'
// 引入element-plus和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')
