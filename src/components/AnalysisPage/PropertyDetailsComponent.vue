<template>
  <section class="bg-white rounded-xl border border-gray-200 p-4 mb-6">
    <div class="">
      <h1 class="title text-gray-950 mb-4">Property Details</h1>
      <div>
        <h3 class="text-base font-medium text-gray-900 mb-2">Description</h3>
        <p class="text-sm text-gray-600">{{ property.description }}</p>
      </div>

      <div>
        <h3 class="text-base font-medium text-gray-900 my-2">Equipment</h3>
        <p class="text-sm text-gray-600">{{ property.equipment }}</p>
      </div>


      <div>
        <h3 class="text-base font-medium text-gray-900 my-2">Additional Costs</h3>
        <ul class="text-gray-700 space-y-1">
          <li v-for="(cost, key) in property.additionalCosts" :key="key" >
            <div class=" flex justify-between items-center">
              <div class="text-sm text-gray-900 font-base">{{ key }}:</div>
              <div class="text-sm text-gray-900 font-medium">€{{ cost }}</div>
            </div>
          </li>
          <div class="w-full bg-gray-200 h-[1px]"></div>
          <li class="font-semibold pt-1 pb-4">
            <div class="flex justify-between items-center">
              <div class="text-sm text-gray-900 font-medium">Total Additional Costs: </div>
              <div class="text-sm text-gray-900 font-medium">€{{ totalAdditionalCosts }}</div>
            </div>
          </li>
          <div class="w-full bg-gray-200 h-[1px]"></div>
        </ul>
      </div>

      <h3 class="text-base font-medium text-gray-900 my-4">Broker Information</h3>
      <div class="flex items-center gap-4">
        <div class="bg-gray-200 w-10 h-10 center-flex rounded-full">
         <IconOfficeAnaliyses/>
        </div>
        <div class="flex  flex-col justify-center itece">
          <p class="text-sm font-medium text-gray-900">{{ property.broker.name }}</p>
          <p class="text-sm text-gray-600">{{ property.broker.contact }}</p>
          <div class="flex gap-2">
            <div class="text-blue-800 text-sm flex items-center gap-1">
              <IconPhoneAnalysis/>
              {{ property.broker.phone }}
            </div>
            <div class="text-blue-800 text-sm flex items-center gap-1">
              <IconLetterAnalysis/>
              Email
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'
import IconOfficeAnaliyses from './Icons/IconOfficeAnaliyses.vue'
import IconPhoneAnalysis from './Icons/IconPhoneAnalysis.vue'
import IconLetterAnalysis from './Icons/IconLetterAnalysis.vue'

const props = defineProps({
  property: {
    type: Object,
    required: true
  }
})

const totalAdditionalCosts = computed(() => {
  return Object.values(props.property.additionalCosts).reduce((sum, val) => sum + val, 0)
})
</script>
