<script setup lang="ts">
    import { PropType, ref } from 'vue';

    interface IssueCommentProps {
        id: string,
        author: string,
        likes: string[],
        content: string,
        date_time: string,
        response_to: string | null
    } 

    const props = defineProps({
        comment: {
            type: Object as PropType<IssueCommentProps>,
            required: true
        }
    })

    const liked = ref(false);
    const likes = ref(props.comment.likes);
    let student_id: string = "1";
    let student: string = "Jose Peña Seco";

    function toggleLike() {
        liked.value = !liked.value;
        if (liked.value) likes.value.push(student_id);
        else likes.value = likes.value.filter(item => item !== student_id);
        props.comment.likes = likes.value;
    }
</script>

<template>
    <article class="flex flex-col w-full mt-5 py-5 px-8 bg-gray-100 rounded-lg text-gray-500 hover:shadow-gray-200 relative">
        <section class="flex items-center">
            <div class="flex items-center mr-4">
                <img class="w-9 border-2 border-white rounded-full mr-3 select-none" src="../../../../../../../assets/images/profile_picture_test.png" alt="Foto de perfil del usuario"/>
                <h3 class="font-semibold text-sm">{{ student }}</h3>
            </div>
            <p class="text-xs">Commented {{ props.comment.date_time }}</p>
        </section>
        <p class="mt-3 text-base w-4/5">
            {{ props.comment.content }}
        </p>
        <div class="flex items-center absolute bottom-4 right-6">
            <div class="flex items-center mt-px mr-5">
                <p role="alert" class="mr-2 select-none">{{ likes.length }}</p>
                <b-icon-heart-fill @click="toggleLike" class="text-gray-600 cursor-pointer hover:scale-110 active:scale-100" role="alert" v-if="liked"></b-icon-heart-fill>
                <b-icon-heart @click="toggleLike"class="text-gray-600 cursor-pointer hover:scale-110 active:scale-100" role="alert" v-if="!liked"></b-icon-heart>
            </div>
            <b-icon-chat @click="$emit('openCommentBox')" class="text-gray-600 cursor-pointer hover:scale-110 active:scale-100"></b-icon-chat>
        </div>
    </article>
</template>

<style scoped>
</style>