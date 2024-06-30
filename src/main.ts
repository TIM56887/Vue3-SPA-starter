import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from '@/App.vue'
import router from '@/router'
import { zhTw } from 'element-plus/es/locales.mjs'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'

import globalComponet from '@/components'

import '@/styles/index.scss'
const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus, {
  locale: zhTw
})
app.use(globalComponet)
app.use(router)

app.mount('#app')
