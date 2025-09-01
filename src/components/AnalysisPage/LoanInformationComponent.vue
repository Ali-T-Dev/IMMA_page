<template>
  <section class="bg-white rounded-xl border border-gray-200 p-4 mb-6">
    <h2 class="title text-gray-950 mb-2">Loan Information</h2>
    <p class="text-xs text-gray-600 mb-4">
      Enter your loan details to calculate accurate ROE (Return on Equity)
    </p>

    <form @submit.prevent="calculateReturns" class="space-y-4">
      <div>
        <label class="block text-gray-700 font-medium mb-1" for="loanAmount"
          >Loan Amount (€)</label
        >
        <input
          type="number"
          id="loanAmount"
          v-model.number="loanAmount"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="e.g.200,000"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1" for="interestRate"
          >Interest Rate (%)</label
        >
        <input
          type="number"
          step="0.01"
          id="interestRate"
          v-model.number="interestRate"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="e.g. 3.5"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1" for="loanTerm"
          >Loan Term (years)</label
        >
        <input
          type="number"
          id="loanTerm"
          v-model.number="loanTerm"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="e.g. 30"
        />
      </div>

      <button
        type="submit"
        class="w-full flex items-center justify-center gap-2 bg-blue-800 text-white p-3 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
      >
        <IconCalculatorAnalysis />
        Calculate Investment Returns
      </button>
    </form>

    <div
      v-if="result !== null"
      class="mt-6 p-4 bg-blue-50 rounded-lg text-blue-800 font-medium"
    >
      Total Returns: €{{ result.toFixed(2) }}
    </div>

    <!-- Popup -->
    <FinancingPopup v-if="showPopup" @close="showPopup = false" />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import IconCalculatorAnalysis from "./Icons/IconCalculatorAnalysis.vue";
import FinancingPopup from "./PopUp/FinancingPopup.vue";


const loanAmount = ref("");
const interestRate = ref("");
const loanTerm = ref("");
const result = ref(null);
const showPopup = ref(false);

const calculateReturns = () => {
  const r = interestRate.value / 100;
  result.value = loanAmount.value * Math.pow(1 + r, loanTerm.value);
};

// وقتی کامپوننت لود شد پاپاپ باز بشه
onMounted(() => {
  showPopup.value = true;
});
</script>
