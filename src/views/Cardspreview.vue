<template>

        <div class="photos">
            <viewer :images id="list">
                <Tilt v-for="image, k of images" :key="k" :options = "opts">
                    <img class="image" :src="image"></img>
                </Tilt>
            </viewer>
        </div>
    <nav>
        <RouterLink to="/cardsgacha">
            <button class="text-center p-2 mb-3 bg-amber-500 text-white rounded-xl text-sm border-5 border-orange-300 hover:bg-green-700 hover:border-green-500">
            <p class="hptext margarine">Back to cards</p>
            </button>
        </RouterLink>
    </nav>
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
    height: 80%;
    background-color: #ff9d002c;
    border-radius: 40px;
    overflow-y: scroll;
    overflow-x: hidden;
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
    import Tilt from 'vanilla-tilt-vue';

    const assets = [
            "/previewcards/1.png",
            "/previewcards/2.png",
            "/previewcards/3.png",
            "/previewcards/4.png",
            "/previewcards/5.png",
            "/previewcards/6.png",
            "/previewcards/7.png",
            "/previewcards/8.png",
            "/previewcards/9.png",
            "/previewcards/10.png",
            "/previewcards/11.png",
            "/previewcards/12.png",
            "/previewcards/13.png",
            "/previewcards/14.png",
            "/previewcards/15.png",
            "/previewcards/16.png",
            "/previewcards/17.png",
            "/previewcards/18.png",
            "/previewcards/19.png",
            "/previewcards/20.png",
            "/previewcards/21.png",
        ]


    const images = Array(assets.length).fill(0).map((_, i) => `/previewcards/${i + 1}.png`);

    const opts = {
        reverse: true,
        glare: true,
        rotation: 100,
        gyroscope: false,
    }

    function isMobile() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
        } else {
            return false
        }
    }

    if (isMobile()) {
        opts.glare = false;
    }
</script>