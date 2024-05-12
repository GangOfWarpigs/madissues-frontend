<script setup lang="ts">
    import { PropType } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import { Issue } from '../../../../../../api/organizations';

    const router = useRouter();
    const currentRoute = useRoute().fullPath;

    const props = defineProps({
        issue: {
            type: Object as PropType<Issue>,
            required: true
        }
    });

    function goToIssue() {
        let splittedRoute = currentRoute.split('/');
        splittedRoute[splittedRoute.length - 1] = "issues";
        let baseRoute = splittedRoute.join('/');
        router.push({ path: baseRoute + "/" + props.issue.id })
    }
</script>

<template>
    <article @click="goToIssue" class="flex flex-col w-[30rem] px-8 py-5 bg-gray-100 rounded-xl mt-5 text-gray-600 cursor-pointer">
        <h1 class="font-semibold text-xl max-w-full line-clamp-2 min-h-12 text-ellipsis overflow-hidden text-start">{{ props.issue.title }}</h1>
        <section class="my-6 flex items-center justify-between w-full">
            <div class="flex items-center text-start">
                <img class="w-10 rounded-full" src="../../../../../../assets/images/default-avatar.webp" alt="Foto de perfil del usuario"/>
                <div class="flex flex-col ml-4">
                    <h2 class="font-semibold text-base">{{ props.issue.student.name }}</h2>
                    <p class="text-xs">Studying since {{ props.issue.student.year }}</p>
                </div>
            </div>
            <p class="text-xs">{{ props.issue.date_time }}</p>
        </section>
        <div class="flex items-center w-full overflow-hidden space-x-2">
            <p class="text-xs text-start font-semibold bg-purple-200 text-purple-600 px-2 py-1 rounded">{{ props.issue.course }}</p>
            <p v-for="(teacher, _) in props.issue.teachers" class="text-xs text-start font-semibold bg-rose-200 text-rose-600 px-2 py-1 rounded">
                {{ teacher }}
            </p>
        </div>
    </article>
</template>