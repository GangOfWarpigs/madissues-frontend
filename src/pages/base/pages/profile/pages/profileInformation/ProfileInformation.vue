<script setup lang="ts">
    import PersonalInfo from './components/PersonalInfo.vue';
    import Preferences from './components/Preferences.vue';
    import Account from './components/Account.vue';

    const preferencesData = {
        dark_theme: false,
        language: "english"
    };

    const languagesData = [
        { name: "English, UK", value: "english" },
        { name: "Español, ES", value: "spanish" }
    ];
</script>

<template>
    <div class="w-full flex flex-col space-y-5">
        <PersonalInfo/>
        <Preferences :preferences="preferencesData" :languages="languagesData"/>
        <Account/>
    </div>
</template>