import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入tailwindcss
import './assets/css/taildwindcss.css'
// 引入element-plus样式
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// 引入icon
import '@/assets/icons/iconfont.css'
// 引入animate动画
import 'animate.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')
