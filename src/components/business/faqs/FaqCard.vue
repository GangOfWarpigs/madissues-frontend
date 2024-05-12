<script setup lang="ts">
    import {PropType} from "vue";
    import { useRouter, useRoute } from 'vue-router';
    import { useQuery } from "@tanstack/vue-query"; 
    import { getOrganizationById } from "../../../api/organizations";

    interface Faq {
        id: string,
        question: string,
        date: string,
        label: string,
        answers: number
    }

    const props = defineProps({
        faq: {
            type: Object as PropType<Faq>,
            required: true,
        }
    })
    
    const router = useRouter();
    const route = useRoute()
    const currentRoute = route.fullPath;
    const organizationId = route.params["organization_id"] as string;

    function goToFaq() {
        router.push({ path: currentRoute + "/" + props.faq.id })
    }

    const { data } = useQuery({
        queryKey: ["organizations", organizationId],
        queryFn: async () => await getOrganizationById(organizationId)
    });
</script>

<template>
  <article @click="goToFaq" class="faq-card flex flex-col w-full py-5 px-6 bg-gray-100 text-gray-500 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gray-200">
    <section class="flex text-center text-sm space-x-2 items-center" :style="{ color: data?.primary_color }">
        <b-icon-star-fill/>
        <p class="font-semibold">Official answer</p>
    </section>
    <section class="py-4 px-2 w-full overflow-auto min-h-20 flex items-center justify-center">
        <h3 class="text-lg text-center font-semibold text-gray-600">{{ props.faq.question }}</h3>
    </section>
    <section class="flex justify-between items-end content-center w-full">
        <p class="text-xs font-medium text-purple-600 bg-purple-200 rounded py-1 px-2">{{ props.faq.label }}</p>
        <div class="flex flex-col font-medium pr-2 text-gray-400">
            <div class="flex text-center space-x-2 items-center text-sm">
                <b-icon-chat-left-text-fill/>
                <p>{{ props.faq.answers }} answers</p>
            </div>
            <p class="text-xs text-end">{{ props.faq.date }}</p>
        </div>
    </section>
  </article>
</template>