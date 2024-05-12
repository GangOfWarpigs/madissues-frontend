<script setup lang="ts">
    import SubjectCard from "./components/SubjectCard.vue";
    import SearchCourseNav from './components/SearchCourseNav.vue';
    import IssueCarousel from "./components/carousel/IssueCarousel.vue";
    import { useRoute } from "vue-router";
    import { computed, ref } from "vue";
    import { useQuery } from "@tanstack/vue-query";
    import { getOrganizationCourses, Course } from "../../../../api/organizations";
    import Spinner from "../../../../components/Spinner.vue";
    import Empty from "../../../../components/shared/Empty.vue";

    const route = useRoute();
    const organizationId = route.params["organization_id"] as string;

    const { data:courses, isSuccess, isLoading } = useQuery<Course[]>({
        queryKey: ["organization", organizationId, "courses"],
        queryFn: async () => await getOrganizationCourses(organizationId)
    });

    const index = ref(0);

    const filteredCourses = computed(() => { 
        if (!courses.value) return [];
        return filterCourses(index.value);
    });

    function filterCourses(n: number) {
        if (!courses.value) return;
        if (n == 0) return courses.value;
        else return courses.value.filter((course) => course.year == n);
    }

    function handleIndexChange(n: number) {
        index.value = n;
    }
</script>
  
<template>
    <main class="w-full flex flex-col">
        <section class="w-full flex flex-col">
            <h1 class="text-3xl font-semibold self-center text-gray-700 select-none">Discover the most recent issues</h1>
            <IssueCarousel></IssueCarousel>
        </section>
        <section v-if="isSuccess && courses !== undefined" class="w-full flex flex-col justify-start items-center mt-14 min-h-[36rem]">
            <h1 class="text-3xl font-semibold text-gray-700 select-none">Search by course</h1>
            <SearchCourseNav :years="4" @updatedFilter="handleIndexChange"/>
            <div class="w-full grid grid-cols-4 mt-10 gap-5" v-if="filteredCourses && filteredCourses.length > 0">
                <SubjectCard v-for="subject in filteredCourses" :key="subject.id" :subjectCard="subject"/>
            </div>
            <Empty v-if="!filteredCourses || filteredCourses.length == 0" item="course in this year"></Empty>
        </section>
        <section v-if="isLoading" class="flex w-full justify-center mt-10">
          <Spinner :size="10" color="blue"></Spinner>
        </section>
    </main>
</template>