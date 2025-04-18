<template>
  <div>
    <div class="fixed left-0 top-0 h-screen w-screen -z-10">
      <Morph style="opacity: 50%;" />
      <div id="dots" class="fixed left-0 top-0 h-screen w-screen overflow-hidden"></div>
    </div>
    <div class="h-screen w-screen flex flex-col justify-center items-center">
      <h1 class="jp text-[50px] texthighlight translate-x-1">ようこそ！</h1>
      <h2 class="jp mb-2 -translate-y-2 text-sm">Welcome here!</h2>
      <div id="mainblock" class="blockbg relative flex flex-col justify-center items-center w-[80%] h-[60%] xl:w-[50%] rounded-3xl border-4 border-[#FFDB9C]">
        <img id="decoheart" src="../public/decorations/heart.png" class="absolute -top-10 -left-10 w-[100px] z-1" />
        <img id="decobee" src="../public/decorations/bee.gif" class="absolute -right-10 w-[120px] z-1" />
        <RouterView />
        <!--TODO: Add Fluid once Tailwind v4 has config file-->
      </div>
    </div>
  </div>
  <p class="absolute text-right bottom-1 right-1 margarine text-[10px]"> Credits @ <a href="https://www.twitch.tv/sakusaku_pie" style="color: blue;">sakusaku_pie</a> - Artist and PNGTuber || <a href="https://twitter.com/niomesan" style="color: blue;">nijo</a> - site developer </p>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Morph from './components/MorphingGradient.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Margarine&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap');

body {
  background-color: rgb(245, 183, 76);
  overflow-x: hidden;
}

button:hover {
  transform: scale(105%);
  transition: ease-in 0.1s;
}

.blockbg {
  background-color: #ffcd7d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffefca' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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

.texthighlight {
  -webkit-text-fill-color: #ff9500;
  text-shadow: -2px -2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff, 2px 2px 0 #ffffff;
}

#dots {
  background-color: #dfdbe500;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}

#decoheart {
  animation: heartmove ease-in-out 2s infinite;
}

@keyframes heartmove {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}

#decobee {
  animation: beemove linear 2s infinite;
}

@keyframes beemove {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #947d51
}

::-webkit-scrollbar-thumb:hover {
    background: #947d51;
}
</style>
