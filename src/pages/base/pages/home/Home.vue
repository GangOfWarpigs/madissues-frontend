<script setup lang="ts">
  import SubjectCard from "./components/SubjectCard.vue";
  import SearchCourseNav from './components/SearchCourseNav.vue';

  const n_years: number = 4;

  const subjectCardData = {
    icon: "",
    title: "Aquí va el título de la asignatura",
    primaryColor: "#1986E3",
    secondaryColor: "#978EFF",
    numOfIssues: 0
  }
</script>
  
<template>
    <p>this is the home</p>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <SearchCourseNav :n_years="n_years"/>
    </div>
    <div class="w-full p-14">
        <SubjectCard :subjectCard="subjectCardData" />
    </div>
</template>

<style scoped>

</style>