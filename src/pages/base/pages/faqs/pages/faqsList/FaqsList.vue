<script setup lang="ts">
import FaqCard from "../../../../../../components/business/faqs/FaqCard.vue";

const faqData = {
  question: "Hey una pregunta",
  date: '2024-04-23'
}
</script>

<template>
  this is faqs list
  <FaqCard :faq="faqData"></FaqCard>
</template>

<style scoped>
</style>