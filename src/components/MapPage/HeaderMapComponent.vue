<template>
  <header class="w-[370px] card-bg mobile-box px-2 py-3 shadow-lg border border-gray-200 rounded-t-xl flex justify-between items-center">
    <div class="flex items-center">

      <button @click="toggleMenu" class="p-2 focus:outline-none">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <h1 class="title ">PropertyInsight</h1>
    </div>

    <div class="flex items-center space-x-4">
      <IconSearchMap />
      <IconBellMap />
      <img
        :src="user"
        alt="User Avatar"
        class="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
      />
    </div>


    <transition name="slide">
      <div v-if="isOpen" class="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col">

        <div class="flex justify-between items-center p-4 border-b border-gray-200">
          <span class="font-bold text-lg">Menu</span>
          <button @click="toggleMenu" class="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <button class="block w-full text-left px-4 py-3 text-black hover:bg-gray-100 border-b border-gray-200">Profile</button>
        <button class="block w-full text-left px-4 py-3 text-black hover:bg-gray-100 border-b border-gray-200">Settings</button>
        <button class="block w-full text-left px-4 py-3 text-black hover:bg-gray-100 border-b border-gray-200">Notifications</button>
        <button class="block w-full text-left px-4 py-3 text-black hover:bg-gray-100">Logout</button>
      </div>
    </transition>

    <div v-if="isOpen" @click="toggleMenu" class="fixed inset-0 bg-opacity-30 z-40"></div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import user from '@/assets/Image/user.jpg';
import IconBellMap from './Icons/IconBellMap.vue';
import IconSearchMap from './Icons/IconSearchMap.vue';

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}
</style>
