<script setup lang="ts">
    import { useRoute } from "vue-router";
    import { onMounted, ref, watch } from "vue";
    import { useQuery } from "@tanstack/vue-query";
    import { getOrganizationById } from "../../../../../api/organizations";
    
    const route = useRoute();
    const organizationId = route.params["organization_id"] as string;
    const basePath = "/organizations/" + organizationId + "/base/";
    
    const { data } = useQuery({
        queryKey: ["organizations", organizationId],
        queryFn: async () => await getOrganizationById(organizationId)
    });
    
    const links = [
        { path: 'profile/information', label: 'Information' },
        { path: 'profile/issues', label: 'My Issues' }
    ];
    
    const isActive = (path: string) => {
        return route.path.includes(path);
    };
    
    const currentPath = ref("");
    const endpointName = ref("");
    
    const updateEndpointName = (path: string) => {
        const parts = path.split("/");
        endpointName.value = parts[parts.length - 1];
    };
    
    onMounted(() => {
        watch(() => route.path, (newPath) => {
            currentPath.value = newPath;
            updateEndpointName(currentPath.value);
        });
    });
</script>

<template>
    <nav class="w-full text-gray-400 text-lg my-5 font-normal">
        <ul class="flex border-b-2 border-gray-200 gap-8">
            <router-link 
                v-for="link in links" 
                :key="link.path" 
                :to="{ path: basePath + link.path }" 
                :class="{ 'font-semibold pb-1.5 border-b-2 ': isActive(link.path) }" 
                :style="{ color: isActive(link.path) ? data?.primary_color : '', borderBottomColor: isActive(link.path) ? data?.primary_color : ''}" 
                replace
            >
                {{ link.label }}
            </router-link>
        </ul>
    </nav>
</template>