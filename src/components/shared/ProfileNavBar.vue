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
  <nav class="w-full text-[#A5A5A5] text-lg my-4 font-normal">
    <ul class="flex border-b-[1.5px] border-gray-200 gap-6">
        <router-link class="min-w-[80px] text-center" active-class="font-semibold pb-1.5 text-[#1986E3] border-b-[2px] border-[#1986E3]" :to="{ path: basePath + 'profile/information' }" replace>Information</router-link>
        <router-link class="min-w-[80px] text-center" active-class="font-semibold pb-1.5 text-[#1986E3] border-b-[2px] border-[#1986E3]" :to="{ path: basePath + 'profile/issues' }" replace>Issues</router-link>
        <router-link class="min-w-[80px] text-center" active-class="font-semibold pb-1.5 text-[#1986E3] border-b-[2px] border-[#1986E3]" :to="{ path: basePath + 'profile/faqs' }" replace>Faqs</router-link>
    </ul>

  </nav>
</template>

<style scoped>

</style>