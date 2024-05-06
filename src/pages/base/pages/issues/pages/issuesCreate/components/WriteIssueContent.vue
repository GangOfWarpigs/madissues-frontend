<script setup lang="ts">

import IssueInput from "../components/IssueInput.vue";
import IssueTextArea from "../components/IssueTextArea.vue";
</script>

<template>
  <section class="bg-[#F5F5F5] rounded-2xl flex flex-col w-full px-10 py-10 font-medium text-[#404040] text-sm">
    <div class="w-full">
      <p class="rounded-2xl">Title</p>
      <IssueInput placeholder="e.g. It is possible to vote to change the date of an exam?"/>
    </div>
    <div>
      <p class="rounded-2xl">Description</p>
      <IssueTextArea placeholder="aosdi"></IssueTextArea>
    </div>
    <div>
      <p class="rounded-2xl">Subject</p>
      <IssueInput placeholder="e.g. It is possible to vote to change the date of an exam?"></IssueInput>
    </div>
    <div>
      <p class="rounded-2xl">Teachers Implicated</p>

    </div>
  </section>
</template>

<style scoped>

</style>