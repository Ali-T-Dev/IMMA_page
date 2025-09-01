<template>
  <section class="bg-white rounded-xl border border-gray-200 p-4 mb-6">
    <h2 class="text-base font-semibold text-gray-950 mb-3 ">Investment Analysis</h2>

    <div class="grid grid-cols-2 gap-4 text-gray-700">
      <div class="p-4 bg-[#f0f9ff] rounded-lg flex flex-col justify-center">
        <span class="text-xs font-medium text-gray-500">ROI</span>
        <span class="text-sm font-semibold mt-1">-</span>
      </div>

      <div class="p-4 bg-[rgb(240,249,255)] rounded-lg flex flex-col justify-center">
        <span class="text-xs font-medium text-gray-500">ROE</span>
        <span class="text-sm font-semibold mt-1">-</span>
      </div>

      <div class="p-4 bg-[#f0f9ff] rounded-lg flex flex-col justify-center">
        <span class="text-xs font-medium text-gray-500">Gross Yield</span>
        <span class="text-sm font-semibold mt-1 text-green-600">5.4%</span>
      </div>

      <div class="p-4 bg-[#f0f9ff] rounded-lg flex flex-col justify-center">
        <span class="text-xs font-medium text-gray-500">Net Yield</span>
        <span class="text-sm font-semibold mt-1 text-green-600">4.8%</span>
      </div>
    </div>
    <div class="mt-4">
      <CashFlowAnalysisComponent/>
    </div>

    <div class="mt-4">
      <BreakAndRentAnalysisComponent/>
    </div>

  </section>
</template>

<script setup >
  import BreakAndRentAnalysisComponent from './BreakAndRentAnalysisComponent.vue';
  import CashFlowAnalysisComponent from './CashFlowAnalysisComponent.vue';
</script>
