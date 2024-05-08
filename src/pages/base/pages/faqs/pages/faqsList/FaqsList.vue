<script setup lang="ts">
  import FaqCard from "../../../../../../components/business/faqs/FaqCard.vue";
  import PageBanner from "../../../../../../components/shared/PageBanner.vue";
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
      date: '2024-04-23',
      label: "Administracion"
    },
    {
      id: "2",
      question: "Otra pregunta interesante",
      date: '2024-04-25',
      label: "Examenes"
    },
    {
      id: "3",
      question: "¿Cómo puedo hacer esto?",
      date: '2024-04-28',
      label: "Formularios"
    },
    {
      id: "4",
      question: "Hey una pregunta",
      date: '2024-04-23',
      label: "Plazos"
    },
    {
      id: "5",
      question: "Otra pregunta interesante",
      date: '2024-04-25',
      label: "Plazos"
    },
    {
      id: "6",
      question: "¿Cómo puedo hacer esto?",
      date: '2024-04-28',
      label: "Administracion"
    },
  ];
  const filteredFaqData = ref(faqData);


  const labels = [
      "Administracion",
      "Formularios",
      "Plazos",
      "Examenes",
      "Expedientes"
  ]
  const selectedLabels = ref<string[]>([]); // Proporcionamos un tipo explícito para selectedLabels

  const toggleSelection = (index: number) => {
    const label = labels[index];
    if (selectedLabels.value.includes(label)) {
      selectedLabels.value = selectedLabels.value.filter((selectedLabel) => selectedLabel !== label);
    } else {
      selectedLabels.value.push(label);
    }

    handleSearch('');

  };

  const isSelected = (index: number) => {
    const label = labels[index];
    return selectedLabels.value.includes(label);
  };
  const handleSearch = (query: string) => {

    // Filtrar las preguntas frecuentes según el término de búsqueda
    let filteredBySearch = faqData.filter(faq => faq.question.toLowerCase().includes(query.toLowerCase()));

    if (selectedLabels.value.length > 0) {
      filteredFaqData.value = filteredBySearch.filter(faq => selectedLabels.value.includes(faq.label));
    } else {
      filteredFaqData.value = filteredBySearch;
    }
  };

</script>

<template>
    <PageBanner @search="handleSearch" :data="faqPageData" :user="userData1"></PageBanner>
    <div class="flex space-x-2 justify-center mt-8">
      <button v-for="(label, index) in labels" :key="index" @click="toggleSelection(index)" :class="{ 'bg-blue-500 text-white': isSelected(index), 'bg-gray-200 text-gray-700': !isSelected(index) }" class="w-40 py-2 text-sm rounded-lg transition-colors duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">
        {{ label }}
      </button>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-10">
      <FaqCard v-for="faq in filteredFaqData" :key="faq.id" :faq="faq"/>
    </div>
</template>