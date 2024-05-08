<script setup lang="ts">
    import SubjectCard from "./components/SubjectCard.vue";
    import SearchCourseNav from './components/SearchCourseNav.vue';
    import IssueCarousel from "./components/carousel/IssueCarousel.vue";
    import { ref } from "vue";

    const subjectCardData = [
        {
            icon: "",
            title: "Asignatura 1",
            primaryColor: "#1986E3",
            secondaryColor: "#978EFF",
            numOfIssues: 5,
            course: 1
        }, {
            icon: "",
            title: "Asignatura 2",
            primaryColor: "#1986E3",
            secondaryColor: "#978EFF",
            numOfIssues: 3,
            course: 2
        }, {
            icon: "",
            title: "Asignatura 3",
            primaryColor: "#1986E3",
            secondaryColor: "#978EFF",
            numOfIssues: 7,
            course: 1
        }, {
            icon: "",
            title: "Asignatura 4",
            primaryColor: "#1986E3",
            secondaryColor: "#978EFF",
            numOfIssues: 5,
            course: 3
        }, {
            icon: "",
            title: "Asignatura 5",
            primaryColor: "#1986E3",
            secondaryColor: "#978EFF",
            numOfIssues: 3,
            course: 3
        }, {
            icon: "",
            title: "Asignatura 6",
            primaryColor: "#1986E3",
            secondaryColor: "#978EFF",
            numOfIssues: 7,
            course: 4
        },
    ];
    
    const filteredSubjects = ref(subjectCardData);
    const years: number = 4;

    const updateFilteredSubjects = (course: number) => {
        if (course === 0) filteredSubjects.value = subjectCardData;
        else filteredSubjects.value = subjectCardData.filter(subject => subject.course === course);
    };
</script>
  
<template>
    <main class="w-full flex flex-col">
        <section class="w-full flex flex-col">
            <h1 class="text-3xl font-semibold self-center text-gray-700 select-none">Discover the most recent issues</h1>
            <IssueCarousel></IssueCarousel>
        </section>
        <section class="w-full flex flex-col justify-start items-center mt-14 min-h-[36rem]">
            <h1 class="text-3xl font-semibold text-gray-700 select-none">Search by course</h1>
            <SearchCourseNav :years="years" @updatedFilter="updateFilteredSubjects"/>
            <div class="w-full grid grid-cols-4 mt-10 gap-5">
                <SubjectCard v-for="subject in filteredSubjects" :key="subject.title" :subjectCard="subject"/>
            </div>
        </section>
    </main>
</template>