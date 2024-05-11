<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toast from 'primevue/toast'

import API from '@/services/api.js'

const toast = useToast()

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
  let fact = newFactValidate(newFact.value)
  if (fact) {
    API.createFact({ text: fact }).then(() => {
      toast.add({
        severity: 'info', summary: 'Info',
        detail: 'Se ha añadido una curiosidad más sobre Paco, muchas gracias por tu trabajo', life: 3000
      })
      newFact.value = ""
    })
      .catch(() =>
        toast.add({
          severity: 'error', summary: 'Ooops',
          detail: 'Ha habido un error al mandar la curiosidad', life: 3000
        })
      )
  } else {
    toast.add({
      severity: 'error', summary: 'Ooops',
      detail: 'Introduce una curiosidad válida', life: 3000
    })
  }
}
</script>

<template>
  <Toast />
  <body class="fact-container">
    <div class="fact-text">
      <h1>¿Quieres añadir tu propia curiosidad sobre Paco?</h1>
      <h2>Ahora puedes hacerlo!</h2>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <h2>¿Sabías que...</h2>
      <div class="input-container">
        <input-text type="text" name="fact" id="fact-input" v-model="newFact"></input-text>
        <Button @click="submitFact">Añadir</Button>
      </div>
    </div>
    <h3 v-if="error">{{ error }}</h3>
    <div class="footer">
      <p>Happy birthday!!</p>
      <p>Hecho con <router-link to="/">❤️</router-link> por tus amigos</p>
    </div>
  </body>

</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: row;
}
</style>
