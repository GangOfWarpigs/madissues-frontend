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
    import { VueToggles } from "vue-toggles";

    interface preferencesProps {
        dark_theme: boolean,
        language: string
    }

    interface languageProps {
        name: string,
        value: string
    }

    const props = defineProps({
        preferences: {
            type: Object as PropType<preferencesProps>,
            required: true
        },
        languages: {
            type: Object as PropType<languageProps[]>,
            required: true
        }
    })

    const language = ref(props.languages.find(language => language.value === props.preferences.language));
    const dark_theme = ref(props.preferences.dark_theme);

    function handleSwitchChange() {
        dark_theme.value = !dark_theme.value;
        props.preferences.dark_theme = dark_theme.value;
    }

    function handleLanguageChange() {

    }
</script>

<template>
    <Card class="w-full rounded-lg bg-gray-100 px-8 py-5 box-border flex flex-col items-start text-gray-700">
        <CardHeader>
            <CardTitle class="text-lg mb-5">Preferences</CardTitle>
        </CardHeader>
        <CardContent>
            <form class="flex items-start">
                <div class="flex flex-col items-start mr-20">
                    <div class="flex flex-col items-start">
                        <Label for="theme" class="text-sm font-medium text-gray-400 mb-3">Theme</Label>
                        <div id="theme" class="flex items-center">
                            <p class="text-base mr-2">Dark Theme</p>
                            <VueToggles :width="40" :height="20" :value="dark_theme" @click="handleSwitchChange" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-start">
                    <div class="flex flex-col items-start">
                        <Label for="language" class="text-sm font-medium text-gray-400 mb-1">Language</Label>
                        <Select id="language" :default-value="props.preferences.language" :on-update:model-value="handleLanguageChange">
                            <SelectTrigger class=" bg-white w-40">
                              <SelectValue :placeholder="language?.name" />
                            </SelectTrigger>
                            <SelectContent class="bg-white w-40">
                                <SelectGroup>
                                    <SelectItem v-for="(item, _) in props.languages" :value="item.value" class="bg-white cursor-pointer hover:bg-slate-100">
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