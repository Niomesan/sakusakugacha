<template>
  <h2 class="margarine text-center mb-10 md:-mt-30 translate-y-5 text-xl font-bold">What would you like to play?</h2>
  <div class="flex flex-col gap-3 justify-center items-center">
    <nav class="flex flex-col gap-3 justify-center items-center">
      <RouterLink to="/gacha">
          <button class="text-center w-[160px] h-auto bg-amber-600 text-white rounded-xl p-3 px-10 text-2xl border-5 border-orange-300 hover:bg-green-700 hover:border-green-500">Gacha</button>
          <img src="../../public/default.png" width="45px" class="minipictures absolute z-10 -translate-y-10 -translate-x-3 -rotate-[30deg]" />
      </RouterLink>
      <RouterLink to="/cardsgacha">
          <button class="text-center w-[160px] h-auto bg-amber-600 text-white rounded-xl p-3 px-10 text-2xl border-5 border-orange-300 hover:bg-green-700 hover:border-green-500">Cards</button>
          <img src="../../public/defaultcard.png" width="45px" class="minipictures absolute z-10 translate-x-31 -translate-y-9 rotate-45" />
      </RouterLink>
    </nav>
  </div>
  <img class="translate-y-14 md:hidden" src="../../public/decorations/sakucrawl.gif" />
  <img id="haunt" class="hidden md:block absolute -left-10 lg:-left-90 translate-y-[25%] lg:translate-x-85 w-[300px]" src="../../public/decorations/sakuhaunt.gif" />
</template>

<style scoped>
.minipictures:hover {
  transform: rotate(360deg);
  transition: transform 0.5s;
}
</style>

<script setup>
function scRedirection() {
  window.location.href = "https://github.com/Niomesan/sakusakugacha"
}
</script>
