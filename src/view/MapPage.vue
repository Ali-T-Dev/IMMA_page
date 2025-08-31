<template>
  <div class="flex justify-center items-center">
    <div>
      <HeaderMapComponent/>
      <MapComponent/>
      <SelectPropertyMapComponent/>
      <FinanceTab/>
      <CashFlowSummaryComponent/>
    </div>
  </div>
</template>
<script setup>
import CashFlowSummaryComponent from '@/components/MapPage/CashFlowSummaryComponent.vue';
import FinanceTab from '@/components/MapPage/FinanceTab.vue';
import HeaderMapComponent from '@/components/MapPage/HeaderMapComponent.vue';
import MapComponent from '@/components/MapPage/MapComponent.vue';
import SelectPropertyMapComponent from '@/components/MapPage/SelectPropertyMapComponent.vue';

</script>
