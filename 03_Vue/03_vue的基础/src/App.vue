<template>
    <p>{{msg}}</p>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <p>{{stu.name}}--{{stu.age}}--{{stu.gender}}</p>
    <hr/>
    <p>{{hello}}</p>
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
                age: 500,
                gender: "man",
            },
            hello: null,
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
    components: {
        MyButton
    }
}
</script>