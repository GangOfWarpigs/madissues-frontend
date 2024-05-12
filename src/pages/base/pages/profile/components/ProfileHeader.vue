<script setup lang="ts">
    import { computed } from 'vue';
    import { useQuery } from '@tanstack/vue-query';
    import { getProfile, Profile } from '../../../../../api/students';

    const { data:profile } = useQuery<Profile>({
        queryKey: ["profile"],
        queryFn: async () => await getProfile()
    });

    const year = computed((() => {
        if (profile === undefined) return ''
        const date = new Date(profile.value?.started_studies_date as string);
        return date.getFullYear().toString();
    }));
</script>

<template>
    <div class="flex flex-row items-end ">
        <img src="../../../../../assets/images/default-avatar.webp" class="w-[11em]"/>
        <div class="ml-3 pb-4">
            <p class="text-2xl font-semibold">{{ profile?.first_name }} {{ profile?.last_name }}</p>
            <p class="text-xl text-gray-500">Studying since {{ year }}</p>
        </div>
    </div>
</template>