<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['spinned'])
// got it from this pen: https://codepen.io/GhostCode99/pen/BaQePwW
// thank you @Ghostcode99
var number = Math.ceil(Math.random() * 45000)

function spin() {
  var container = document.querySelector(".container")
  container.style.transform = "rotate(" + number + "deg)"
  number = Math.ceil(Math.random() * 45000)
  setTimeout(function () { emit('spinned') }, 3000)
}
</script>

<template>
  <div class="roulette-container">
    <p>Tira de la ruleta y descubre más curiosidades sobre Paco !</p>
    <div class="container">
      <button id="spin" @click="spin">otra!</button>
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
      <div class="four"></div>
      <div class="five"></div>
      <div class="six"></div>
      <div class="seven"></div>
      <div class="eight"></div>
    </div>
  </div>
</template>

<style scoped>
.roulette-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  width: calc(500px * var(--reduction-factor));
  height: calc(500px * var(--reduction-factor));
  background-color: #ccc;
  border-radius: 50%;
  border: calc(15px * var(--reduction-factor)) solid #dde;
  position: relative;
  overflow: hidden;
  transition: 3s;
}

p {
  text-wrap: pretty;
  text-align: center;
  text-transform: uppercase;
}

.container div {
  height: 50%;
  width: calc(200px * var(--reduction-factor));
  position: absolute;
  clip-path: polygon(100% 0, 50% 100%, 0 0);
  transform: translateX(-50%);
  transform-origin: bottom;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
  color: #fff;
  left: calc(135px * var(--reduction-factor));
}

.container .one {
  background-color: #3f51b5;
  left: 50%;
}

.container .two {
  background-color: #ff9800;
  transform: rotate(45deg);
}

.container .three {
  background-color: #e91e63;
  transform: rotate(90deg);
}

.container .four {
  background-color: #4caf50;
  transform: rotate(135deg);
}

.container .five {
  background-color: #009688;
  transform: rotate(180deg);
}

.container .six {
  background-color: #795548;
  transform: rotate(225deg);
}

.container .seven {
  background-color: #9c27b0;
  transform: rotate(270deg);
}

.container .eight {
  background-color: #f44336;
  transform: rotate(315deg);
}

#spin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: #e2e2e2;
  border: 8px solid #fff;
  font-weight: bold;
  font-size: 20px;
  color: #535353;
  width: 80px;
  height: 80px;
  font-family: sans-serif;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
}
</style>
