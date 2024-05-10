<script setup lang="ts">
    import IssueComment from './components/IssueComment.vue';
    import IssueDetails from './components/IssueDetails.vue';
    import CommentBox from './components/CommentBox.vue';
  
    const issue = {
        id: "1",
        title: "El profesor no me deja realizar la revisión del examen de arquitectura de computadores",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor non leo eget sagittis. " +
            "Etiam non felis placerat, scelerisque dolor non, rhoncus enim. Morbi sagittis consectetur dui at " +
            "venenatis. Aliquam at neque sed orci feugiat tincidunt id sed turpis. Etiam pulvinar hendrerit sapien," +
            " quis accumsan ipsum venenatis eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra," +
            " per inceptos himenaeos. Mauris vitae pharetra ligula, porta porta est.\n" +
            "Mauris eu erat mollis, pellentesque est sit amet, congue tortor. Duis quis volutpat lorem. Phasellus " +
            "at nulla a lorem pellentesque luctus. Praesent in libero quam. Maecenas in ipsum varius, scelerisque " +
            "neque eget, maximus ex. Donec et ultricies ipsum. Donec nec luctus elit, vel efficitur lorem. Aenean " +
            "vestibulum interdum sollicitudin. Donec mattis sapien ut ligula commodo rhoncus. Maecenas ac justo " +
            "vitae arcu elementum rhoncus sed nec metus. Nam pellentesque est tempor lectus ultricies, sed congue " +
            "mi pellentesque. Phasellus tempor consectetur viverra.",
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

    const goBack = () => {
      window.history.back();
    };
</script>

<template>
    <div class="flex flex-row">
      <button @click="goBack" class="flex items-center justify-center h-10 w-10 rounded-full bg-[#F5F5F5] hover:bg-gray-200 focus:outline-none translate-y-8 -translate-x-7">
        <b-icon-chevron-left class="text-[#828282] text-bg scale-[120%] -translate-x-0.5"/>
      </button>
      <IssueDetails :issue="issue"/>
    </div>
    <section class="w-full flex flex-col">
        <CommentBox />
        <IssueComment v-for="comment in comments" :comment="comment" />
    </section>
</template>