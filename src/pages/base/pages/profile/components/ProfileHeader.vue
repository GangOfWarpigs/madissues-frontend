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
        <div class="rounded-full border-8 border-white w-[11em]">
            <img src="../../../../../assets/images/profile_picture_test.webp"/>
        </div>
        <div class="ml-3 pb-4">
            <p class="text-2xl font-semibold">{{ profile?.first_name }} {{ profile?.last_name }}</p>
            <p class="text-xl text-gray-500">Studying since {{ year }}</p>
        </div>
    </div>
</template>