<template>
  <div class="w-[370px]  bg-white p-4 border border-gray-200">
    <div class="  bg-white rounded-x  overflow-hidden space-y-4">

      <div class="flex justify-between items-center">
        <select v-model="selectedPropertyName" class="w-full border border-gray-300 rounded-lg text-black text-sm p-2">
          <option disabled value="">Select Property</option>
          <option v-for="prop in property" :key="prop.name" :value="prop.name">{{ prop.name }}</option>
        </select>
      </div>

      <div class="flex items-center justify-between">
        <p v-if="selectedProperty" class="text-xl font-semibold text-gray-900">{{ selectedProperty.name }}</p>
        <span
          v-if="selectedProperty"
          :class="selectedProperty.potential === 'High' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
          class=" rounded-full text-xs font-base w-25 p-2"
        >
          {{ selectedProperty.potential }} Potential
        </span>
      </div>

      <div v-if="selectedProperty" class="flex gap-4   text-gray-700">
        <div class="bg-gray-50 w-[50%] px-4 py-2 rounded-lg">
          <p class="text-sm text-gray-500">Price</p>
          <p class="font-semibold text-gray-900 text-lg">${{ selectedProperty.price.toLocaleString() }}</p>
        </div>
        <div class="bg-gray-50 w-[50%] px-4 py-2 rounded-lg">
          <p class="text-sm text-gray-500">Area</p>
          <p class="font-semibold text-gray-900 text-lg">{{ selectedProperty.area.toLocaleString() }} sq.ft</p>
        </div>
      </div>

      <div v-if="selectedProperty" class="flex gap-4   text-gray-700">
        <div class="bg-gray-50 w-[50%] px-4 py-2 rounded-lg">
          <p class="text-sm text-gray-500">Gross Yield</p>
          <p class="font-semibold text-gray-900">{{ selectedProperty.GrossYield }}%</p>
        </div>
        <div class="bg-gray-50 w-[50%] px-4 py-2 rounded-lg">
          <p class="text-sm text-gray-500">Net Yield</p>
          <p class="font-semibold text-gray-900">{{ selectedProperty.NetYield }}%</p>
        </div>
      </div>

      <div v-if="selectedProperty" class="flex gap-18  text-gray-700">
        <div>
          <p class="text-sm">ROI</p>
          <p class="font-semibold">{{ selectedProperty.roi }}%</p>
        </div>
        <div>
          <p class="text-sm">Cap Rate</p>
          <p class="font-semibold">{{ selectedProperty.capRate }}%</p>
        </div>
        <div>
          <p class="text-sm">IndexRent</p>
          <p class="font-semibold text-lg">${{ selectedProperty.IndexRent.toLocaleString() }}/mo</p>
        </div>
      </div>

      <div v-if="selectedProperty" class="text-gray-700">

      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const property = reactive([
  {
    name: 'Manhattan Luxury Apartment',
    potential: 'High',
    price: 1210000,
    area: 1200,
    GrossYield:5.8,
    NetYield:4.2,
    roi: 12.5,
    capRate: 4.8,
    IndexRent: 4800 ,
  },
  {
    name: 'Brooklyn Brownstone',
    potential: 'High',
    price: 1220000,
    area: 1200,
    GrossYield:5.8,
    NetYield:4.2,
    roi: 12.5,
    capRate: 4.8,
    IndexRent: 4800 ,
  },
  {
    name: 'Queens Residential Building ',
    potential: 'High',
    price: 1230000,
    area: 1200,
    GrossYield:5.8,
    NetYield:4.2,
    roi: 12.5,
    capRate: 4.8,
    IndexRent: 4800 ,
  }
])

const selectedPropertyName = ref('')

const selectedProperty = computed(() => {
  return property.find(p => p.name === selectedPropertyName.value)
})
</script>
