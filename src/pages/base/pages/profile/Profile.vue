<script setup lang="ts">
    import PageBanner from '../../../../components/shared/pageBanner/PageBanner.vue';
    import ProfileNavBar from './components/ProfileNavBar.vue';
    import ProfileChild from '../../../../components/shared/pageBanner/childs/ProfileChild.vue';

    const userData1 = {
        first_name: "Jose Ricardo",
        last_name: "Peña Seco",
        degree: "Ingeniería informatica",
        last_school_year: "4",
        email: "jose.pena101@alu.ulpgc.es"
    }

    const profilePageData = {
        title: "",
        subtitle: "",
        primaryColor: "#1986E3",
        secondaryColor:"#978EFF",
        currentPage: "profile"
    }

    const user = {
        first_name: "pepe",
        last_name: "adios",
        degree: "cosas",
        last_school_year: "2023",
        email: "pepe@pepe.com"
    }
</script>

<template>
    <PageBanner :data="profilePageData" :user="userData1">
        <div class="w-full flex justify-start translate-y-36 pl-10">
            <ProfileChild :user="user"/>
        </div>
    </PageBanner>
    <section class="mt-28">
        <ProfileNavBar></ProfileNavBar>
        <RouterView></RouterView>
    </section>
</template>