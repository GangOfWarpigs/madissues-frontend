<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { Card, CardContent, CardHeader, CardTitle } from '../../../../../../../../@/components/ui/card';
    import { Label } from '../../../../../../../../@/components/ui/label';
    import { useQuery } from '@tanstack/vue-query';
    import { getProfile, Profile } from '../../../../../../../api/students';
    import { getOrganizationDegrees, Degree } from '../../../../../../../api/organizations';

    const organizationId = useRoute().params["organization_id"] as string;

    const { data:profile } = useQuery<Profile>({
        queryKey: ["profile"],
        queryFn: async () => await getProfile()
    })

    const { data:degrees } = useQuery<Degree[]>({
        queryKey: ["organization_id", organizationId, "degrees"],
        queryFn: async () => await getOrganizationDegrees(organizationId)
    });

    const year = computed((() => {
        if (profile === undefined) return '';
        const date = new Date(profile.value?.started_studies_date as string);
        return date.getFullYear().toString();
    }));

    const degree = computed((() => {
        if (profile === undefined || degrees === undefined) return '';
        return degrees.value?.find((degree) => degree.id === profile.value?.degree)?.name
    }));
</script>

<template>
    <Card class="w-full rounded-lg bg-gray-100 px-8 py-6 box-border flex flex-col items-start text-gray-700">
        <CardHeader>
            <CardTitle class="text-lg mb-5">Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
            <form class="flex items-start">
                <div class="flex flex-col items-start mr-20">
                    <div class="flex flex-col items-start mb-5">
                        <Label for="name" class="text-sm font-medium text-gray-400 mb-1">First Name</Label>
                        <p id="name" class="text-base">{{ profile?.first_name }}</p>
                    </div>
                    <div class="flex flex-col items-start mb-5">
                        <Label for="degree" class="text-sm font-medium text-gray-400 mb-1">Degree</Label>
                        <p id="degree" class="text-base">{{ degree }}</p>
                    </div>
                    <div class="flex flex-col items-start">
                        <Label for="email" class="text-sm font-medium text-gray-400 mb-1">Email Adress</Label>
                        <p id="email" class="text-base">{{ profile?.email }}</p>
                    </div>
                </div>
                <div class="flex flex-col items-start">
                    <div class="flex flex-col items-start mb-5">
                        <Label for="last_name" class="text-sm font-medium text-gray-400 mb-1">Last Name</Label>
                        <p id="last_name" class="text-base">{{ profile?.last_name }}</p>
                    </div>
                    <div class="flex flex-col items-start">
                        <Label for="year" class="text-sm font-medium text-gray-400 mb-1">First School Year</Label>
                        <p id="year" class="text-base">{{ year }}</p>
                    </div>
                </div>
            </form>
        </CardContent>
    </Card>
</template>