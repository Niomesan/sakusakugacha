<template>
  <div class="sc transition" @click="scRedirection()">
    <p class="sctext margarine">Source code</p>
  </div>
  <div class="block">
    <div>
      <h1 class="centertext jp">ようこそ！</h1>
      <h2 class="centertext jp">Welcome here!</h2>
    </div>
    <p class="centertext margarine question">What would you like to play?</p>
  
    <nav>
      <RouterLink to="/gacha">
        <div class="btn transition">
          <p class="btntext margarine" style="text-decoration: none;">Gachapon</p>
        </div>
      </RouterLink>
    </nav>
    <p class="centertext margarine" style="margin-top: 70px; font-size: 13px; font-weight: lighter; color: rgb(150, 150, 150)">More games are coming later...</p>
  </div>
  <div>
    <p class="margarine" id="credit" style="position: absolute; bottom: 0px; right: 10px; letter-spacing: 1px;">
        Credits @ <a href="https://www.twitch.tv/sakusaku_pie" style="color: blue;">sakusaku_pie</a> - Artist and PNGTuber || <a href="https://twitter.com/niomesan" style="color: blue;">nijo</a> - site developer
    </p>
  </div>
</template>

<style scoped>
.block {
    width: 70%;
    height: 90%;
    justify-content: center;
    align-items: center;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0.5970763305322129) 0%, rgba(255,226,205,0.865983893557423) 100%);
    margin: auto;
    border-radius: 70px;
}

.question {
  margin-top: 100px;
  color: rgb(86, 175, 131);
  font-weight: bold;
  font-size: 40px;
  letter-spacing: normal;
}

.btn {
  background-color: rgb(235, 135, 43);
  width: 180px;
  height: 70px;
  margin: auto;
  margin-top: 10px;
  border-radius: 20px;
}

.btn:hover {
  background-color: rgb(108, 214, 161);
}

.btntext {
  text-align: center;
  font-size: 25px;
  padding-top: 15px;
  color: rgb(241, 241, 111);
  text-decoration: none;
  letter-spacing: 3px;
}

h1 {
  font-size: 6rem;
  margin-bottom: -25px;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ff9d00;
}

h2 {
  font-size: 1rem;
  color: #ff9d00;
}

.centertext {
  text-align: center;
}

.transition {
  transition: all;
  transition-duration: 200ms;
}

a:-webkit-any-link {
  color: #00000000;
}

.sc {
  width: 160px;
  height: 50px;
  background-color: rgb(201, 72, 94);
  position: absolute;
  left: 10px;
  top: 15px;
  border-radius: 30px;
}

.sc:hover {
  background-color: rgb(108, 214, 161);
}

.sctext {
  text-align: center;
  font-size: 15px;
  letter-spacing: 2px;
  color: white;
}

@media screen and (max-width:641px) {
  .block {
    width: 90%;
    height: 65%;
  }

  .question {
    margin-top: 60px;
    font-size: 2rem;
  }

  h1 {
    font-size: 4rem;
  }
   
  h2 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 961px) {
  .block {
    width: 90%;
  }
}
</style>

<script setup>
function scRedirection() {
  window.location.href = "https://github.com/Niomesan/sakusakugacha"
}
</script>
