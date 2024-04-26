<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
    } from '../../../@/components/ui/dropdown-menu';

    interface Props {
        name: string,
        username: string
    }
    const { name, username } = defineProps<Props>();
    const basePath = "/organizations/" + useRoute().params.id + "/base/";
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
                        <li class="mr-14"><p class="text-white font-semibold"><router-link :to="{ path: basePath + 'home' }" replace>Home</router-link></p></li>
                        <li class="mr-14"><p class="text-white font-semibold"><router-link :to="{ path: basePath + 'issues' }" replace>Issues</router-link></p></li>
                        <li><p class="text-white font-semibold"><router-link :to="{ path: basePath + 'faqs' }" replace>FAQs</router-link></p></li>
                    </ul>
                </nav>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div class="flex items-center cursor-pointer box-border">
                        <img class="w-9 mr-3" src="../../assets/images/profile_picture_test.png" alt="Foto de Perfil"> 
                        <p class="text-white font-semibold mr-3">{{ username }}</p>
                        <b-icon-chevron-down class="text-white"/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56 mt-5 py-4 px-4 border-2 border-sky-500 rounded-xl h-60 bg-white text-black shadow-lg">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem class="cursor-pointer"><router-link :to="{ path: basePath + 'profile/information' }" replace>Profile</router-link></DropdownMenuItem>
                  <DropdownMenuItem class="cursor-pointer"><router-link :to="{ path: basePath + 'profile/issues' }" replace>My Issues</router-link></DropdownMenuItem>
                  <DropdownMenuItem class="cursor-pointer"><router-link :to="{ path: basePath + 'profile/faqs' }" replace>My FAQs</router-link></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
</template>

<style scoped>

</style>