<template>
  <div class="max-w-[360px] w-full bg-white p-4 rounded-xl shadow">
    <h2 class="mb-3 font-medium text-gray-900">Broker Information</h2>

    <div class="mb-3">
      <label for="brokerName" class="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <input type="text" id="brokerName" v-model="broker.name"
            placeholder="Enter broker name"
            class="w-full border border-gray-300 rounded-lg text-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
    </div>

    <div class="mb-3">
      <label for="brokerCommission" class="block text-sm font-medium text-gray-700 mb-1">
        Commission
      </label>
      <input type="number" id="brokerCommission" v-model="broker.commission"
            placeholder="Enter commission"
            class="w-full border border-gray-300 rounded-lg text-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
    </div>

    <div class="mb-3">
      <label for="brokerContact" class="block text-sm font-medium text-gray-700 mb-1">
        Contact
      </label>
      <input type="text" id="brokerContact" v-model="broker.contact"
            placeholder="Enter contact info"
            class="w-full border border-gray-300 rounded-lg text-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
    </div>
  </div>
</template>
<script setup></script>
