<template>
    <h1>{{count}}---{{msg}}</h1>
    <button @click="fn">haha</button>
    <p>{{stu.name}}</p>
</template>

<script setup>
import {reactive} from "vue";
const msg = "I like VUE"
const count = 0

const stu = reactive({
    name: "Tom"
})


function fn() {
    alert("dasa")
}

</script>

<style scoped>

</style>
