import { createApp } from 'vue'
import App from './App.vue'

const app= createApp(App)

// 全局属性
// app.config.globalProperties.hello = "我是全局的属性"
// app.config.globalProperties.alert = alert.bind(this)

app.mount('#app')
