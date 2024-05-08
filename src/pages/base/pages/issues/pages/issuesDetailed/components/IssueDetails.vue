<script setup lang="ts">
    import { PropType, ref } from 'vue';

    interface IssueDetailsProps {
        id: string,
        date_time: string,
        title: string,
        content: string, 
        comments: string[],
        proofs: string[],
        status: string, 
        course: string,
        teachers: string[],
        student: string    
    }

    const props = defineProps({
        issue: {
            type: Object as PropType<IssueDetailsProps>,
            required: true
        }
    })

    const proofs: string[] = props.issue.proofs;

    const status = ref(props.issue.status);
    let color: string = "text-teal-500";
    if (status.value == "Not solved") color = "text-rose-500"
    else if (status.value == "In progress") color = "text-amber-500"
    else if (status.value == "Solved") color = "text-green-500"
</script>

<template>
    <article class="w-full flex flex-col text-gray-600">
        <div class="flex items-center text-lg mb-3" :class="color">
            <b-icon-record-circle v-if="status === 'Queued'"/>
            <b-icon-arrow-right-circle v-if="status === 'In progress'"/>
            <b-icon-check-circle v-if="status === 'Solved'"/>
            <b-icon-x-circle v-if="status === 'Not solved'"/>
            <p class="ml-2 text-base">{{ status }}</p>
        </div>
        <section class="flex flex-col w-full">
            <h1 class="text-2xl font-semibold">{{ props.issue.title }}</h1>
            <h4 class="text-base font-semibold mt-1">Asked {{ props.issue.date_time }}</h4>
        </section>
        <section class="my-10">
            <p class="text-lg text-gray-500">
                {{ props.issue.content }}
            </p>
        </section>
        <section class="w-full flex flex-col justify-center">
            <p class="text-base font-semibold">Proofs</p>
            <div class="w-full flex flex-wrap items-center">
                <img v-for="(_, index) in proofs" @click="$emit('openImage', index)" class="w-72 h-auto mr-5 mt-5 cursor-pointer rounded-lg hover:shadow-lg hover:shadow-gray-200" src="../../../../../../../assets/images/proofs_test.webp" alt="Foto de una prueba"/>
            </div>
        </section>
        <section class="mb-5 mt-10">
            <p class="text-base font-semibold">{{ props.issue.comments.length }} comments</p>
        </section>
    </article>
</template>

<style scoped>

</style>