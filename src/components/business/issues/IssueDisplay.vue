<script setup lang="ts">
    import { ref, watch, onMounted } from 'vue';
    import IssueCard from './IssueCard.vue';
    import { Issue } from '../../../api/organizations';
    import Empty from '../../shared/Empty.vue';


    const {issues} = defineProps<{issues: Issue[] | undefined}>()

    const queued = issues?.filter(issue => issue.status === 'Queued');
    const solved = issues?.filter(issue => issue.status === 'Solved');

    const statusOrder = ['Queued', 'In progress', 'Not solved', 'Solved'];
    const isCourseDesc = ref(true);
    const isTeacherDesc = ref(true);
    const isStatusDesc = ref(true);

    const searchQuery = ref('');

    const filteredIssues = ref(issues);

    watch(searchQuery, (newValue, _) => {
        const lowerCaseQuery = newValue.toLowerCase();
        filteredIssues.value = issues?.filter(issue => issue.title.toLowerCase().includes(lowerCaseQuery));
    });

    function handleCourseOrder(toggle: boolean) {
        if (filteredIssues === undefined) return;
        if (toggle) isCourseDesc.value = !isCourseDesc.value;
        const sortedIssues = [...filteredIssues.value as Issue[]];
        sortedIssues.sort((a, b) => {
            if (isCourseDesc.value) return a.course.localeCompare(b.course);
            else return b.course.localeCompare(a.course);
        });
        filteredIssues.value = sortedIssues;
    }

    function handleTeacherOrder(toggle: boolean) {
        if (filteredIssues === undefined || filteredIssues?.value?.length === 0) return;
        if (toggle) isTeacherDesc.value = !isTeacherDesc.value;
        const sortedIssues = [...filteredIssues.value as Issue[]];
        sortedIssues.sort((a, b) => {
            if (isTeacherDesc.value) {
                if (a.teachers.length === 0) return -1;
                else if (b.teachers.length === 0) return 1;
                else return a.teachers[0].localeCompare(b.teachers[0]);
            } else {
                if (b.teachers.length === 0) return -1;
                else if (a.teachers.length === 0) return 1;
                else return b.teachers[0].localeCompare(a.teachers[0]);
            }
        });
        filteredIssues.value = sortedIssues;
    }

    function handleStatusOrder(toggle: boolean) {
        if (filteredIssues === undefined) return;
        if (toggle) isStatusDesc.value = !isStatusDesc.value;
        const sortedIssues = [...filteredIssues.value as Issue[]];
        sortedIssues.sort((a, b) => {
            const indexA = statusOrder.indexOf(a.status);
            const indexB = statusOrder.indexOf(b.status);
            if (isStatusDesc.value) return indexA - indexB;
            else return indexB - indexA;
        });
        filteredIssues.value = sortedIssues;
    }

    function loadMore() {
        // aquí se escribe la lógica para cargar más issues
    }

    onMounted(() => {
        handleCourseOrder(false);
        handleTeacherOrder(false);
        handleStatusOrder(false);
    });
</script>

<template>
    <div class="w-full flex flex-col">
        <div class="flex items-center mb-4">
            <div class="relative">
                <vue-icon name="io-search" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input 
                    type="text" 
                    v-model="searchQuery" 
                    class="pl-10 pr-4 text-base rounded-full focus:outline-none focus:border-blue-500 bg-gray-100 py-2" 
                    placeholder="Search by title..." 
                />
            </div>
        </div>
        <div class="flex items-center justify-between px-2 text-gray-400 text-sm font-normal">
            <div class="flex items-center">
                <div class="flex items-center mr-4">
                    <vue-icon name="bi-record-circle-fill"/>
                    <p class="ml-2" >{{ queued?.length }} Queued</p>
                </div>
                <div class="flex items-center">
                    <vue-icon name="bi-check-circle-fill"/>
                    <p class="ml-2">{{ solved?.length }} Solved</p>
                </div>
            </div>
            <div class="flex items-center">
                <div class="flex items-center mr-5 cursor-pointer select-none" @click="handleCourseOrder(true)">
                    <p class="mr-1">Subject</p>
                    <b-icon-caret-down-fill class="text-xs" v-if="isCourseDesc"></b-icon-caret-down-fill>
                    <b-icon-caret-up-fill class="text-xs" v-if="!isCourseDesc"></b-icon-caret-up-fill>
                </div>
                <div class="flex items-center mr-5 cursor-pointer select-none" @click="handleTeacherOrder(true)">
                    <p class="mr-1">Teacher</p>
                    <b-icon-caret-down-fill class="text-xs" v-if="isTeacherDesc"></b-icon-caret-down-fill>
                    <b-icon-caret-up-fill class="text-xs" v-if="!isTeacherDesc"></b-icon-caret-up-fill>
                </div>
                <div class="flex items-center cursor-pointer select-none" @click="handleStatusOrder(true)">
                    <p class="mr-1">Status</p>
                    <b-icon-caret-down-fill class="text-xs" v-if="isStatusDesc"></b-icon-caret-down-fill>
                    <b-icon-caret-up-fill class="text-xs" v-if="!isStatusDesc"></b-icon-caret-up-fill>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col space-y-4 mt-4">
            <IssueCard v-for="issue in filteredIssues" :key="issue.id" :issue="issue" />
        </div>
        <div class="w-full flex flex-col justify-center items-center mt-10" v-if="filteredIssues?.length! > 10">
            <button class="border rounded-lg px-5 py-2 font-semibold" @click="loadMore">Load more</button>
        </div>
        <Empty item="issues" v-if="filteredIssues?.length! == 0"></Empty>
    </div>
</template>