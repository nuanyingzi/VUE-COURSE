<template>
    <h1>今天天气真不错</h1>
    <div class="box1"></div>
    <MyBox></MyBox>
</template>

<script setup>
    import MyBox from "@/components/MyBox.vue";



</script>

<style scoped>
    h1 {
        background-color: #bfa;
    }
    .box1 {
        width: 200px;
        height: 200px;
        background-color: yellowgreen;
    }
    :golobal(div) {
        border: 1px solid red;
    }
</style>
