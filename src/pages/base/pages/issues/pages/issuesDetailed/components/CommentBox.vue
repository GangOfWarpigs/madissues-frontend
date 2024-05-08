<script setup lang="ts">
    import { ref } from 'vue';

    const comment = ref('');
    const maxCharacters = 400;
    const isLimit = ref(false);

    const emit = defineEmits(['newComment']);

    function handleInput(event: Event) {
        const inputEvent = event as InputEvent;
        const target = inputEvent.target as HTMLTextAreaElement;
        comment.value = target.value.slice(0, maxCharacters);
        isLimit.value = comment.value.length >= maxCharacters;
    }

    function publishComment() {
        emit('newComment', comment.value);
    }
</script>

<template>
    <div class="w-full flex flex-col px-8 py-5 bg-gray-100 rounded-lg box-border">
        <p class="font-semibold text-sm text-gray-600">Write a comment</p>
        <textarea 
            class="w-full rounded-lg bg-white px-3 py-2 min-h-24 my-2 box-border max-w-full"
            v-model="comment"
            @input="handleInput"    
        ></textarea>
        <div class="w-full flex justify-between items-center">
            <div><p class="text-xs text-red-600" v-if="isLimit">Reached max characters</p></div>
            <button @click="publishComment" class="text-sm font-semibold text-white px-3 py-1 rounded bg-blue-500 cursor-pointer active:scale-95">Publish</button>
        </div>
    </div>
</template>