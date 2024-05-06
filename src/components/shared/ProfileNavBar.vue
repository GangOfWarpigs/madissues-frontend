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
  <nav class="w-full  px-10 text-[#A5A5A5] text-xs font-normal">

    <ul class="flex border-b-[1.5px] border-gray-200 space-x-5">
      <li :class="{'pb-1.5': true, 'text-[#1986E3] border-b-[1.5px] border-[#1986E3]': endpointName ==='information'}">
        <router-link :to="{ path: basePath + 'profile/information' }" replace>Information</router-link>
      </li>
      <li :class="{'pb-1.5': true, 'text-[#1986E3] border-b-[1.5px] border-[#1986E3]': endpointName ==='issues'}">
        <router-link :to="{ path: basePath + 'profile/issues' }" replace>Issues</router-link>
      </li>
      <li :class="{'pb-1.5': true, 'text-[#1986E3] border-b-[1.5px] border-[#1986E3]': endpointName ==='faqs'}">
        <router-link :to="{ path: basePath + 'profile/faqs' }" replace>Faqs</router-link>
      </li>
    </ul>

  </nav>
</template>

<style scoped>

</style>