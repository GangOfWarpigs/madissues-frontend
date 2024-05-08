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

    const paths = [
        {
            path: "home",
            name : "Home"
        },
        {
            path: "issues",
            name : "Issues"
        },
        {
            path: "faqs",
            name : "Faqs"
        }
    ]

</script>

<template>
    <header class="w-full bg-white px-4 pt-3 z-50 sticky top-0 left-0">
        <div class="px-7 py-6 box-border bg-blue-500 rounded-lg flex items-center justify-between">
            <div class="flex items-center">
                <div class="mr-20 flex items-center">
                    <img class="w-10 mr-5" src="../../assets/icons/madissues/logo_hamster.svg" alt="Logo de MadIssues">
                    <h1 class="font-semibold text-white text-lg">{{ name }}</h1>
                </div>
                <nav>
                    <ul class="flex gap-12">
                        <li v-for="path in paths">
                            <router-link active-class="!text-white" class=" text-[#f5f5f595] text-lg font-semibold" :to="{ path: basePath + path.path }" replace>{{ path.name }}</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div class="flex items-center cursor-pointer box-border">
                        <img class="w-9 mr-3" src="../../assets/images/profile_picture_test.png" alt="Foto de Perfil"> 
                        <p class="text-white font-semibold mr-3">{{ username }}</p>
                        <vue-icon name="fa-chevron-down" scale="1" class="text-white"/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56 mt-5 py-4 px-6 border-2 border-blue-500 rounded-xl h-60 bg-white text-blue-600 shadow-lg">
                  <DropdownMenuLabel class="text-base">Account</DropdownMenuLabel>
                  <DropdownMenuSeparator class="mb-3"/>
                  <DropdownMenuItem class="cursor-pointer mb-1"><b-icon-person-circle class="text-base"/><p class="text-gray-600 ml-3 font-semibold"><router-link :to="{ path: basePath + 'profile/information' }" replace>Profile</router-link></p></DropdownMenuItem>
                  <DropdownMenuItem class="cursor-pointer mb-1"><b-icon-chat-left-text-fill class="text-base"/><p class="text-gray-600 ml-3 font-semibold"><router-link :to="{ path: basePath + 'profile/issues' }" replace>My Issues</router-link></p></DropdownMenuItem>
                  <DropdownMenuItem class="cursor-pointer mb-1"><b-icon-question-square-fill class="text-base"/><p class="text-gray-600 ml-3 font-semibold"><router-link :to="{ path: basePath + 'profile/faqs' }" replace>My FAQs</router-link></p></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
</template>