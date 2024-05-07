<script setup lang="ts">
  import PageBanner from "../../../../../../components/shared/PageBanner.vue";
  import IssueCard from "../../../../../../components/business/issues/IssueCard.vue";

  const userData = {
    first_name: "Jose Ricardo",
    last_name: "Peña Seco",
    degree: "Ingeniería Informática",
    last_school_year: "4th year",
    email: "jose.pena101@alu.ulpgc.es"
  }

  const pageProps = {
    title: "Incidents",
    subtitle: "Here you can report an incident",
    primaryColor: "#1986E3",
    secondaryColor: "#978EFF", 
    currentPage: "issues"
  }

  const issueData1 = {
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
  }

  const issueData2 = {
    id: "1",
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
  }
</script>

<template>
  <PageBanner :data="pageProps" :user="userData"></PageBanner>
  <IssueCard :issue="issueData1"/>
  <IssueCard :issue="issueData2"/>
</template>

<style scoped>

</style>