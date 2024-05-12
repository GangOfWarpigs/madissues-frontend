<script setup lang="ts">
    import SubjectCard from "./components/SubjectCard.vue";
    import SearchCourseNav from './components/SearchCourseNav.vue';
    import IssueCarousel from "./components/carousel/IssueCarousel.vue";
    import { useRoute } from "vue-router";
    import { useQuery } from "@tanstack/vue-query";
    import { getOrganizationCourses, Course } from "../../../../api/organizations";
    import Spinner from "../../../../components/Spinner.vue";

    const route = useRoute();
    const organizationId = route.params["organization_id"] as string;

    const { data, isSuccess, isLoading } = useQuery<Course[]>({
        queryKey: ["organization", organizationId, "courses"],
        queryFn: async () => await getOrganizationCourses(organizationId)
    });
</script>
  
<template>
    <main class="w-full flex flex-col">
        <section class="w-full flex flex-col">
            <h1 class="text-3xl font-semibold self-center text-gray-700 select-none">Discover the most recent issues</h1>
            <IssueCarousel></IssueCarousel>
        </section>
        <section v-if="isSuccess && data !== undefined" class="w-full flex flex-col justify-start items-center mt-14 min-h-[36rem]">
            <h1 class="text-3xl font-semibold text-gray-700 select-none">Search by course</h1>
            <SearchCourseNav :years="4" @updatedFilter=""/>
            <div class="w-full grid grid-cols-4 mt-10 gap-5">
                <SubjectCard v-for="subject in data" :key="subject.id" :subjectCard="subject"/>
            </div>
        </section>
        <section v-if="isLoading" class="flex w-full justify-center mt-10">
          <Spinner :size="10" color="blue"></Spinner>
        </section>
    </main>
</template>