<script setup lang="ts">
    import { PropType } from 'vue';
    import { Issue } from '../../../domain/issue';
    import { useRouter, useRoute } from 'vue-router'
    
    const props = defineProps({
        issue: {
            type: Object as PropType<Issue>,
            required: true
        }
    });

    const router = useRouter();
    const currentRoute = useRoute().fullPath;

    function goToIssue() {
        router.push({ path: currentRoute + "/" + props.issue.id })
    }
</script>

<template>
    <article @click="goToIssue" class="flex w-full px-8 py-5 bg-gray-100 rounded-lg mt-5 text-slate-600 cursor-pointer hover:shadow-lg hover:shadow-gray-200">
        <b-icon-record-circle class="text-teal-500 text-2xl mr-6" :class="[ props.issue.state === 'Queued' ? 'block' : 'hidden']"/>
        <b-icon-arrow-right-circle class="text-amber-500 text-2xl mr-6" :class="[ props.issue.state === 'In progress' ? 'block' : 'hidden']"/>
        <b-icon-check-circle class="text-green-500 text-2xl mr-6" :class="[ props.issue.state === 'Solved' ? 'block' : 'hidden']"/>
        <b-icon-x-circle class="text-rose-500 text-2xl mr-6" :class="[ props.issue.state === 'Not solved' ? 'block' : 'hidden']"/>
        <div class="flex flex-col w-full">
            <section class="flex items-center justify-between w-100">
                <h1 class="font-semibold text-lg max-w-6xl whitespace-nowrap text-ellipsis overflow-hidden">{{ props.issue.question }}</h1>
                <div class="flex text-slate-400 items-center text-center justify-center">
                    <b-icon-chat-left-text-fill/>
                    <p class="ml-2 mb-1">{{ props.issue.comments }}</p>
                </div>
            </section>
            <section class="flex items-end justify-between w-100 mt-5">
                <div class="flex items-center text-slate-500">
                    <img class="w-12 border-2 border-white rounded-full" src="../../../assets/images/profile_picture_test.png" alt="Foto de perfil del usuario"/>
                    <div class="flex flex-col mx-4 mb-2">
                        <h2 class="font-semibold text-base">{{ props.issue.username }}</h2>
                        <p class="text-xs">{{ props.issue.useryear }}</p>
                    </div>
                    <p class="text-xs">{{ props.issue.date }}</p>
                </div>
                <div class="flex items-center">
                    <p class="text-sm font-semibold bg-green-100 text-green-500 px-2 py-1 rounded-md mr-4">{{ props.issue.subject }}</p>
                    <p class="text-sm font-semibold bg-rose-100 text-rose-500 px-2 py-1 rounded-md">{{ props.issue.teacher }}</p>
                </div>
            </section>
        </div>
    </article>
</template>

<style scoped>

</style>