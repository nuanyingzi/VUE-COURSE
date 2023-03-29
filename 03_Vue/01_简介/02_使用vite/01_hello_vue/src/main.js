// 引入vue
import {createApp} from "vue/dist/vue.esm-bundler.js"

// 创建一个根组件
const App = {
    data () {
        return {
            message: "我爱vue"
        }
    },
    template: "<p>{{message}}</p>",
}

createApp(App).mount("#app")