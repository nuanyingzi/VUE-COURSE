<template>
    <div>
        <h2>我是子组件 MyBox {{a}}</h2>
    </div>
</template>

<script setup>
    import {ref} from "vue";

    const props = defineProps(["a"])

    console.log(props)
</script>

<style scoped>
    div {
        color: tomato;
    }
</style>
