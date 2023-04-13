<template>
    <!--  选项卡的外部容器  -->
    <div class="tab-wrapper">
        <!--    选项卡的头部    -->
        <header class="tab-head">
            <!--     定义两个按钮       -->
            <button @click="current = 0" class="tab-button" :class="{active: current === 0}">热门球员</button>
            <button @click="current = 1" class="tab-button" :class="{active: current === 1}">热门球队</button>
        </header>
        <!--   选项卡主体    -->
        <div class="main">
            <div v-show="current === 0">
                <!--       球员         -->
                <div class="tab-list">
                    <TabItem :item="player"></TabItem>
                </div>
            </div>
            <div v-show="current === 1">
                <!--       球队         -->
                <div class="tab-list">
                    <TabItem :item="team"></TabItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {reactive, ref} from "vue";
    import TabItem from "@/components/TabItem.vue";


    const current = ref(0) // 记录选项卡的状态
    const player = reactive({
        name: "梅西",
        img: "/images/messi.png",
        rate: 1,
        hot: 433760,
    })

    const team = reactive({
        name: "法国",
        img: "/images/法国.jpg",
        rate: 1,
        hot: 333760,
    })

</script>

<style scoped>
.tab-wrapper {
    box-sizing: border-box;
    padding: 20px;
    width: 800px;
    background-color: rgb(45,83,211);
}
.tab-head {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
}
.tab-button {
    font-size: 30px;
    background-color: white;
    padding: 10px 0;
    flex: auto;
    cursor: pointer;
    transition: .4s;
}
.tab-button:not(.active):hover {
    color: rgb(183, 7, 52);
}
.active {
    background-color: rgb(183, 7, 52);
    color: white;
}
.tab-list {
    margin: 20px;
}

</style>
