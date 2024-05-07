<script setup lang="ts">
    import { PropType } from 'vue';
    import { useRouter, useRoute } from 'vue-router';

    export interface IssueCardProps {
        id: string,
        title: string,
        description: string,
        details: string,
        proofs: string[],
        status: string,
        date_time: string,
        course: string,
        teachers: string[],
        student: string,
        comments_id?: string[]
    }

    const props = defineProps({
        issue: {
            type: Object as PropType<IssueCardProps>,
            required: true
        }
    });

    const router = useRouter();
    const currentRoute = useRoute().fullPath;

    let student_name: string = "Jose Peña Seco"
    let student_year: string = "3er year"

    function goToIssue() {
        router.push({ path: currentRoute + "/" + props.issue.id })
    }
</script>

<template>
    <article @click="goToIssue" class="flex w-full px-8 py-5 bg-gray-100 rounded-xl mt-5 text-slate-600 cursor-pointer hover:shadow-sm hover:shadow-[#f5f5f5c9] transition-all">
        <b-icon-record-circle class="text-teal-500 text-2xl mr-6" :class="[ props.issue.status === 'Queued' ? 'block' : 'hidden']"/>
        <b-icon-arrow-right-circle class="text-amber-500 text-2xl mr-6" :class="[ props.issue.status === 'In progress' ? 'block' : 'hidden']"/>
        <b-icon-check-circle class="text-green-500 text-2xl mr-6" :class="[ props.issue.status === 'Solved' ? 'block' : 'hidden']"/>
        <b-icon-x-circle class="text-rose-500 text-2xl mr-6" :class="[ props.issue.status === 'Not solved' ? 'block' : 'hidden']"/>
        <div class="flex flex-col w-full">
            <section class="flex items-center justify-between w-100">
                <h1 class="font-semibold text-base max-w-6xl whitespace-nowrap text-ellipsis overflow-hidden">{{ props.issue.title }}</h1>
                <div class="flex text-slate-400 items-center text-center justify-center">
                    <b-icon-chat-left-text-fill/>
                    <p class="ml-2 mb-1">{{ props.issue.comments_id != null ? props.issue.comments_id.length : 0 }}</p>
                </div>
            </section>
            <section class="flex items-end justify-between w-100 mt-5">
                <div class="flex items-center text-slate-500">
                    <img class="w-12 border-2 border-white rounded-full" src="../../../assets/images/profile_picture_test.png" alt="Foto de perfil del usuario"/>
                    <div class="flex flex-col mx-4 mb-2">
                        <h2 class="font-semibold text-base">{{ student_name }}</h2>
                        <p class="text-xs">{{ student_year }}</p>
                    </div>
                    <p class="text-xs">{{ props.issue.date_time }}</p>
                </div>
                <div class="flex items-center">
                    <p class="text-sm font-semibold bg-green-100 text-green-500 px-2 py-1 rounded-md mr-4">{{ props.issue.course }}</p>
                    <p v-for="(teacher, _) in props.issue.teachers" class="text-sm font-semibold bg-rose-100 text-rose-500 px-2 py-1 rounded-md mr-4 last:mr-0">
                        {{ teacher }}
                    </p>
                </div>
            </section>
        </div>
    </article>
</template>

<style scoped>

</style>