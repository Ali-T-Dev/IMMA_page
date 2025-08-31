<template>
  <div class="w-[370px] border border-gray-200 bg-white p-4">
    <!-- Tabs -->
    <div class="flex gap-4  mb-4">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class=" py-2 text-sm font-medium"
        :class="activeTab === tab
          ? 'border-b-2 border-blue-500 text-blue-600'
          : 'text-gray-500'"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Cash Flow -->
    <div v-if="activeTab === 'Cash Flow'">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-semibold text-lg">Monthly Cash Flow</h2>
        <select
          v-model="timeRange"
          class="border border-gray-300 rounded-lg text-sm p-2"
        >
          <option value="monthly">Monthly</option>
          <option value="annual">Annual</option>
        </select>
      </div>

      <div ref="chartContainer"></div>
    </div>

    <!-- Other tabs -->
    <div v-else-if="activeTab === 'Break Even'">
      <p class="text-gray-700">📊 Break Even Analysis (coming soon...)</p>
    </div>
    <div v-else-if="activeTab === 'Tax Effects'">
      <p class="text-gray-700">📊 Tax Effects (coming soon...)</p>
    </div>
    <div v-else-if="activeTab === 'ROI Analysis'">
      <p class="text-gray-700">📊 ROI Analysis (coming soon...)</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue"
import Highcharts from "highcharts"

// تنظیمات global برای جلوگیری از Invalid language tag
Highcharts.setOptions({
  lang: {
    decimalPoint: ".",
    thousandsSep: ","
  }
})

const tabs = ["Cash Flow", "Break Even", "Tax Effects", "ROI Analysis"]
const activeTab = ref("Cash Flow")
const timeRange = ref("monthly")
const chartContainer = ref(null)

const monthlyData = {
  income: [5000, 4800, 4700, 5100, 5300, 4900, 5200, 5400, 5000, 5100, 4950, 5050],
  expenses: [-1500, -1800, -1600, -2000, -1700, -1800, -1900, -2100, -2000, -1700, -1800, -1900],
}
const annualData = {
  income: [60000],
  expenses: [-21000],
}

const renderChart = () => {
  if (!chartContainer.value) return

  const categories = timeRange.value === "monthly"
    ? ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    : ["Annual"]

  const data = timeRange.value === "monthly" ? monthlyData : annualData

  Highcharts.chart(chartContainer.value, {
    chart: { type: "column", height: 300 },
    title: { text: "" },
    credits: { enabled: false },
    xAxis: { categories, labels: { rotation: -45 } },
    yAxis: { title: { text: "" } },
    series: [
      { name: "Income", data: data.income, color: "#10B981" },
      { name: "Expenses", data: data.expenses, color: "#EF4444" },
    ],
  })
}

onMounted(renderChart)
watch(timeRange, renderChart)
</script>
