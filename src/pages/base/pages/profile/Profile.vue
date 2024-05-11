<script setup lang="ts">
    import PageBanner from '../../../../components/shared/pageBanner/PageBanner.vue';
    import ProfileNavBar from './components/ProfileNavBar.vue';
    import ProfileChild from './components/ProfileHeader.vue';

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
    <PageBanner :data="profilePageData">
        <div class="w-full flex justify-start translate-y-24 pl-12">
            <ProfileChild :user="user"/>
        </div>
    </PageBanner>
    <section class="mt-28">
        <ProfileNavBar></ProfileNavBar>
        <RouterView></RouterView>
    </section>
</template>