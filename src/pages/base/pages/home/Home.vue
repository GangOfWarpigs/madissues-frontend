<script setup lang="ts">
  import SubjectCard from "./components/SubjectCard.vue";
  import SearchCourseNav from './components/SearchCourseNav.vue';
  import IssueCarousel from "./components/carousel/IssueCarousel.vue";
  import {ref} from "vue";

  const n_years: number = 4;

  const subjectCardData = [
    {
      icon: "",
      title: "Asignatura 1",
      primaryColor: "#1986E3",
      secondaryColor: "#978EFF",
      numOfIssues: 5,
      course: 1
    },
    {
      icon: "",
      title: "Asignatura 2",
      primaryColor: "#1986E3",
      secondaryColor: "#978EFF",
      numOfIssues: 3,
      course: 2
    },
    {
      icon: "",
      title: "Asignatura 3",
      primaryColor: "#1986E3",
      secondaryColor: "#978EFF",
      numOfIssues: 7,
      course: 1
    },
    {
      icon: "",
      title: "Asignatura 4",
      primaryColor: "#1986E3",
      secondaryColor: "#978EFF",
      numOfIssues: 5,
      course: 3
    },
    {
      icon: "",
      title: "Asignatura 5",
      primaryColor: "#1986E3",
      secondaryColor: "#978EFF",
      numOfIssues: 3,
      course: 3
    },
    {
      icon: "",
      title: "Asignatura 6",
      primaryColor: "#1986E3",
      secondaryColor: "#978EFF",
      numOfIssues: 7,
      course: 4
    },
    // Agrega más datos de asignaturas según sea necesario
  ];
  const filteredSubjects = ref(subjectCardData);

  const updateFilteredSubjects = (course: number) => {
    if (course === 0) {
      // Si se selecciona "All courses", mostramos todas las asignaturas
      filteredSubjects.value = subjectCardData;
    } else {
      // Filtramos las asignaturas según el curso seleccionado
      filteredSubjects.value = subjectCardData.filter(subject => subject.course === course);
    }
  };
</script>
  
<template>
    <div class="w-full mb-10">
      <IssueCarousel></IssueCarousel>
    </div>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <SearchCourseNav :n_years="n_years" @updatedFilter="updateFilteredSubjects"/>
    </div>
    <div class="w-full grid grid-cols-4 mt-4 gap-4">
        <SubjectCard v-for="subject in filteredSubjects" :key="subject.title" :subjectCard="subject" />
    </div>
</template>

<style scoped>
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}

.m-2 {
  margin: 0.5rem;
}

@media (max-width: 768px) {
  .m-2 {
    max-width: calc(20% - 1rem);
  }
}

@media (max-width: 576px) {
  .m-2 {
    max-width: calc(33.33% - 1rem);
  }
}
</style>