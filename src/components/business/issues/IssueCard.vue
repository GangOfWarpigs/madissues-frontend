<script setup lang="ts">
    import { PropType } from 'vue';
    import { useRouter, useRoute } from 'vue-router';

    export interface IssueCardProps {
        //id: string,
        title: string,
        description: string,
        details: string,
        proofs: string[],
        status: string,
        date_time: string,
        course: string,
        teachers: string[],
        student: string,
        //comments_id: string[]
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
    <article @click="goToIssue" class="flex w-full px-8 py-5 bg-gray-100 rounded-xl text-gray-600 cursor-pointer hover:shadow-md transition-all hover:shadow-slate-200">
        <vue-icon name="bi-record-circle-fill" scale="1.3" class="text-teal-500 text-2xl mr-6" v-if="props.issue.status === 'Queued'"/>
        <vue-icon name="bi-arrow-right-circle-fill"  scale="1.3"  class="text-amber-500 text-2xl mr-6" v-if="props.issue.status === 'In progress'"/>
        <vue-icon name="bi-check-circle-fill"  scale="1.3" class="text-emerald-500 text-2xl mr-6" v-if="props.issue.status === 'Solved'"/>
        <vue-icon name="bi-x-circle-fill" scale="1.3"  class="text-rose-500 text-2xl mr-6" v-if="props.issue.status === 'Not solved'"/>
        <div class="flex flex-col w-full">
            <section class="flex items-center justify-between w-100">
                <h3 class="font-semibold text-lg max-w-6xl whitespace-nowrap text-ellipsis overflow-hidden">{{ props.issue.title }}</h3>
                <div class="flex text-gray-400 items-center text-center justify-center">
                    <b-icon-chat-left-text-fill/>
                    <!--<p class="ml-2 mb-1">{{ props.issue.comments_id.length }}</p>-->
                </div>
            </section>
            <section class="flex items-end justify-between w-100 mt-4">
                <div class="flex items-center text-gray-500">
                    <img class="w-10 border-2 border-white rounded-full" src="../../../assets/images/profile_picture_test.webp" alt="Foto de perfil del usuario"/>
                    <div class="flex flex-col mx-4 mb-2">
                        <p class="font-semibold text-base">{{ student_name }}</p>
                        <p class="text-xs">{{ student_year }}</p>
                    </div>
                    <p class="text-xs">{{ props.issue.date_time }}</p>
                </div>
                <div class="flex items-center text-xs font-semibold space-x-2">
                    <p class="bg-purple-200 text-purple-600 px-3 py-1 rounded">{{ props.issue.course }}</p>
                    <p v-for="(teacher, _) in props.issue.teachers" class="bg-rose-200 text-rose-600 rounded px-3 py-1">
                        {{ teacher }}
                    </p>
                </div>
            </section>
        </div>
    </article>
</template>