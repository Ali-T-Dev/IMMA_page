<template>
  <header class="card-bg mobile-box px-2 py-2 shadow-lg bg-[#f9fafb] rounded-t-xl ">
    <div class="flex flex-col justify-center items-center ">

      <div class="bg-white p-4 rounded-full shadow-lg my-6">
        <div class="relative bg-gradient-to-r from-blue-500 to-green-700 p-8 rounded-full ">
          <div class="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
            <IconChartLogin/>
          </div>
        </div>
      </div>

      <h1 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-700">Imma Smart Invest</h1>

      <p class="text-gray-500 mt-2">Create your account to start investing</p>

    </div>
  </header>
</template>

<script setup>
import IconChartLogin from './Icons/IconChartLogin.vue';

</script>
