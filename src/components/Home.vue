<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import { RouterLink } from 'vue-router'

import API from '@/services/api.js'
import Roulette from "@/components/Roulette.vue"

const fact = ref("")
const title = computed(() => {
  if (fact.value.startsWith("le "))
    return "¿SABÍAS QUE A PACO..."
  else if (fact.value.startsWith("su ") || fact.value.startsWith("sus ") ||
    fact.value.startsWith("la ") || fact.value.startsWith("las ") ||
    fact.value.startsWith("el ") || fact.value.startsWith("los "))
    return "¿SABÍAS QUE ..."
  return "¿SABÍAS QUE PACO..."
})

const getRandomFact = () => {
  API.getRandomFact().then((response) => {
    fact.value = response.data.text
  })
    .catch((error) => {
      fact.value = "Ha habido un problema, que alguien haga algo!"
      console.error(error)
    })
}

onBeforeMount(() => {
  getRandomFact()
})
</script>

<template>
  <body class="fact-container">
    <div class="fact-text">
      <h1>{{ title }}</h1>
      <h2 id="fact">{{ fact }}?</h2>
    </div>
    <Roulette @spinned="getRandomFact" />
    <div class="footer">
      <p>Happy birthday!!</p>
      <p>Hecho con <router-link to="/add-one/">❤️</router-link> por tus amigos</p>
    </div>
  </body>
</template>

<style>
#fact {
  background-color: var(--vt-c-white-soft);
  text-align: center;
  padding: 0.8rem;
  border: solid 1px var(--vt-c-black);
  border-radius: 0.4rem;
}

.fact-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.fact-container>div:not(:last-child) {
  margin-bottom: 20px;
}

.fact-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.fact-text>* {
  margin: 1rem;
}

.footer {
  text-transform: uppercase;
  margin-top: auto;
  text-align: center;
}
</style>