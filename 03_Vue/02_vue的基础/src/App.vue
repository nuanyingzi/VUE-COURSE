<template>
    <h1>{{msg}}</h1>
    <h2>{{name}}</h2>
</template>

<script>
    export default {
        data() {
            this.name = "忽视"
            return {
                msg: "Is life always this hard,or is it just when you are a kid?"
            }
        }
    }
</script>