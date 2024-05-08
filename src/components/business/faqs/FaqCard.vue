<script setup lang="ts">
    import {PropType} from "vue";
    import { useRouter, useRoute } from 'vue-router';

    interface Faq {
        id: string,
        question: string,
        date: string,
        label: string
    }

    const props = defineProps({
        faq: {
            type: Object as PropType<Faq>,
            required: true,
        }
    })
    
    const router = useRouter();
    const currentRoute = useRoute().fullPath;

    function goToFaq() {
        router.push({ path: currentRoute + "/" + props.faq.id })
    }
</script>

<template>
  <article @click="goToFaq" class="faq-card flex flex-col w-full py-4 px-4 bg-gray-100 text-gray-500 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-gray-200">
    <section class="flex text-center space-x-1  text-blue-500">
        <b-icon-star-fill class="h-3"/>
        <p class="text-xs font-semibold">Official answer</p>
    </section>
    <section class="py-4 px-2 w-full overflow-auto min-h-[90px] flex items-center justify-center">
        <p class=" text-lg text-center font-semibold">
            {{props.faq.question}}
        </p>
    </section>
    <section class="flex justify-between items-end content-center w-full">
        <div class="bg-green-200 rounded-lg py-1 px-1">
            <p class="text-xs font-medium text-green-500">{{ props.faq.label }}</p>
        </div>
        <div class="flex flex-col font-medium">
            <div class="py-1 px-2 flex text-center space-x-1 items-center">
                <vue-icon name="bi-chat-right-text-fill" class="mr-2"/>
                <p class="text-sm">2 answers</p>
            </div>
            <p class="text-xs px-2 text-end font-medium">{{ props.faq.date }}</p>
        </div>
    </section>
  </article>
</template>