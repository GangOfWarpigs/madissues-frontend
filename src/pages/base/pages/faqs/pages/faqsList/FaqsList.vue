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
  this is faqs list
  <div class="mx-16 mb-12">
    <PageBanner @search="handleSearch" :data="faqPageData" :user="userData1" ></PageBanner>
  </div>
  <div class="mx-24">
    <InfoDialog title="Hi, this is an information dialog" content="This is the text of the information dialog"/>
  </div>
  <div class="mx-24 mt-5 flex-wrap-container">
    <FaqCard v-for="faq in filteredFaqData" :key="faq.id" :faq="faq" />
  </div>
</template>

<style scoped>
.flex-wrap-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Espacio entre las tarjetas */
}

@media (max-width: 768px) {
  .flex-wrap-container {
    gap: 0.5rem; /* Espacio reducido para dispositivos móviles */
  }
}

.faq-card {
  flex: 1 0 calc(45% - 0.5rem); /* Ajusta el ancho de la tarjeta para que ocupe aproximadamente el 45% del contenedor */
  /* Elimina los márgenes */
}

@media (max-width: 768px) {
  .faq-card {
    flex: 1 0 calc(100% - 0.5rem); /* En dispositivos móviles, cada tarjeta ocupará una fila completa */
  }
}
</style>