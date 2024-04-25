<script setup lang="ts">
    interface Props {
        name: string,
        paths: Map<string, string>
    }
    const { name, paths } = defineProps<Props>();
</script>

<template>
    <header class="w-full px-5 pt-3 z-50 sticky top-0 left-0">
        <div class="px-7 py-5 box-border bg-sky-500 rounded-xl flex items-center justify-between">
            <div class="flex items-center">
                <div class="mr-20 flex items-center">
                    <img class="w-10 mr-5" src="../../assets/icons/madissues/logo_hamster.svg" alt="Logo de MadIssues">
                    <h1 class="font-semibold text-white text-lg">{{ name }}</h1>
                </div>
                <nav>
                    <ul class="flex">
                        <li class="mr-14"><p class="text-white font-semibold"><router-link to="./home">Home</router-link></p></li>
                        <li class="mr-14"><p class="text-white font-semibold"><router-link to="./issues">Issues</router-link></p></li>
                        <li><p class="text-white font-semibold"><router-link to="./faqs">FAQs</router-link></p></li>
                    </ul>
                </nav>
            </div>
            <div class="flex items-center cursor-pointer">
                <img class="w-9 mr-3" src="../../assets/images/profile_picture_test.png" alt="Foto de Perfil"> 
                <p class="text-white font-semibold mr-3">Jose Peña Seco</p>
                <b-icon-chevron-down class="text-white"/>
            </div>
        </div>
    </header>
</template>

<style scoped>

</style>