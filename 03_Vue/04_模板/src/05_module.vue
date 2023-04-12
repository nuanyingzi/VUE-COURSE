<template>
    <div class="app">
        <h1>今天天气真不错</h1>
        <div class="box1">App中的box1</div>
        <MyBox></MyBox>
    </div>
</template>

<script setup>
    import MyBox from "./components/MyBox.vue";
</script>

<style module>
    .box1 {
        background-color: #bbffaa;
    }
</style>
