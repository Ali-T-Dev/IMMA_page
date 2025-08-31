<template>
  <div class="flex justify-center items-center">
    <div>
      <HeaderDashbordComponent/>
      <ImportPropertyData/>
      <PropertyDetailsComponent/>
    </div>
  </div>
</template>
<script setup>
import HeaderDashbordComponent from '@/components/DashboardView/HeaderDashbordComponent.vue';
import ImportPropertyData from '@/components/DashboardView/ImportPropertyData.vue';
import PropertyDetailsComponent from '@/components/DashboardView/PropertyDetailsComponent.vue';

</script>
