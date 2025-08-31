<template>
  <div class="w-full bg-[#f9fafb] border border-gray-200 p-4">
    <!-- Header -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-semibold text-lg">Cash Flow Summary</h2>
      <span class="text-sm text-blue-500">Monthly</span>
    </div>

    <!-- Values -->
    <div class="grid grid-cols-2 gap-3 text-sm">
      <div class="flex flex-col bg-white shadow-sm p-2 rounded-lg ">
        <span class="text-gray-600">Total Income</span>
        <span class="text-green-600 font-semibold">$4,800</span>
      </div>

      <div class="flex flex-col bg-white shadow-sm p-2 rounded-lg ">
        <span class="text-gray-600">Total Expenses</span>
        <span class="text-red-600 font-semibold">$1,250</span>
      </div>

      <div class="flex flex-col bg-white shadow-sm p-2 rounded-lg ">
        <span class="text-gray-600">Net Cash Flow</span>
        <span class="text-blue-600 font-semibold">$3,550</span>
      </div>

      <div class="flex flex-col bg-white shadow-sm p-2 rounded-lg ">
        <span class="text-gray-600">Annual Net</span>
        <span class="text-blue-600 font-semibold">$42,600</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// استاتیک فعلاً - بعداً می‌تونی props بدی برای اعداد و عنوان
</script>
