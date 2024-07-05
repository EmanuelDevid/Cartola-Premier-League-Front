<script setup>
	import Header from './components/Header/index.vue'
</script>

<template>
	<div class="flex flex-col w-screen h-screen">
		<Header></Header>

		<main class="h-full w-full flex justify-center items-center">
			<RouterView />
		</main>
	</div>
</template>
