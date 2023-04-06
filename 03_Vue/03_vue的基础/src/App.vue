<template>
    <h1>{{count}}---{{msg}}</h1>
    <button @click="fn">haha</button>
</template>

<script setup>

const msg = "I like VUE"
const count = 0

function fn() {
    alert("dasa")
}

</script>

<style scoped>

</style>
