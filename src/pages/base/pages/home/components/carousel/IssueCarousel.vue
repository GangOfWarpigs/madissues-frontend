<script setup lang="ts">
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
    import IssueCardSmall from './IssueCarouselCard.vue';
    import { useRoute } from "vue-router";
    import { useQuery } from "@tanstack/vue-query";
    import { getOrganizationIssues, Issue } from "../../../../../../api/organizations.ts";

    const route = useRoute();
    const organizationId = route.params["organization_id"] as string;

    const { data:issues, isSuccess } = useQuery<Issue[]>({
        queryKey: ["organization", organizationId, "issues"],
        queryFn: async () => await getOrganizationIssues(organizationId),
    });
</script>

<template>
    <Carousel :items-to-show="3" :wrap-around="true" :transition="500">
        <Slide v-for="issue in issues.slice(0, 4)" :key="issue.id" v-if="isSuccess && issues !== undefined">
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
        margin-inline: 1em;
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