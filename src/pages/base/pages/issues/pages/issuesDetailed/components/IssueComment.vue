<script setup lang="ts">
    import { PropType } from 'vue';

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
        },
        replies: {
            type: Object as PropType<IssueCommentProps[]>,
            required: true
        }
    })

    let student: string = "Jose Peña Seco";
</script>

<template>
    <article class="flex flex-col w-full my-5 py-8 px-12 bg-gray-100 rounded-lg text-slate-500 cursor-pointer hover:shadow-lg hover:shadow-gray-200">
        <section class="flex items-center">
            <div class="flex items-center mr-4">
                <img class="w-9 border-2 border-white rounded-full mr-3" src="../../../../../../../assets/images/profile_picture_test.png" alt="Foto de perfil del usuario"/>
                <h3 class="font-semibold text-sm">{{ student }}</h3>
            </div>
            <p class="text-xs">Commented {{ props.comment.date_time }}</p>
        </section>
        <p class="w-full mt-5 text-base">
            {{ props.comment.content }}
        </p>
    </article>
</template>

<style scoped>
</style>