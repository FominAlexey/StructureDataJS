import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"


createApp(App)
    .use(router)
    .mount('#app')
