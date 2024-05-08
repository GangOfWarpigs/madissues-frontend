<script setup lang="ts">
    import { PropType } from 'vue';

    interface FaqDetailsProps {
        id: string,
        date_time: string,
        title: string,
        content: string, 
        comments: string[]
    }

    const props = defineProps({
        faq: {
            type: Object as PropType<FaqDetailsProps>,
            required: true
        }
    })
</script>

<template>
    <article class="w-full flex flex-col text-gray-600">
        <section class="flex flex-col w-full">
            <h1 class="text-2xl font-semibold">{{ props.faq.title }}</h1>
            <h4 class="text-base font-semibold mt-1">Asked {{ props.faq.date_time }}</h4>
        </section>
        <section class="my-10">
            <p class="text-lg text-gray-500">
                {{ props.faq.content }}
            </p>
        </section>
        <section>
            <p class="text-base font-semibold">{{ props.faq.comments.length }} comments</p>
        </section>
    </article>
</template>

<style scoped>

</style>