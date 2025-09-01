<template>
  <div class="bg-white rounded-xl border border-gray-200 mb-6">

    <div class="relative">
      <img
      :src="property.image"
      :alt="property.title"
      class="w-full object-cover rounded-t-xl mb-4"
      />
      <h2 class="absolute bottom-8 left-2 text-base font-bold text-white">{{ property.title }}</h2>
      <p class="absolute bottom-0 left-2 text-white text-xs font-normal mb-4 flex " >
        <IconLocationAnalysis/>
        {{ property.address }}
      </p>
    </div>

    <div class="grid grid-cols-1 gap-4 text-gray-700 mb-4 px-4">
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <span class="text-xs text-gray-500 font-semibold">Purchase Price</span>
          <p class="text-black text-xl font-semibold">€{{ property.purchasePrice }}</p>
        </div>
        <div class="flex flex-col">
          <span class="text-xs text-gray-500 font-semibold">Monthly Rent</span>
          <p class="text-black text-xl font-semibold">€{{ property.monthlyRent }}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 px-4 mb-4">

      <div class="flex flex-col bg-[#f0f9ff] p-4 rounded-lg ">
        <span class="text-xs text-gray-500 font-semibold">Area</span>
        <p class="text-black text-xl font-semibold">{{ property.area }} m²</p>
      </div>

      <div class="flex flex-col bg-[#f0f9ff] p-4 rounded-lg ">
        <span class="text-xs text-gray-500 font-semibold">Price/m²</span>
        <p class="text-black text-xl font-semibold">€{{ property.pricePerM2 }}</p>
      </div>

      <div class="flex flex-col bg-[#f0f9ff] p-4 rounded-lg ">
        <span class="text-xs text-gray-500 font-semibold">Rooms</span>
        <p class="text-black text-xl font-semibold">{{ property.rooms }}</p>
      </div>

      <div class="flex flex-col bg-[#f0f9ff] p-4 rounded-lg ">
        <span class="text-xs text-gray-500 font-semibold">Floor</span>
        <p class="text-black text-xl font-semibold">{{ property.floor }}</p>
      </div>

    </div>
    <div class="flex items-center px-4 pb-6 gap-2">
      <span class="font-light text-sm text-green-700 px-2 py-1 bg-[#e6f4f0] rounded-full">{{ property.type }}</span>
      <span class="font-light text-sm text-blue-700 px-2 py-1 bg-[#e6f4f0] rounded-full">{{ property.status }}</span>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import IconLocationAnalysis from './Icons/IconLocationAnalysis.vue';

defineProps({
  property: {
    type: Object,
    required: true
  }
})

</script>
