<script setup lang="ts">
    import { PropType, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { useQuery } from '@tanstack/vue-query';
    import { getOrganizationById } from '../../../../../../../api/organizations';

    const route = useRoute();
    const organizationId = route.params["organization_id"] as string;

    const { data } = useQuery({
        queryKey: ["organizations", organizationId],
        queryFn: async () => await getOrganizationById(organizationId)
    });

    interface FaqCommentProps {
        id: string,
        isOfficial: boolean,
        author: string,
        likes: string[],
        marks: string[],
        content: string,
        date_time: string,
    }

    const props = defineProps({
        comment: {
            type: Object as PropType<FaqCommentProps>,
            required: true
        }
    })

    let student_id: string = "1";
    let student = "Jose Peña Seco";

    let liked = ref(false);
    let likes = ref(props.comment.likes);

    let marked = ref(false);
    let marks = ref(props.comment.marks);

    function toggleLike() {
        liked.value = !liked.value;
        if (liked.value) likes.value.push(student_id);
        else likes.value = likes.value.filter(item => item !== student_id);
        props.comment.likes = likes.value;
    }

    function toggleBookmark() {
        marked.value = !marked.value;
        if (marked.value) marks.value.push(student_id);
        else marks.value = marks.value.filter(item => item !== student_id);
        props.comment.marks = marks.value;
    }
</script>

<template>
    <article class="rounded-2xl flex flex-col w-full mt-8 px-10 py-5 bg-gray-100 text-gray-500" :class="[ props.comment.isOfficial == true ? 'border-2' : '']" :style="{ borderColor: data?.primary_color }">
        <section class="flex items-center mb-3" v-if="props.comment.isOfficial" :style="{ color: data?.primary_color }">
            <b-icon-star-fill></b-icon-star-fill>
            <p class="ml-3 font-semibold">Official answer</p>
        </section>
        <section class="flex items-center">
            <img class="w-8 rounded-full mr-3 select-none" src="../../../../../../../assets/images/default-avatar.webp" alt="Foto de perfil del usuario"/>
            <h3 class="font-semibold text-sm mr-4">{{ student }}</h3>
            <p class="text-xs">Commented {{ props.comment.date_time }}</p>
        </section>
        <p class="w-full my-3 text-base">{{ props.comment.content }}</p>
        <section class="w-full flex items-center justify-start">
            <div class="flex items-center mr-4">
                <b-icon-heart @click="toggleLike" class="text-gray-600 cursor-pointer hover:scale-110 active:scale-100" role="alert" v-if="!liked"></b-icon-heart>
                <b-icon-heart-fill @click="toggleLike" class="text-gray-600 cursor-pointer hover:scale-110 active:scale-100" role="alert" v-if="liked"></b-icon-heart-fill>
                <p role="alert" class="ml-2 select-none">{{ likes.length }}</p>
            </div>
            <div class="flex items-center">
                <b-icon-bookmark @click="toggleBookmark" class="text-gray-600 cursor-pointer hover:scale-110 active:scale-100" role="alert" v-if="!marked"></b-icon-bookmark>
                <b-icon-bookmark-fill @click="toggleBookmark" class="text-gray-600 cursor-pointer hover:scale-110 active:scale-100" role="alert" v-if="marked"></b-icon-bookmark-fill>
                <p role="alert" class="ml-2 select-none">{{ marks.length }}</p>
            </div>
        </section>
    </article>
</template>

<style scoped>

</style>