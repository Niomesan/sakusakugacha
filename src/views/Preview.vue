<template>
    <div class="photos">
        <viewer :images id="list">
            <img class="image" :src="image" v-for="image, k of images" :key="k"></img>
        </viewer>
    </div>
    <nav>
        <RouterLink to="/gacha">
            <button class="text-center p-2 mb-3 bg-amber-500 text-white rounded-xl text-sm border-5 border-orange-300 hover:bg-green-700 hover:border-green-500">
            <p class="hptext margarine">Back to gacha</p>
            </button>
        </RouterLink>
    </nav>
</template>

<style scoped>
.hp {
    width: 150px;
    height: 50px;
    background-color: rgb(201, 72, 94);
    border-radius: 30px;
    position: absolute;
    left: 10px;
    top: 15px;
    transition: all;
    transition-duration: 200ms;
}

.hp:hover {
    background-color: rgb(108, 214, 161);
}

.hptext {
    font-size: 15px;
    text-align: center;
    color: white;
    letter-spacing: 3px;
}

.photos {
    width: 94%;
    height: 80%;
    background-color: #ff9d002c;
    border-radius: 40px;
    overflow-y: scroll;
    margin-bottom: 20px;
}

#list {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-items: center;
    margin-top: 30px;
    row-gap: 30px;
    margin-bottom: 30px;
}

.image {
    height: 100px;
    cursor: pointer;
}

@media screen and (max-width:641px) {
    #list {
        grid-template-columns: auto;
    }
}

@media screen and (max-width: 961px) and (min-width: 642px) {
    #list {
        grid-template-columns: auto auto;
    }
}
</style>

<script lang="ts" setup>
const assets = [
    "/preview/1.png",
    "/preview/2.png",
    "/preview/3.png",
    "/preview/4.png",
    "/preview/5.png",
    "/preview/6.png",
    "/preview/7.png",
    "/preview/8.png",
    "/preview/9.png",
    "/preview/10.png",
    "/preview/11.png",
    "/preview/12.png",
    "/preview/13.png",
    "/preview/14.png",
    "/preview/15.png",
    "/preview/16.png",
    "/preview/17.png",
    "/preview/18.png",
    "/preview/19.png",
    "/preview/20.png",
    "/preview/21.png",
    "/preview/22.png",
    "/preview/23.png",
    "/preview/24.png",
    "/preview/25.png",
    "/preview/26.png",
    "/preview/27.png",
    "/preview/28.png",
]


const images = Array(assets.length).fill(0).map((_, i) => `/preview/${i + 1}.png`);
</script>