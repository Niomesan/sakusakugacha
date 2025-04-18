<template>
    <p class="margarine texl-2xl pt-12 md:pt-3 mb-1"><span class="jp">さくさく</span> cards!</p>
    <img :src="reward" width="170px" class="md:w-[300px] mb-2"></img>
    <button
        class="text-center w-[160px] h-auto bg-amber-600 text-white rounded-xl p-3 text-2xl border-5 border-orange-300 hover:bg-green-700 hover:border-green-500"
        @click="gacha()">
        <span class="text-lg font-bold text-center m-auto texthiglight margarine text-white cursor-pointer">Pull!
            🐻</span>
    </button>
    <nav class="pt-5 md:pt-5 pb-3 md:w-[90%] justify-between flex flex-row gap-1 md:gap-3 items-center">
        <div class="flex flex-row gap-1 md:gap-3">
            <RouterLink to="/">
                <button
                    class="text-center p-1.5 md:p-2 bg-amber-500 text-white rounded-xl text-[12px] md:text-sm border-5 border-orange-300 hover:bg-green-700 hover:border-green-500">
                    <p class="hptext margarine">Homepage</p>
                </button>
            </RouterLink>
            <RouterLink to="/gacha">
                <button
                    class="text-center p-1.5 md:p-2 bg-amber-500 text-white rounded-xl text-[12px] md:text-sm border-5 border-orange-300 hover:bg-green-700 hover:border-green-500">
                    <p class="hptext margarine">Gacha</p>
                </button>
            </RouterLink>
        </div>
        <RouterLink to="/cards">
            <button
                class="text-center p-1.5 md:p-2 bg-amber-500 text-white rounded-xl text-[12px] md:text-sm border-5 border-orange-300 hover:bg-green-700 hover:border-green-500">
                <p class="hptext margarine">Drops</p>
            </button>
        </RouterLink>
    </nav>
</template>

<style scoped>
</style>

<script setup>
import { ref, computed } from 'vue';

const gifNames = [
    "amatotosan.gif", "Byargyarsan.gif", "Konmamacard.gif", "Miasancard.gif", "Shikuroncard.gif",
    "Synthkuncard.gif", "aniki.gif", "Ghostshancard.gif", "Kudorisancard.gif", "mocchan.gif",
    "Sinistercard.gif", "Twitwicard.gif", "Boowowchancard.gif", "kaeruchan.gif", "Mayochancard.gif", 
    "Sacchancard.gif", "Starchancard.gif", "andreicsfnaicsf.gif", "atram0rte.gif", "nadeshikoelyo.gif",
    "nadeshikoelyo.gif"
];

let def = "defaultcard.png";
let audioFile = new Audio ("pull.mp3");

let randomNumber = ref(null);


let reward = computed (() => {
    if (randomNumber.value == null) return def;
    return "/cards/" + gifNames[randomNumber.value];
});

function gacha() {
    randomNumber.value = Math.floor(Math.random() * gifNames.length);
    audioFile.play();
}
</script>
