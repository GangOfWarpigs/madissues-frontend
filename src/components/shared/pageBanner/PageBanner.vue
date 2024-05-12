<script setup lang="ts">
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { useQuery } from "@tanstack/vue-query";
    import { getOrganizationById } from "../../../api/organizations";

    const route = useRoute();
    const organizationId = route.params["organization_id"] as string;

    const { data } = useQuery({
        queryKey: ["organizations", organizationId],
        queryFn: async () => await getOrganizationById(organizationId)
    })

    const { title, subtitle } = defineProps<{
        title: string,
        subtitle: string
    }>();

    const gradientStyle = computed(() => {
        if (data === undefined) return;
        return {
            backgroundImage: `linear-gradient(to right, ${data?.value?.primary_color}, ${data?.value?.secondary_color})`
        };
    });
</script>

<template>
    <div :style="gradientStyle" class="h-60 w-full rounded-2xl flex flex-col justify-center items-center" >
        <p class="text-4xl font-bold mb-8 text-white font-sans">{{ title }}</p>
        <p class="text-xl text-white font-sans">{{ subtitle }}</p>
        <slot></slot>
    </div>
</template>