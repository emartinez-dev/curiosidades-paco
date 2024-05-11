<script setup>
import { ref } from 'vue'

import API from '@/services/api.js'

const newFact = ref("")
const error = ref("")

const newFactValidate = () => {
  if (newFact.value) {
    let validFact = newFact.value.trim().slice()

    // Convert the first letter to lowercase
    validFact = validFact[0].toLowerCase() + validFact.slice(1)
    if (validFact.endsWith("?"))
      validFact = validFact.slice(0, validFact.length - 1)
    return validFact
  }
  return undefined
}

const submitFact = () => {
  error.value = ""
  let fact = newFactValidate(newFact.value)
  if (fact) {
    API.createFact({ text: fact }).then(() => {
newFact.value = ""
      error.value = "Se ha añadido una curiosidad más sobre Paco, muchas gracias por tu trabajo."
    })
      .catch(() => error.value = "Ha habido un problema, que alguien haga algo!")
  }
  else
      error.value = "Ese dato que has introducido no es tan curioso"
}
</script>

<template>

  <body class="fact-container">
    <div class="fact-text">
      <h1>¿Quieres añadir tu propia curiosidad sobre Paco?</h1>
      <h2>Ahora puedes hacerlo!</h2>
    </div>
    <div>
      <h3>¿Sabías que...</h3>
      <input type="text" name="fact" id="fact-input" v-model="newFact">
      <button @click="submitFact">Añadir</button>
    </div>
    <h3 v-if="error">{{ error }}</h3>
    <div class="footer">
      <p>Happy birthday!!</p>
      <p>Hecho con <router-link to="/">❤️</router-link> por tus amigos</p>
    </div>
  </body>

</template>

<style scoped></style>
