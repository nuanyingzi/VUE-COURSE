<template>
    <p>{{msg}}</p>
    <button @click="changeMsg">click me, you can get the answer</button>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <p>{{stu.name}}--{{stu.age}}--{{stu.gender}}</p>
    <h3>{{comment}}</h3>
    <h3>{{getInfo()}}</h3>
    <button @click="updateAge">修改年龄</button>
    <hr/>
    <h3>{{name}}</h3>
    <p>{{hello}}</p>
    <p>{{ sum(45, 2) }}</p>
    <hr>
    <p>{{arr[0]}}---{{arr[1]}}---{{arr[2]}}</p>
</template>

<script>
import MyButton from "./components/MyButton.vue"
import { shallowReactive } from "vue"
export default {
    data() {
        return {
            msg: "Is life always this hard,or is it just when you are a kid?",
            stu: {
                name: "Tom",
                age: 20,
                gender: "man",
            },
            hello: null,
            firstName: "苏",
            lastName: "武",
            arr: ["罗恩","赫敏","哈利"]
        }

       /* return shallowReactive({    // 浅层的响应式对象，不能修改深层属性
            msg: "Is life always this hard,or is it just when you are a kid?",
            stu: {
                name: "Tom",
                age: 500,
                gender: "man",
            }
        })*/
    },

    // 用来指定实例对象中的方法
    methods: {
        test() {
            alert("哈哈哈")
        },
        sum(a, b) {
            return a + b
        },
        // 修改msg
        changeMsg() {
            this.msg = "Yes, always!"
        },
        // 修改年龄
        updateAge() {
            if (this.stu.age >= 18) {
                this.stu.age--
            } else {
                this.stu.age++
            }
        },
        getInfo() {
            console.log("getInfo()调用了！")
            if (this.stu.age >= 18) {
                return "You're a adult"
            } else {
                return "You're a child"
            }
        }
    },

    /**
     *  computed用来计算属性
     **/
    computed: {
        comment() {
            console.log("--------comment调用了！")
            if (this.stu.age >= 18) {
                return "You're a adult"
            } else {
                return "You're a child"
            }
        },
        // 计算属性的简写（只有getter时）
        /*name() {
            return this.firstName + this.lastName
        }*/
        name: {
            get() {
                return this.firstName + this.lastName
            },
            set(value) {
                this.firstName = value[0]
                this.lastName = value.slice(1)
            }
        }
    },

    components: {
        MyButton
    }
}
</script>
