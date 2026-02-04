import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css'
import DA from './locales/da.json'
import EN from './locales/en.json'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: document.cookie.split('=')[1],
    messages: {
        DA: DA,
        EN: EN 
    }
})

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(i18n)

app.mount('#app')
