<template>
    <h3>{{ msg }}</h3>
    <button  @click="changeMsgHandler">点我一下</button>
    <p>{{obj.name}}</p>
    <p>{{obj2.name.value}}</p>
    <hr>
    <p>{{obj.age + 1}}</p>
    <p>{{obj2.age + 1}}</p>
    <p>{{ newMsg }}</p>
</template>

<script setup>
import {ref, reactive, computed} from "vue";

const msg = ref("Hello Vue")

// obj.value.name
const obj = ref({
    name: "Tom",
    age: 18,
})

// obj2.name.value
const obj2 = ({
    name: ref("Tom"),
    age: ref(18),
})

const changeMsgHandler = () => {
    // 修改ref对象时，必须通过value
    msg.value = "haha"
}

const newMsg = computed(() => {
    return msg.value + ", how do you do?"
})

</script>
