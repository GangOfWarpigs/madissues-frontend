<script setup lang="ts">
    import { ref, watch, onMounted } from 'vue';
    import IssueCard from '../../../../../../../components/business/issues/IssueCard.vue';

    const issues = [
        {
            id: "1",
            title: "El profesor no me deja realizar la revisión del examen de arquitectura de computadores",
            description: "hola caracola",
            details: "",
            proofs: [],
            status: "Solved",
            date_time: "a minute ago",
            course: "Arquitectura de Computadores",    
            teachers: ["Domingo"],
            student: "josepenaseco101",
            comments_id: ["1", "2", "3", "4"]
        }, {
            id: "2",
            title: "El profesor no me deja realizar la revisión del examen de arquitectura de computadores",
            description: "hola caracola",
            details: "",
            proofs: [],
            status: "Queued",
            date_time: "a minute ago",
            course: "Arquitectura de Computadores",    
            teachers: ["Domingo", "Ricardo"],
            student: "josepenaseco101",
            comments_id: []
        },
        {
            id: "3",
            title: "El profesor es tonto",
            description: "hola caracola",
            details: "",
            proofs: [],
            status: "In progress",
            date_time: "a minute ago",
            course: "Estructura de Computadores",    
            teachers: ["Ricardo"],
            student: "josepenaseco101",
            comments_id: []
        }
    ];

    const queued = issues.filter(issue => issue.status === 'Queued');
    const solved = issues.filter(issue => issue.status === 'Solved');
    const statusOrder = ['Queued', 'In progress', 'Not solved', 'Solved'];

    const isCourseDesc = ref(true);
    const isTeacherDesc = ref(true);
    const isStatusDesc = ref(true);

    const searchQuery = ref('');

    const filteredIssues = ref(issues);

    watch(searchQuery, (newValue, _) => {
        const lowerCaseQuery = newValue.toLowerCase();
        filteredIssues.value = issues.filter(issue => issue.title.toLowerCase().includes(lowerCaseQuery));
    });

    function handleCourseOrder(toggle: boolean) {
        if (toggle) isCourseDesc.value = !isCourseDesc.value;
        const sortedIssues = [...filteredIssues.value];
        sortedIssues.sort((a, b) => {
            if (isCourseDesc.value) return a.course.localeCompare(b.course);
            else return b.course.localeCompare(a.course);
        });
        filteredIssues.value = sortedIssues;
    }

    function handleTeacherOrder(toggle: boolean) {
        if (toggle) isTeacherDesc.value = !isTeacherDesc.value;
        const sortedIssues = [...filteredIssues.value];
        sortedIssues.sort((a, b) => {
            if (isTeacherDesc.value) return a.teachers[0].localeCompare(b.teachers[0]);
            else return b.teachers[0].localeCompare(a.teachers[0]);
        });
        filteredIssues.value = sortedIssues;
    }

    function handleStatusOrder(toggle: boolean) {
        if (toggle) isStatusDesc.value = !isStatusDesc.value;
        const sortedIssues = [...filteredIssues.value];
        sortedIssues.sort((a, b) => {
            const indexA = statusOrder.indexOf(a.status);
            const indexB = statusOrder.indexOf(b.status);
            if (isStatusDesc.value) return indexA - indexB;
            else return indexB - indexA;
        });
        filteredIssues.value = sortedIssues;
    }

    onMounted(() => {
        handleCourseOrder(false);
        handleTeacherOrder(false);
        handleStatusOrder(false);
    });
</script>

<template>
    <div class="w-full flex flex-col">
        <div class="flex items-center mb-5">
            <div class="relative">
                <b-icon-search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input 
                    type="text" 
                    v-model="searchQuery" 
                    class="pl-10 pr-4 py-1 text-base rounded-full border border-gray-300 focus:outline-none focus:border-blue-500" 
                    placeholder="Search by title..." 
                />
            </div>
        </div>
        <div class="flex items-center justify-between px-2 text-gray-500 text-sm font-normal">
            <div class="flex items-center">
                <div class="flex items-center mr-4">
                    <b-icon-record-circle class="mr-2"></b-icon-record-circle>
                    <p>{{ queued.length }} Queued</p>
                </div>
                <div class="flex items-center">
                    <b-icon-check-circle class="mr-2"></b-icon-check-circle>
                    <p>{{ solved.length }} Solved</p>
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
    </div>
</template>