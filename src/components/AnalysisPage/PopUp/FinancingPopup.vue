<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-900/50 z-50">
    <div class="bg-white rounded-xl shadow-lg max-w-md w-full p-6">

      <h2 class="text-lg font-semibold text-gray-900 mb-4">
        Financing Information
      </h2>
      <p class="text-sm text-gray-600 mb-6">
        To calculate accurate ROI metrics, we need to know if you used a loan for this property.
      </p>

      <div class="space-y-3">
        <label class="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="loan"
            v-model="selectedOption"
            name="financing"
            class="h-4 w-4 text-blue-800 focus:ring-blue-700"
          />
          <span>Yes, I used a loan</span>
        </label>

        <label class="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="cash"
            v-model="selectedOption"
            name="financing"
            class="h-4 w-4 text-blue-800 focus:ring-blue-700"
          />
          <span>No, I paid in cash</span>
        </label>
      </div>

      <div class="flex justify-between mt-6">
        <button
          class="text-gray-500 hover:text-gray-700"
          @click="$emit('close')"
        >
          Cancel
        </button>
        <button
          class="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          @click="submitChoice"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedOption = ref(null);

const submitChoice = () => {
  if (!selectedOption.value) {
    alert("Please select an option first.");
    return;
  }

  console.log("User selected:", selectedOption.value);
};
</script>
