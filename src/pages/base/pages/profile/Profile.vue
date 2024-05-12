<script setup lang="ts">
    import PageBanner from '../../../../components/shared/pageBanner/PageBanner.vue';
    import ProfileNavBar from './components/ProfileNavBar.vue';
    import ProfileHeader from './components/ProfileHeader.vue';
</script>

<template>
    <PageBanner title="" subtitle="">
        <div class="w-full flex justify-start translate-y-24 pl-12">
            <ProfileHeader/>
        </div>
    </PageBanner>
    <section class="mt-28">
        <ProfileNavBar></ProfileNavBar>
        <RouterView></RouterView>
    </section>
</template>