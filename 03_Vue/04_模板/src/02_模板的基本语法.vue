<template>

    <h1>{{ msg }}</h1>
    <p>{{ new Date() }}</p>
    <p>{{ hello }}</p>
<!--    <p>{{ alert("123") }}</p>-->
    <h3>{{"Hello"+" vue"}}</h3>
    <div v-text="html"></div>
    <div v-html="html"></div>
</template>

<script setup>
const msg = "Hello Vue"
const html = "<h2>我是一段HTML代码</h2>"
</script>

<style scoped>

</style>
