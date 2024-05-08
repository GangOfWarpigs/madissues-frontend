<script setup lang="ts">

import WriteIssueContent from "../issuesCreate/components/WriteIssueContent.vue";
import IssueProofs from "../issuesCreate/components/IssueProofs.vue";
</script>

<template>
  <main class="flex flex-col gap-10 ">
    <WriteIssueContent></WriteIssueContent>
    <IssueProofs></IssueProofs>
    <div class="flex justify-between text-white font-medium text-sm">
      <button class="rounded-lg bg-[#FF7D7D] py-1 px-5">
        Discard
      </button>
      <button class="rounded-lg bg-[#1986E3] py-1 px-5">
        Post the issue
      </button>
    </div>
  </main>

</template>

<style scoped>

</style>