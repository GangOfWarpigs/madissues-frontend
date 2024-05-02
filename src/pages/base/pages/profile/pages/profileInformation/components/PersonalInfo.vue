<script setup lang="ts">
    import { PropType, ref } from 'vue';
    import {
        Card,
        CardContent,
        CardHeader,
        CardTitle,
    } from '../../../../../../../../@/components/ui/card';
    import {
        Select,
        SelectContent,
        SelectItem,
        SelectTrigger,
        SelectValue,
    } from '../../../../../../../../@/components/ui/select'
    import { Label } from '../../../../../../../../@/components/ui/label'

    interface userProps {
        first_name: string,
        last_name: string,
        degree: string,
        last_school_year: string,
        email: string 
    }

    interface degreeProps {
        name: string,
        value: string
    }

    interface yearsProps {
        name: string,
        value: string
    }

    const props = defineProps({
        user: {
            type: Object as PropType<userProps>,
            required: true
        },
        degrees: {
            type: Object as PropType<degreeProps[]>,
            required: true
        },
        years: {
            type: Object as PropType<yearsProps[]>,
            required: true
        }
    })

    const degree = ref(props.degrees.find(degree => degree.value === props.user.degree));
    const year = ref(props.years.find(year => year.value === props.user.last_school_year));
    
    function handleDegreeChange(value: string) {
        console.log(value);
    }

    function handleYearChange(value: string) {
        console.log(value);
    }
</script>

<template>
    <Card class="w-full mb-5 rounded-lg bg-gray-100 px-10 py-6 box-border flex flex-col items-start text-gray-800">
        <CardHeader>
            <CardTitle class="text-lg mb-5">Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
            <form class="flex items-start">
                <div class="flex flex-col items-start mr-20">
                    <div class="flex flex-col items-start mb-5">
                        <Label for="name" class="text-sm font-medium text-gray-400 mb-1">First Name</Label>
                        <p id="name" class="text-base">{{ props.user.first_name }}</p>
                    </div>
                    <div class="flex flex-col items-start mb-5">
                        <Label for="degree" class="text-sm font-medium text-gray-400 mb-1">Degree</Label>
                        <Select id="degree" :default-value="props.user.degree" :on-update:model-value="handleDegreeChange">
                            <SelectTrigger class=" bg-white w-60">
                              <SelectValue :placeholder="degree?.name" />
                            </SelectTrigger>
                            <SelectContent class="bg-white">
                                <SelectGroup>
                                    <SelectItem v-for="(item, _) in props.degrees" :value="item.value" class="bg-white mr-2 cursor-pointer hover:bg-slate-100">
                                        {{ item.name }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="flex flex-col items-start mb-5">
                        <Label for="email" class="text-sm font-medium text-gray-400 mb-1">Email Adress</Label>
                        <p id="email" class="text-base">{{ props.user.email }}</p>
                    </div>
                </div>
                <div class="flex flex-col items-start">
                    <div class="flex flex-col items-start mb-5">
                        <Label for="last_name" class="text-sm font-medium text-gray-400 mb-1">Last Name</Label>
                        <p id="last_name" class="text-base">{{ props.user.first_name }}</p>
                    </div>
                    <div class="flex flex-col items-start mb-5">
                        <Label for="year" class="text-sm font-medium text-gray-400 mb-1">Last School Year</Label>
                        <Select id="year" :default-value="props.user.last_school_year" :on-update:model-value="handleYearChange">
                            <SelectTrigger class=" bg-white">
                              <SelectValue :placeholder="year?.name" />
                            </SelectTrigger>
                            <SelectContent class="bg-white">
                                <SelectGroup>
                                    <SelectItem v-for="(item, _) in props.years" :value="item.value" class="bg-white mr-2 cursor-pointer hover:bg-slate-100">
                                        {{ item.name }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </form>
        </CardContent>
    </Card>
</template>

<style scoped>

</style>