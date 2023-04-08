<template>
    <h2>响应式代理</h2>
    <button @click="fn">{{count}}</button>
</template>

<script setup>
import {reactive, ref} from "vue";
/*
*  reactive()
*   -- 返回一个对象的响应式代理
*/
const stu = reactive({
    name: "Tom",
    age: 18,
    gender: "male"
})

// 在模板中，ref对象会自动解包
let count = ref(0) // 生成一个0的响应式代理

function fn() {
    count.value++
}
</script>

<style scoped>

</style>
