<script setup>
import Home from '@/components/Home.vue'
</script>

<template>
	<Suspense>
	<Home />
	<template #fallback>
		Cargando...
	</template>
	</Suspense>
</template>
