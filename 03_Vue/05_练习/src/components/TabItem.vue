<template>
    <div class="tab-item">
        <!--           图片             -->
        <div class="photo">
            <img :src="item.img" alt="item.name">
            <span>{{ item.rate }}</span>
        </div>
        <!--    描述    -->
        <div class="desc">
            <span class="name">{{ item.name }}</span>
            <div class="hot-bar">
                <div class="inner">{{ item.hot }}热度</div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["item"])

    console.log(props)
</script>

<style scoped>
.tab-item {
    display: flex;
    margin-bottom: 40px;
}
.photo {
    width: 150px;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}

.photo img {
    width: 100%;
    vertical-align: top;
}

.photo span {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(245,102,1);
    font-size: 26px;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 10px;
}
.desc {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    font-size: 30px;
    color: white;
    flex: auto;
    margin-left: 30px;
}
.hot-bar {
    border-radius: 20px;
    background-color: rgb(3,37,103);
    text-indent: .5em;
    overflow: hidden;
}
.inner {
    background-color: red;
    border-radius: 20px;
    background-image: linear-gradient(90deg, rgb(183, 7, 52) 50%, rgb(66, 2, 12));
    width: 20%;
    white-space: nowrap;
}
</style>
