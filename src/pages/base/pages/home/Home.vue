<script setup lang="ts">
  import SubjectCard from "./components/SubjectCard.vue";
  import SearchCourseNav from './components/SearchCourseNav.vue';

  const n_years: number = 4;
</script>
  
<template>
    <p>this is the home</p>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <SearchCourseNav :n_years="n_years"/>
    </div>
    <div class="w-full p-14">
        <SubjectCard title="Fundamentos Fisicos de la Informatica" num-of-issues="4"/>
    </div>
</template>

<style scoped>

</style>