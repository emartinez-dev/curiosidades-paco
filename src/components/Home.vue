<script setup>
	import { ref, onBeforeMount, computed } from 'vue'

  import Roulette from "@/components/Roulette.vue"
	import facts_json from "@/assets/paco_facts.json"

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
		return facts_json[Math.floor(Math.random() * facts_json.length)]
	}

	const updateRandomFact = () => {
		fact.value = getRandomFact()
	}

	onBeforeMount(() => {
		updateRandomFact()
	})

</script>

<template>
	<body class="fact-container">
		<div class="fact-text">
      <h1>{{ title }}</h1>
      <h2 id="fact">{{ fact }}?</h2>
    </div>
    <Roulette @spinned="updateRandomFact"/>
    <div class="footer">
      <p>Happy birthday!!</p>
      <p>Hecho con ❤️ por tus amigos</p>
    </div>
	</body>
</template>

<style scoped>
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

  .fact-container > div:not(:last-child) {
    margin-bottom: 20px;
  }

  .fact-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .fact-text > * {
    margin: 1rem;
  }

  .footer {
    text-transform: uppercase;
    margin-top: auto;
    text-align: center;
  }
</style>