<script setup lang="ts">
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
    import IssueCardSmall from './IssueCarouselCard.vue';

    const issuesData = [
        {
            id: "1",
            title: "1) El profesor no me deja realizar la revisión del examen de arquitectura de computadores",
            description: "hola caracola",
            details: "",
            proofs: [],
            status: "Solved",
            date_time: "a minute ago",
            course: "Arquitectura de Computadores",    
            teachers: ["Domingo"],
            student: "josepenaseco101",
            comments_id: ["1", "2", "3", "4"]
        }, {
            id: "2",
            title: "2) El profesor no me deja realizar la revisión del examen de arquitectura de computadores",
            description: "hola caracola",
            details: "",
            proofs: [],
            status: "Queued",
            date_time: "a minute ago",
            course: "Arquitectura de Computadores",    
            teachers: ["Domingo", "Ricardo"],
            student: "josepenaseco101",
            comments_id: []
        }, {
            id: "3",
            title: "3) El profesor no me deja realizar la revisión del examen de arquitectura de computadores",
            description: "hola caracola",
            details: "",
            proofs: [],
            status: "Queued",
            date_time: "a minute ago",
            course: "Arquitectura de Computadores",    
            teachers: ["Domingo", "Ricardo"],
            student: "josepenaseco101",
            comments_id: []
        }, {
            id: "4",
            title: "4) El profesor no me deja realizar la revisión del examen de arquitectura de computadores",
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
    ];
</script>

<template>
    <Carousel :items-to-show="3" :wrap-around="true" :transition="500">
        <Slide v-for="issue in issuesData" :key="issue.id">
            <div class="carousel__item">
                <IssueCardSmall :issue="issue"></IssueCardSmall>
            </div>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
    .carousel {
        margin-inline: 8em;
    }

    .carousel__slide {
        margin-block: 1em;
    }

    .carousel__track {
        transform-style: preserve-3d;
    }

    .carousel__slide--sliding {
        transition: 0.5s;
    }

    .carousel__slide,
    .carousel__slide--active ~ .carousel__slide {
        transform: scale(0.85);
    }

    .carousel__slide--prev,
    .carousel__slide--next {
        opacity: 0.6;
        z-index: 0;
        pointer-events: none;
        transform: scale(0.85);
    }

    .carousel__slide--active {
        opacity: 1;
        z-index: 1;
        pointer-events: auto;
        transform: rotateY(0) scale(1);
    }
</style>