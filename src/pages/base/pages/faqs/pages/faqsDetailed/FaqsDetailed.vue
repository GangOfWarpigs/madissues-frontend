<script setup lang="ts">
	import FaqDetails from './components/FaqDetails.vue';
	import FaqComment from './components/FaqComment.vue';

	const faqData1 = {
		id: "1",
		date_time: "Today, 03:48 PM",
		title: "¿Cuál es el tiempo límite para realizar el pago de la matrícula? ¿Si se me pasa la fecha límite pasa algo?",
		content: "¿Cuál es el tiempo límite para realizar el pago de la matrícula? ¿Si se me pasa la fecha límite pasa algo? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus metus id justo molestie dictum.",
		comments: ["2", "3"]
	}

	const faqCommentData1 = {
		id: "1",
		isOfficial: true,
        author: "josepenaseco",
        likes: ["2", "3"],
        marks: ["2", "3"],
        content: "Pues mira para solucionar este problema primero deberás hablar con el profesor. Si no te hace caso, deberás hablar con el coordinador, y si no se consigue nada, se tendrá que hablar con la Directora del centro",
        date_time: "1 hour ago",
	}

	const faqCommentData2 = {
		id: "2",
		isOfficial: false,
        author: "josepenaseco",
        likes: ["2", "3"],
        marks: ["2", "3"],
        content: "Pues mira para solucionar este problema primero deberás hablar con el profesor. Si no te hace caso, deberás hablar con el coordinador, y si no se consigue nada, se tendrá que hablar con la Directora del centro",
        date_time: "1 hour ago",
	}
</script>

<template>
	this is faqs detailed
	<div class="mx-[450px]">
		<FaqDetails :faq="faqData1"/>
		<FaqComment :comment="faqCommentData1"/>
		<FaqComment :comment="faqCommentData2"/>
	</div>
</template>

<style scoped>

</style>