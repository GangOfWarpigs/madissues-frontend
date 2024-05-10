<script setup lang="ts">
    import PageBanner from "../../../../../../components/shared/pageBanner/PageBanner.vue";
    import IssueWrapper from "./components/IssueWrapper.vue";

    const userData = {
        first_name: "Jose Ricardo",
        last_name: "Peña Seco",
        degree: "Ingeniería Informática",
        last_school_year: "4th year",
        email: "jose.pena101@alu.ulpgc.es"
    }

    const pageProps = {
        title: "Incidents",
        subtitle: "Here you can report an incident",
        primaryColor: "#1986E3",
        secondaryColor: "#978EFF", 
        currentPage: "issues"
    }
</script>

<template>
    <PageBanner :data="pageProps" :user="userData"></PageBanner>
    <div class="w-full mt-10">
        <IssueWrapper/>
    </div>
</template>