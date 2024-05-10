<script setup lang="ts">
    import {useRoute} from "vue-router";
    import {onMounted, ref, watch} from "vue";

    const basePath = "/organizations/" + useRoute().params.id + "/base/";

    const route = useRoute()
    const currentPath = ref('')
    const endpointName = ref('')

    const updateEndpointName = (path:string) => {
        const parts = path.split("/");
        endpointName.value = parts[parts.length - 1];
    };

    onMounted(() => {
        currentPath.value = route.path
        updateEndpointName(currentPath.value)
    })
    
    watch(() => route.path, (newPath) => {
        currentPath.value = newPath;
        updateEndpointName(currentPath.value)
    });
</script>

<template>
    <nav class="w-full text-gray-400 text-lg my-5 font-normal">
        <ul class="flex border-b-2 border-gray-200 gap-8">
            <router-link class="text-center" active-class="font-semibold pb-1.5 text-blue-500 border-b-2 border-blue-500" :to="{ path: basePath + 'profile/information' }" replace>Information</router-link>
            <router-link class="text-center" active-class="font-semibold pb-1.5 text-blue-500 border-b-2 border-blue-500" :to="{ path: basePath + 'profile/issues' }" replace>My Issues</router-link>
            <router-link class="text-center" active-class="font-semibold pb-1.5 text-blue-500 border-b-2 border-blue-500" :to="{ path: basePath + 'profile/faqs' }" replace>My Faqs</router-link>
        </ul>
    </nav>
</template>