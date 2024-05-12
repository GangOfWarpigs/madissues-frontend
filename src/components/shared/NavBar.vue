<script setup lang="ts">
import {useRoute} from 'vue-router';
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
    } from '../../../@/components/ui/dropdown-menu';
    import { useQuery } from "@tanstack/vue-query";
    import { getOrganizationById } from "../../api/organizations.ts";

    const props = defineProps({
        username: {
            type: String,
            required: true
        }
    });

    const route = useRoute()
    const organizationId = route.params["organization_id"] as string
    const basePath = "/organizations/" + organizationId + "/base/";
    const authPath = "/organizations/" + organizationId + "/auth/";

    const paths = [
        { path: "Home", name : "Home" },
        { path: "Issues", name : "Issues" },
        { path: "Faqs", name : "Faqs" }
    ];

    function logout(){
      console.log(authPath)
        localStorage.removeItem("token");
    }

    const { data } = useQuery({
        queryKey: ["organizations", organizationId],
        queryFn: async () => await getOrganizationById(organizationId)
    })
</script>

<template>
    <header class="w-full bg-white px-4 pt-3 z-50 sticky top-0 left-0">
        <div class="px-7 py-6 box-border rounded-lg flex items-center justify-between" :style="{ backgroundColor: data?.primary_color }">
            <div class="flex items-center">
                <div class="mr-20 flex items-center">
                    <img class="w-10 mr-5" src="../../assets/icons/madissues/logo_hamster.svg" alt="Logo de MadIssues">
                    <h1 class="font-semibold text-white text-lg">{{ data?.name }}</h1>
                </div>
                <nav>
                    <ul class="flex gap-12">
                        <li v-for="path in paths">
                            <router-link active-class="!text-white" class=" text-gray-300 text-lg font-semibold" :to="{ name: path.name }">{{ path.name }}</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div class="flex items-center cursor-pointer box-border">
                        <img class="w-9 mr-3" src="../../assets/images/profile_picture_test.webp" alt="Foto de Perfil"> 
                        <p class="text-white font-semibold mr-3">{{ props.username }}</p>
                        <vue-icon name="fa-chevron-down" scale="1" class="text-white"/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent class=" w-64 mt-6 py-4 px-4 border-2 rounded-xl bg-white shadow-lg" :style="{ borderColor: data?.primary_color, color: data?.primary_color }">
                  <DropdownMenuLabel class="text-base">Account</DropdownMenuLabel>
                  <DropdownMenuSeparator class="mb-2"/>
                  <DropdownMenuItem class="hover:bg-gray-100 rounded-xl py-3 px-6 cursor-pointer mb-1"><vue-icon name="io-person-circle-sharp" scale="1.2" class="text-base"/><p class=" text-gray-600 ml-3 font-semibold"><router-link :to="{ path: basePath + 'profile/information' }" replace>Profile</router-link></p></DropdownMenuItem>
                  <DropdownMenuItem class="hover:bg-gray-100 rounded-xl py-3 px-6 cursor-pointer mb-1"><b-icon-chat-left-text-fill class="text-base"/><p class="text-gray-600 ml-3 font-semibold"><router-link :to="{ path: basePath + 'profile/issues' }" replace>My Issues</router-link></p></DropdownMenuItem>
                  <DropdownMenuItem class="hover:bg-gray-100 rounded-xl py-3 px-6 cursor-pointer mb-1"><b-icon-question-square-fill class="text-base"/><p class="text-gray-600 ml-3 font-semibold"><router-link :to="{ path: basePath + 'profile/faqs' }" replace>My FAQs</router-link></p></DropdownMenuItem>
                  <DropdownMenuItem @click="logout()" class="hover:bg-gray-100 rounded-xl py-3 px-6 cursor-pointer mb-1"><vue-icon name="io-log-out" scale="1.2" class="text-base"/><p class="text-gray-600 ml-3 font-semibold"><router-link :to="{ path: authPath + 'signin' }" replace>Log out</router-link></p></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
</template>