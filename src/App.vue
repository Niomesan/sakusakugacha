<template>
   <!--   <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>-->
    <div id="bg">
        <RouterView />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Margarine&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap');

#bg {
    height: 100vh;
    width: 100vw;
    background-color: #ffefca;
    background-image:
    repeating-linear-gradient(
        30deg,
        transparent,
        transparent 1rem,
        #ffcd7d 1rem,
        #ffcd7d 2rem
    );
    background-size: 200% 200%;
    animation: barberpole 30s linear infinite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-position: 1000px 1000px;
}

@keyframes barberpole {
  100% {
    background-position: -100% -100%;
  }
}

.margarine {
  font-family: "Margarine", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 5px;
}

.jp {
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

</style>
