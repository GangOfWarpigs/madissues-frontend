<script setup lang="ts">
    import {
        Card,
        CardContent,
        CardHeader,
        CardTitle,
    } from '../../../../../../../../@/components/ui/card';
</script>

<template>
    <Card class="w-full rounded-lg bg-gray-100 px-10 py-6 box-border flex flex-col items-start text-gray-800">
        <CardHeader>
            <CardTitle class="text-lg mb-5">Account</CardTitle>
        </CardHeader>
        <CardContent>
            <form class="flex items-start">
                <div class="flex flex-col items-start mr-20">
                    <div class="flex flex-col items-start">
                        <Label for="logout" class="text-sm font-medium text-gray-400 mb-2">Log Out</Label>
                        <button id="logout" @click="$emit('logOut')" class="bg-blue-500 rounded text-white items-center justify-center font-medium px-3 text-sm py-1">Log Out</button>
                    </div>
                    
                </div>
                <div class="flex flex-col items-start mr-20">
                    <div class="flex flex-col items-start">
                        <Label for="delete" class="text-sm font-medium text-gray-400 mb-2">Delete Account</Label>
                        <button id="delete" @click="$emit('deleteAccount')" class="bg-rose-500 rounded text-white items-center justify-center font-medium px-3 text-sm py-1">Delete your account</button>
                    </div>
                </div>
            </form>
        </CardContent>
    </Card>
</template>