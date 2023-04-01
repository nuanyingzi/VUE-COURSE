// 引入子组件
import MyButton from "./MyButton"

// 创建根组件
export default {
    data() {
        return {
            msg: "河山大好",
            count: 0,
        }
    },
    // 注册子组件
    components: {
        "my-button": MyButton,
    },
    template: `
      <h1>{{msg}}</h1>
      <my-button></my-button>
    `,
}