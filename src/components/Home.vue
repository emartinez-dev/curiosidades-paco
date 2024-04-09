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
	<div>
		<h1>Curiosidades Paco</h1>
		<h2>¿Sabías que Paco..</h2>
		<h3>{{ fact }}?</h3>
		<button @click="updateRandomFact()">Nueva curiosidad</button>
	</div>
</template>

<style scoped>
</style>