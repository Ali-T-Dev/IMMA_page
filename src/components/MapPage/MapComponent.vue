<template>
  <section class=" bg-white w-[370px]  border border-gray-200">

    <div class="flex justify-between items-center w-full py-2 px-4">
      <h2 class="text-base font-normal text-gray-500">LOCATION</h2>
      <button class="flex items-center text-base font-semibold text-blue-500 gap-1 py-1 px-2">
        <IconFilterMap/>
        Filter
      </button>
    </div>

    <div class="px-4 flex  gap-4 mb-4">
      <select v-model="selectedCountry" class="w-full border border-gray-300 rounded-lg text-black text-sm p-2">
        <option disabled value="">Select Country</option>
        <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
      </select>

      <select v-model="selectedCity" class="w-full border border-gray-300 rounded-lg text-black text-sm p-2">
        <option disabled value="">Select City</option>
        <option v-for="city in filteredCities" :key="city" :value="city">{{ city }}</option>
      </select>
    </div>

    <div class="w-full h-[320px] overflow-hidden">
      <img :src="Map" alt="Map" class="w-full h-full object-cover"/>
    </div>
  </section>
</template>

<script setup>
import Map from '@/assets/Image/Map.jpg'
import { ref, computed } from 'vue';
import IconFilterMap from './Icons/IconFilterMap.vue';

const countries = ['United States', 'germany', 'United kingdom', 'france' ];
const cities = {
  'United States': ['New York', 'Los Angeles', 'Chicago '],
  'germany': ['Toronto', 'Vancouver', 'Montreal'],
  'United kingdom': ['New York', 'Los Angeles', 'Chicago '],
  'france': ['New York', 'Los Angeles', 'Chicago '],
};

const selectedCountry = ref('');
const selectedCity = ref('');

const filteredCities = computed(() => {
  return selectedCountry.value ? cities[selectedCountry.value] : [];
});
</script>
