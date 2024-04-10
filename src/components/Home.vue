<script setup>
	import facts_json from "@/assets/paco_facts.json"
  import Roulette from "@/components/Roulette.vue"
	import { ref, onBeforeMount } from 'vue'

	const fact = ref("")

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
      <h1>¿SABÍAS QUE PACO...</h1>
      <h2 id="fact">{{ fact }}?</h2>
    </div>
    <Roulette @spinned="updateRandomFact"/>
	</body>
</template>

<style scoped>
  #fact {
    background-color: var(--vt-c-white-soft);
    text-align: center;
    padding: 0.8rem;
    border: solid 1px var(--vt-c-black);
    border-radius: 0.4rem;
    box-shadow: 1px;
  }

  .fact-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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
</style>