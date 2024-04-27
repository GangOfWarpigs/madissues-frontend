<script setup lang="ts">

</script>

<template>
  <main class="flex min-h-full">
    <section class="flex flex-1 flex-col items-center text-xs bg-gradient-to-r from-[#1986E3] to-[#978EFF]">
      <div class=" items-start w-full">

          <p>
            Logo MadIssues
          </p>
      </div>
      <div class="flex items-center flex-grow px-10">
        <p class="text-white font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus metus id justo molestie dictum. Integer vitae commodo enim, vel dapibus ante. Pellentesque et elementum mi.
        </p>
      </div>
    </section>
    <div class="flex flex-1 flex-col items-center space-y-10 text-xs">
      <RouterView></RouterView>
    </div>

  </main>

</template>

<style scoped>

</style>