<script setup>
	import facts_json from "@/assets/paco_facts.json"
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
		<h1>¿Sabías que Paco..</h1>
		<h2 id="fact">{{ fact }}?</h2>
		<button @click="updateRandomFact()">Nueva curiosidad</button>
	</body>
</template>

<style scoped>
  #fact {
    background-color: var(--vt-c-white-soft);
    text-align: center;
  }

  .fact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>