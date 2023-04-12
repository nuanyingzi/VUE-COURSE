<template>
    <h1>vue</h1>
    <img :src="imagePath" alt="sonw" class="tutu" :[attrName] = "attrValue">
    <button @click="changeImp">click</button>
    <div :="attrs"></div>
    <input type="text" value="已禁用" :disabled="isDisabled">
</template>

<script setup>
    import {ref} from "vue";

    const imagePath = ref("/images/snow.jpeg")

    const changeImp = () => {
        if (imagePath.value == "/images/butterfly.jpg") {
            imagePath.value = "/images/snow.jpeg"
        } else {
            imagePath.value = "/images/butterfly.jpg"
        }
    }

    const attrs = {
        id: "box1",
        class: "hello",
    }

    const isDisabled = true

    const attrName = "title"
    const attrValue = "这是一个title"
</script>

<style scoped>
    .tutu {
        width: 800px;
        height: 500px;
    }
</style>
