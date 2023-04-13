<template>
    <h1>我是App根组件</h1>
    <MyBox a="1"></MyBox>
</template>

<script setup>

    import MyBox from "@/components/MyBox.vue";
    import {ref} from "vue";
    const count = ref(0)

</script>
