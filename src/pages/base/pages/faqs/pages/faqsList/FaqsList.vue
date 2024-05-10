<script setup lang="ts">
    import FaqCard from "../../../../../../components/business/FaqCard.vue";
    import PageBanner from "../../../../../../components/shared/pageBanner/PageBanner.vue";
    import { ref } from "vue";

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
            label: "Administración",
            answers: 1
        }, {
            id: "2",
            question: "Otra pregunta interesante",
            date: '2024-04-25',
            label: "Exámenes",
            answers: 2
        }, {
            id: "3",
            question: "¿Cómo puedo hacer esto?",
            date: '2024-04-28',
            label: "Formularios",
            answers: 1
        }, {
            id: "4",
            question: "Hey una pregunta",
            date: '2024-04-23',
            label: "Plazos",
            answers: 0
        }, {
            id: "5",
            question: "Otra pregunta interesante",
            date: '2024-04-25',
            label: "Plazos",
            answers: 4
        }, {
            id: "6",
            question: "¿Cómo puedo hacer esto?",
            date: '2024-04-28',
            label: "Administración",
            answers: 0
        }
    ];
    
    const filteredFaqData = ref(faqData);

    const labels = [
        "Administración",
        "Formularios",
        "Plazos",
        "Exámenes",
        "Expedientes"
    ];

    const selectedLabels = ref<string[]>([]); 

    const toggleSelection = (index: number) => {
        const label = labels[index];
        if (selectedLabels.value.includes(label)) selectedLabels.value = selectedLabels.value.filter((selectedLabel) => selectedLabel !== label);
        else selectedLabels.value.push(label);
        handleSearch('');
    };

    const isSelected = (index: number) => {
        const label = labels[index];
        return selectedLabels.value.includes(label);
    };
  
    const handleSearch = (query: string) => {
        let filteredBySearch = faqData.filter(faq => faq.question.toLowerCase().includes(query.toLowerCase()));
        if (selectedLabels.value.length > 0) filteredFaqData.value = filteredBySearch.filter(faq => selectedLabels.value.includes(faq.label));
        else filteredFaqData.value = filteredBySearch;
    };
</script>

<template>
    <PageBanner @search="handleSearch" :data="faqPageData" :user="userData1"></PageBanner>
    <div class="flex space-x-2 justify-center mt-12">
        <button v-for="(label, index) in labels" 
            :key="index" 
            @click="toggleSelection(index)"
            :class="[ isSelected(index) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500' ]"
            class="px-4 py-2 text-sm rounded-full transition-colors duration-300 hover:bg-blue-600 hover:text-white focus:outline-none font-semibold">
            {{ label }}
        </button>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-5">
        <FaqCard v-for="faq in filteredFaqData" :key="faq.id" :faq="faq"/>
    </div>
    <div class="w-full flex justify-center">
      <button class="self-center mt-10 border rounded-lg px-5 py-2 font-semibold">Load more</button>
    </div>

</template>