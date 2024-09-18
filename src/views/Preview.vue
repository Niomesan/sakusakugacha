<template>
    <nav>
        <RouterLink to="/gacha">
            <div class="hp">
                <p class="hptext margarine">Back to gacha</p>
            </div>
        </RouterLink>
    </nav>
    <div class="block">
        <div class="photos">
            <viewer :images id="list">
                    <img class="image" :src="image" v-for="image, k of images" :key="k"></img>
            </viewer>
        </div>
    </div>
</template>

<style scoped>
.block {
    display: flex;
    width: 80%;
    height: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0.5970763305322129) 0%, rgba(255,226,205,0.865983893557423) 100%);
    margin: auto;
    border-radius: 70px;
}

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
    text-align:center;
    color: white;
    letter-spacing: 3px;
}

.photos {
    width: 94%;
    height: 90%;
    background-color: #ff9d002c;
    border-radius: 40px;
    overflow-y: scroll;
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
    height: 157px;
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