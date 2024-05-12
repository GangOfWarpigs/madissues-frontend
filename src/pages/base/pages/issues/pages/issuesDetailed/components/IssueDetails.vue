<script setup lang="ts">
    import { PropType, computed } from 'vue';
    import { Issue } from '../../../../../../../api/organizations';
    import { baseURL } from '../../../../../../../api/client';

    const props = defineProps({
        issue: {
            type: Object as PropType<Issue>,
            required: true
        }
    })

    const proofs = computed((() => {
        if (props.issue !== undefined) return props.issue.proofs;
        return []
    }))

    const status = computed((() => {
        if (props.issue !== undefined) return props.issue.status;
        return ''
    }));

    const color = computed((() => {
        if (status.value === '') return '';
        if (status.value === "Not solved") return "text-rose-500"
        else if (status.value === "In progress") return "text-amber-500"
        else if (status.value === "Solved") return "text-green-500" 
        else return "text-teal-500";
    }))
</script>

<template>
    <article class="w-full flex flex-col text-gray-600">
        <div class="flex items-center text-lg mb-3" :class="color">
            <b-icon-record-circle-fill v-if="status === 'Queued'"/>
            <b-icon-arrow-right-circle-fill v-if="status === 'In progress'"/>
            <b-icon-check-circle-fill v-if="status === 'Solved'"/>
            <b-icon-x-circle-fill v-if="status === 'Not solved'"/>
            <p class="ml-2 text-base">{{ status }}</p>
        </div>
        <section class="flex flex-col w-full">
            <h1 class="text-2xl font-semibold">{{ props.issue.title }}</h1>
            <h4 class="text-base font-semibold mt-1">Asked {{ props.issue.date_time }}</h4>
        </section>
        <section class="my-5 space-y-4">
            <p class="text-lg text-gray-500 text-justify">
                {{ props.issue.description }}
            </p>
            <div v-html="props.issue.details"></div>
        </section>
        <section class="w-full flex flex-col justify-center">
            <p class="text-base font-semibold">Proofs</p>
            <div class="w-full flex flex-wrap items-center">
                <img 
                    v-for="(image, index) in proofs" 
                    @click="$emit('openImage', index)" 
                    class="w-72 h-auto mr-5 mt-5 cursor-pointer rounded-lg hover:shadow-lg hover:shadow-gray-200" 
                    :src="baseURL + '/media/issues/' + image" 
                    alt="Foto de una prueba"/>
            </div>
        </section>
        <section class="mb-5 mt-10">
            <p class="text-base font-semibold">Comments</p>
        </section>
    </article>
</template>