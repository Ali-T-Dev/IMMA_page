<template>
  <header class="card-bg mobile-box px-2 py-3 shadow-lg border border-gray-200 rounded-t-xl ">
    <div class="flex justify-between items-center w-full">
      <div class="flex items-center gap-2 justify-between">
        <div>
          <LogoPart class="rounded-full"/>
        </div>
        <div>
          <h1 class="title text-[#0052cc]">IMMA Smart Invest</h1>
        </div>
      </div>
      <RouterLink to="/Login">
        <img
          :src="user"
          alt="User Avatar"
          class="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
        />
      </RouterLink>
    </div>
  </header>
</template>
<script setup>
import user from '@/assets/Image/user.jpg'
import LogoPart from '../logo/logoPart.vue';
</script>
