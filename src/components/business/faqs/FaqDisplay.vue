<script setup lang="ts">
    import { ref, watch } from 'vue';
    import FaqCard from './FaqCard.vue';
    import { useRoute } from 'vue-router';
    import { useQuery } from '@tanstack/vue-query';
    import { getOrganizationById } from '../../../api/organizations';

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
    const searchQuery = ref('');

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

    watch(searchQuery, handleSearch);

    function loadMore() {
        // aquí se escribe la lógica para cargar más faqs
    }

    const route = useRoute()
    const organizationId = route.params["organization_id"] as string;

    const { data } = useQuery({
        queryKey: ["organizations", organizationId],
        queryFn: async () => await getOrganizationById(organizationId)
    });
</script>

<template>
    <div class="w-full flex flex-col">
        <div class="flex space-x-2 justify-center">
            <button v-for="(label, index) in labels" 
                :key="index" 
                @click="toggleSelection(index)"
                :class="[ isSelected(index) ? 'text-white' : 'bg-gray-100 text-gray-500' ]"
                class="px-4 py-2 text-sm rounded-full transition-colors duration-300 hover:bg-gray-400 hover:text-white focus:outline-none font-semibold"
                :style="{ backgroundColor: isSelected(index) ? data?.secondary_color : '' }"
                >
                {{ label }}
            </button>
        </div>
        <div class="flex items-center mt-5">
            <div class="relative">
                <vue-icon name="io-search" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input 
                    type="text" 
                    v-model="searchQuery" 
                    class="pl-10 pr-4 text-base rounded-full focus:outline-none bg-gray-100 py-2" 
                    placeholder="Search by title..." 
                />
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4 mt-5">
            <FaqCard v-for="faq in filteredFaqData" :key="faq.id" :faq="faq"/>
        </div>
        <div class="w-full flex justify-center items-center mt-10">
          <button class="border rounded-lg px-5 py-2 font-semibold" @click="loadMore">Load more</button>
        </div>  
    </div>
</template>