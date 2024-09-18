<template>
    <div class="block">
        <p class="title margarine"><span class="jp">さくさく</span> gacha!</p>
        <img :src="reward" class="image"></img>
        <button class="btn" @click="gacha()">
            <span class="btn-text margarine">Pull! 🐻</span>
        </button>
    </div>
    <nav>
        <RouterLink to="/">
            <div class="hp">
                <p class="hptext margarine">Homepage</p>
            </div>
        </RouterLink>
        <RouterLink to="/gachapreview">
            <div class="pr">
                <p class="hptext margarine">Drops</p>
            </div>
        </RouterLink>
    </nav>
</template>

<style scoped>
.title {
    font-size: 80px;
    color: white;
    text-align: center;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #ff9d00;

}

.block {
    display: flex;
    width: 40%;
    height: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0.5970763305322129) 0%, rgba(255,226,205,0.865983893557423) 100%);
    margin: auto;
    border-radius: 70px;
}

.image {
    height: 400px;
    width: 400px;
}

.btn {
    background-color: rgb(241, 241, 111);
    padding: 15px;
    margin-top: 70px;
    margin-bottom: 50px;
    border: dotted rgb(235, 135, 43) 5px;
    border-radius: 40px;
    cursor: pointer;
    transition: all;
    transition-duration: 200ms;
}

.btn:hover {
    background-color: rgb(108, 214, 161);
}

.btn-text {
    color: rgb(201, 72, 94);
    font-weight: bold;
    text-align: center;
    font-size: 50px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
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

.pr {
    width: 150px;
    height: 50px;
    background-color: rgb(201, 72, 94);
    border-radius: 30px;
    position: absolute;
    left: 10px;
    top: 75px;
    transition: all;
    transition-duration: 200ms;
}

.pr:hover {
    background-color: rgb(108, 214, 161);
}

@media screen and (max-width:641px) {
    .title {
        font-size: 40px;
    }

    .block {
        width: 80%;
    }

    .image {
        height: 300px;
        width: 300px;
    }
}

@media screen and (max-width: 961px) {
    .block {
        width: 80%;
    }
}

@media screen and (max-width: 1024px) {
    .block {
        width: 80%;
    }

    .image {
        height: 200px;
        width: 200px;
    }

    .title {
        font-size: 35px;
    }

    .btn {
        height: 70px;
        width: auto;
    }

    .btn-text {
        font-size: 30px;
    }
}

</style>

<script setup>
import { ref, computed } from 'vue';

const gifNames = [
    "amethyst.gif", "burger_san.gif", "erechuwan.gif", "kaeru_chan.gif",
    "mocchan.gif", "shikuron.gif", "sloth.gif", "aniki.gif", "chicken_san.gif", "fat_bee.gif",
    "mayo_chan.gif", "nantekotta.gif", "sicchan2.gif", "synth_san.gif", "apuapu.gif", "creeper.gif",
    "gauchan.gif", "misha2.gif", "natsu.gif", "sicchan.gif", "tamanosuke.gif", "bear.gif", "dinya.gif",
    "ghost_shan.gif", "misha.gif", "pie.gif", "sinister.gif", "wizard.gif"
];

let def = "default.png";

let randomNumber = ref(null);


let reward = computed (() => {
    if (randomNumber.value == null) return def;
    return "/gif/" + gifNames[randomNumber.value];
});

function gacha() {
    randomNumber.value = Math.floor(Math.random() * gifNames.length);
}
</script>
