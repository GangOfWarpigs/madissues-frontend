<script setup lang="ts">
    import SearchCourseNav from './components/SearchCourseNav.vue';

    const n_years: number = 4;
</script>

<template>
    this is the home
    <div class="w-full h-full flex flex-col items-center justify-center">
        <SearchCourseNav :n_years="n_years"/>
    </div>
</template>

<style scoped>

</style>