<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import { RouterLink } from 'vue-router'

import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast'

import API from '@/services/api.js'
import Roulette from "@/components/Roulette.vue"

const toast = useToast()

const fact = ref("")
const numberOfFacts = ref(0)
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
      toast.add({
        severity: 'error', summary: 'Mierda',
        detail: 'Creo que se ha caido la API', life: 3000
      })
      console.error(error)
    })
}

const getNumberOfFacts = () => {
  API.getNumberOfFacts().then((response) => {
    numberOfFacts.value = response.data
  })
    .catch((error) => {
      toast.add({
        severity: 'error', summary: 'Mierda',
        detail: 'Creo que se ha caido la API', life: 3000
      })
      console.error(error)
    })
}

onBeforeMount(() => {
  getRandomFact()
  getNumberOfFacts()
})
</script>

<template>
  <Toast />
  <body class="fact-container">
    <div class="fact-text">
      <h1>{{ title }}</h1>
      <h2 id="fact">{{ fact }}?</h2>
    </div>
    <Roulette @spinned="getRandomFact" />
    <div class="footer">
      <p>Tenemos {{ numberOfFacts }} curiosidades sobre Paco</p>
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