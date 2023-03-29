// 创建根组件
export default {
    data() {
        return {
            msg: "河山大好",
            count: 0,
        }
    },
    template: `
      <h1>{{msg}}</h1>
      <button @click="count++">点我一下</button>--{{count}}
    `,
}