<script setup lang="ts">
  import PageBanner from "../../../../../../components/shared/PageBanner.vue";
  import IssueCard from "../../../../../../components/business/issues/IssueCard.vue";

  const issueData1 = {
    id: "1",
    question: "El profesor no me deja realizar la revisión del examen de arquitectura de computadores",
    state: "Solved",
    comments: 7,
    teacher: "Domingo",
    subject: "Arquitectura de Computadores",
    username: "Jose Peña Seco",
    useryear: "3rd year",
    date: "a minute ago"
  }

  const issueData2 = {
    id: "2",
    question: "El profesor no me deja realizar la revisión del examen de arquitectura de computadores",
    state: "Queued",
    comments: 7,
    teacher: "Domingo",
    subject: "Arquitectura de Computadores",
    username: "Jose Peña Seco",
    useryear: "3rd year",
    date: "a minute ago"
  }
</script>

<template>
  this is issues list
  <div class="mx-16">
    <PageBanner title="Incidents" subtitle="Here you can report an incident" primaryColor="#1986E3"
                secondaryColor="#978EFF" current-page="issues"></PageBanner>
    <IssueCard :issue="issueData1"/>
    <IssueCard :issue="issueData2"/>
  </div>
</template>

<style scoped>

</style>