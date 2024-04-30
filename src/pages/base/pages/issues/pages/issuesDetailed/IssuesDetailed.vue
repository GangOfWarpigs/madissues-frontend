<script setup lang="ts">
  import IssueComment from './components/IssueComment.vue';

  const commentData1 = {
    id: "1",
    author: "josepenaseco101",
    likes: ["2", "4"],
    content: "Tienes toda la razón a mí me pasa lo mismo bro",
    date_time: "1 minute ago",
    response_to: null
  } 
  const commentData2 = {
    id: "1",
    author: "josepenaseco101",
    likes: ["2", "4"],
    content: "Tienes toda la razón a mí me pasa lo mismo bro",
    date_time: "1 minute ago",
    response_to: null
  } 
</script>

<template>
  this is issues detailed
  <section class="mx-40">
    <IssueComment :comment="commentData1" />
    <IssueComment :comment="commentData2"/>
  </section>
  
</template>

<style scoped>

</style>