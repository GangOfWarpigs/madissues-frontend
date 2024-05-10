<script setup lang="ts">
    import { PropType } from 'vue';
    
    interface userDataProps {
        first_name: string,
        last_name: string,
        degree: string,
        last_school_year: string,
        email: string
    };

    const props = defineProps({
        user: {
            type: Object as PropType<userDataProps>,
            required: true
        }
    });
</script>

<template>
    <div class="flex flex-row items-end ">
        <div class="rounded-full border-8 border-white w-[11em]">
            <img src="../../../../../assets/images/profile_picture_test.webp"/>
        </div>
        <div class="ml-3 pb-4">
            <p class="text-2xl font-semibold">{{ props.user.first_name }} {{ props.user.last_name }}</p>
            <p class="text-xl text-gray-500">{{ props.user.degree }}, {{ props.user.last_school_year }}º curso</p>
        </div>
    </div>
</template>