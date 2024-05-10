<script setup lang="ts">
    import IssueComment from './components/IssueComment.vue';
    import IssueDetails from './components/IssueDetails.vue';
    import CommentBox from './components/CommentBox.vue';
  
    const issue = {
        id: "1",
        title: "El profesor no me deja realizar la revisión del examen de arquitectura de computadores",
        content: "hola caracola",
        proofs: ["a", "b", "c"],
        status: "Solved",
        date_time: "Today, 03:48 PM",
        course: "Arquitectura de Computadores",    
        teachers: ["Domingo"],
        student: "josepenaseco101",
        comments: ["1", "2"]
    }

    const comments = [
        {
            id: "1",
            author: "josepenaseco101",
            likes: ["2", "4"],
            content: "Tienes toda la razón a mí me pasa lo mismo bro",
            date_time: "1 minute ago",
            response_to: null
        }, {
            id: "2",
            author: "josepenaseco101",
            likes: ["2", "4"],
            content: "Tienes toda la razón a mí me pasa lo mismo bro",
            date_time: "1 minute ago",
            response_to: null
        } 
    ];
</script>

<template>
    <IssueDetails :issue="issue"/>
    <section class="w-full flex flex-col">
        <CommentBox />
        <IssueComment v-for="comment in comments" :comment="comment" />
    </section>
</template>