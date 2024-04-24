<script setup lang="ts">
    interface Props {
        name: string,
        paths: Map<string, string>
    }
    const { name, paths } = defineProps<Props>();
</script>

<template>
    <header class="w-full px-5 pt-3 z-50 sticky top-0 left-0">
        <div class="px-8 py-5 box-border bg-sky-400 rounded-xl flex items-center justify-between">
            <div class="flex items-center">
                <div class="mr-20 flex items-center">
                    <img class="w-10 mr-5" src="../../assets/icons/madissues/logo_hamster.svg" alt="Logo de MadIssues">
                    <h1 class="font-semibold text-white text-lg">{{ name }}</h1>
                </div>
                <nav>
                    <ul class="flex">
                        <li class="mr-14"><p class="text-white font-semibold"><a href="#">Home</a></p></li>
                        <li class="mr-14"><p class="text-white font-semibold"><a href="#">Issues</a></p></li>
                        <li class="mr-14"><p class="text-white font-semibold"><a href="#">FAQs</a></p></li>
                    </ul>
                </nav>
            </div>
            <div>
                
            </div>
        </div>
    </header>
</template>

<style scoped>

</style>