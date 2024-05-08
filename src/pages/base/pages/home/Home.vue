<script setup lang="ts">
    import SubjectCard from "./components/SubjectCard.vue";
    import SearchCourseNav from './components/SearchCourseNav.vue';
    import IssueCarousel from "./components/carousel/IssueCarousel.vue";
    import {ref} from "vue";

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
    <div class="w-full mb-10">
        <IssueCarousel></IssueCarousel>
    </div>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <SearchCourseNav :years="years" @updatedFilter="updateFilteredSubjects"/>
    </div>
    <div class="w-full grid grid-cols-4 mt-4 gap-4">
        <SubjectCard v-for="subject in filteredSubjects" :key="subject.title" :subjectCard="subject" />
    </div>
</template>