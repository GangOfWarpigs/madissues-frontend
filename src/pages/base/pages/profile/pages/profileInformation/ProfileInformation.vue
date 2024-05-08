<script setup lang="ts">
    import PersonalInfo from './components/PersonalInfo.vue';
    import Preferences from './components/Preferences.vue';
    import Account from './components/Account.vue';

    const userData = {
        first_name: "Jose Ricardo",
        last_name: "Peña Seco",
        degree: "informatica",
        last_school_year: "4",
        email: "jose.pena101@alu.ulpgc.es"
    };

    const degreesData = [
        { name: "Ingeniería Informática", value: "informatica" },
        { name: "Ciencia e Ingeniería de Datos", value: "datos" },
        { name: "Ingeniería Física y Matemática", value: "fisica" }
    ];

    const yearsData = [
        { name: "4th", value: "4" },
        { name: "3th", value: "3" },
        { name: "2th", value: "2" },
        { name: "1th", value: "1" },
    ];

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
        <PersonalInfo :user="userData" :degrees="degreesData" :years="yearsData"/>
        <Preferences :preferences="preferencesData" :languages="languagesData"/>
        <Account/>
    </div>
</template>