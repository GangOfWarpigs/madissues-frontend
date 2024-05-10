<template>
    <div class="w-full px-4 pt-16">
      <div class=" flex flex-col gap-3">
        <Disclosure v-for="name in (new Array(20))" v-slot="{ open }">
          <DisclosureButton
            class="w-full bg-gray-100 py-6 rounded-2xl border-1 border-gray-800 justify-between flex px-8 items-center"
          >
            <p class="font-semibold text-gray-500">What is your refund policy?</p>
            <vue-icon class="text-gray-400" :name="open ? 'fa-chevron-up' : 'fa-chevron-down'"></vue-icon>
            
          </DisclosureButton>
          <DisclosurePanel class="py-5 px-8 text-sm text-gray-500 rounded-xl">
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </DisclosurePanel>
        </Disclosure>
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  </script>
  