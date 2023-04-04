<template>
    <h1>组合式API</h1>
    <p>{{msg}}</p>
    <p>{{count}}</p>
    <button @click="count++">click me</button>
    <p>{{stu.name}}----{{stu.age}}----{{stu.gender}}</p>
</template>

<script>
import { reactive } from 'vue'
export default {
    name: "App",
    setup() {
        let msg = "Today is a nice day"
        let count = 0

        const stu = reactive({
            name: "tom",
            age: 500,
            gender: "male"
        })

        return {
            msg,
            count,
            stu,
        }
    }
}
</script>

<style scoped>

</style>
