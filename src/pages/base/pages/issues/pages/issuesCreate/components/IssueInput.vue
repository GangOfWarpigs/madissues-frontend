<script setup lang="ts">
    import { ref } from "vue";

    const props = defineProps<{
        placeholder: string
    }>();

    const inputValue = ref('');

    const handleInput = (event: Event) => {
        const target = event.target as HTMLInputElement
        inputValue.value = target.value
    };
</script>

<template>
    <input class="w-full rounded-md outline-0 py-2.5 px-2.5 font-normal" :placeholder="props.placeholder" @input="handleInput"/>
</template>