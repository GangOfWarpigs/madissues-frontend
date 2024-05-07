<script setup lang="ts">
  import FaqCard from "../../../../../../components/business/faqs/FaqCard.vue";
  import PageBanner from "../../../../../../components/shared/PageBanner.vue";
  import InfoDialog from "../../../../../../components/shared/InfoDialog.vue";
  import {ref} from "vue";

  const faqPageData = {
    title: "FAQs",
    subtitle: "Ask what you want, we listen to you",
    primaryColor: "#1986E3",
    secondaryColor:"#978EFF",
    currentPage: "faqs"
  }
  const userData1 = {
    first_name: "Jose Ricardo",
    last_name: "Peña Seco",
    degree: "Ingeniería informática",
    last_school_year: "4",
    email: "jose.pena101@alu.ulpgc.es"
  }

  const faqData = [
    {
      id: "1",
      question: "Hey una pregunta",
      date: '2024-04-23'
    },
    {
      id: "2",
      question: "Otra pregunta interesante",
      date: '2024-04-25'
    },
    {
      id: "3",
      question: "¿Cómo puedo hacer esto?",
      date: '2024-04-28'
    },
    {
      id: "4",
      question: "Hey una pregunta",
      date: '2024-04-23'
    },
    {
      id: "5",
      question: "Otra pregunta interesante",
      date: '2024-04-25'
    },
    {
      id: "6",
      question: "¿Cómo puedo hacer esto?",
      date: '2024-04-28'
    },
    // Agrega más elementos según sea necesario
  ];
  const filteredFaqData = ref(faqData);

  const handleSearch = (query: string) => {
    // Filtrar las preguntas frecuentes según el término de búsqueda
    filteredFaqData.value = faqData.filter(faq => faq.question.toLowerCase().includes(query.toLowerCase()));
  };


</script>

<template>
    <PageBanner @search="handleSearch" :data="faqPageData" :user="userData1"></PageBanner>
    <div class="grid grid-cols-3 gap-4 mt-10">
      <FaqCard v-for="faq in filteredFaqData" :key="faq.id" :faq="faq" />
    </div>
</template>