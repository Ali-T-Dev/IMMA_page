<template>
  <h2 class="text-base font-semibold text-gray-950 mb-3">
    Break-Even Analysis
  </h2>
  <div class="p-2 rounded-xl bg-[#f0f9ff]">

    <div class="flex justify-between items-center">
      <p class="text-xs text-gray-700 mb-2">Break-Even Point:</p>
      <span class="text-sm font-medium text-gray-900">-years</span>
    </div>

    <div class="w-full bg-gray-200 rounded-full h-2.5 my-1 dark:bg-gray-200">
      <div class=" h-1 rounded-full" style="width: 45%"></div>
    </div>

    <div class="text-xs text-gray-500 flex justify-between items-center">
      <p>1 year </p>
      <p>30 years</p>
    </div>
  </div>

  <h2 class="text-base font-semibold text-gray-950 mt-3 mb-2">
    Rent Index Analysis
  </h2>
  <div class="p-2 rounded-xl bg-[#f0f9ff]">

    <div class="flex justify-between items-center mb-2">
      <p class="text-xs text-gray-950 font-medium mb-2">Your Rent: €{{ RentNumber.YourRent }}/m²</p>
      <p class="text-sm font-normal text-green-800 bg-green-100 py-1 px-2  rounded-full ">Good Value</p>
    </div>

    <div class="w-full bg-gray-200 rounded-full h-2.5 my-1 dark:bg-gray-200">
      <div class="bg-green-700 h-2 rounded-full dark:bg-green-700" style="width: 65%"></div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div class="text-sm text-gray-500 mb-2">
        <P class="">Area Min:</P>
        <P class=""> €{{ RentNumber.Min }}/m²</P>
      </div>
      <div class="text-sm text-gray-500 mb-2">
        <P class="">Area Avg:</P>
        <P class=""> €{{ RentNumber.Avg }}/m²</P>
      </div>
      <div class="text-sm text-gray-500 mb-2">
        <P class="">Area Max:</P>
        <P class=""> €{{ RentNumber.Max }}/m²</P>
      </div>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue';

const RentNumber = inject('RentNumber')


</script>
