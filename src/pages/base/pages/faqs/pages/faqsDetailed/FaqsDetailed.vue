<script setup lang="ts">
	import FaqDetails from './components/FaqDetails.vue';

	const faqData1 = {
		id: "1",
		date_time: "Today, 03:48 PM",
		title: "¿Cuál es el tiempo límite para realizar el pago de la matrícula? ¿Si se me pasa la fecha límite pasa algo?",
		content: "¿Cuál es el tiempo límite para realizar el pago de la matrícula? ¿Si se me pasa la fecha límite pasa algo? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus metus id justo molestie dictum.",
		comments: ["2", "3"]
	}
</script>

<template>
	this is faqs detailed
	<div class="mx-[450px]">
		<FaqDetails :faq="faqData1"/>
	</div>
</template>

<style scoped>

</style>