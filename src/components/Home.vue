<script setup>
	import { ref, onBeforeMount, computed } from 'vue'

  import Roulette from "@/components/Roulette.vue"
	import facts_json from "@/assets/paco_facts.json"

	const fact = ref("")
  const title = computed(() => { return fact.value.startsWith("le ") ? "¿SABÍAS QUE A PACO..." : "¿SABÍAS QUE PACO..."})

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