<template>
  <section class="card-bg mobile-box h-full p-4 bg-[#f9fafb] border border-gray-100">
    <div class="flex flex-col items-center mb-4">
      <h2 class="title text-gray-950 text-xl mb-1">Property Analysis</h2>
      <p class="text-xs font-normal text-gray-500">Investment Calculator & Returns</p>
    </div>
    <PropertyOverviewComponent :property="selectedProperty"/>
    <PropertyDetailsComponent :property="PropertyDetails"/>
    <LoanInformationComponent/>
    <InvestmentAnalysisComponent/>
  </section>
</template>
<script setup>
import PropertyOverviewComponent from './PropertyOverviewComponent.vue';
import PropertyDetailsComponent from './PropertyDetailsComponent.vue';
import apartment from  '@/assets/Image/apartment.jpg'
import LoanInformationComponent from './LoanInformationComponent.vue';
import InvestmentAnalysisComponent from './InvestmentAnalysisComponent.vue';
import { provide, reactive } from 'vue';

const selectedProperty = {
  image: apartment,
  title: 'Modern Apartment',
  address: 'Bergstrasse 15, 10115 Berlin',
  purchasePrice: 320000,
  monthlyRent: 1450,
  area: 75,
  pricePerM2: 4267,
  rooms: 3,
  floor: '4th',
  type:'Apartment',
  status: 'Rented'
}

const PropertyDetails = {
  description: "Modern, bright apartment with open floor plan and high-quality finishes. The property features a spacious living room, a fully equipped kitchen, two bedrooms, and a balcony with a city view. Located in a quiet neighborhood with excellent transport connections.",
  equipment: "Modern kitchen with built-in appliances (dishwasher, oven, induction stove), wooden floors, underfloor heating in bathroom, walk-in shower, built-in wardrobe in master bedroom, fiber optic internet connection.",
  additionalCosts: {
    Heating: 500,
    "Kitchen Renovation": 300
  },
  broker: {
    name: "Berlin Real Estate GmbH",
    contact: "Michael Schmidt",
    phone: "+49 151 2345 6789",
    email: "info@berlinrealestate.de"
  }
}
const Rent = reactive({
  YourRent:19.3,
  Min:16.5,
  Avg:19.8,
  Max:23.2,
})
provide("RentNumber" , Rent )

</script>


<!--





Break-Even Analysis

Break-Even Point: - years (1–30 سال)

Rent Index Analysis

Your Rent: €19.3/m² (Good Value)

Area Min: €16.5/m²

Area Avg: €19.8/m²

Area Max: €23.2/m²

خلاصه:
صفحه یک نمای کلی کامل از یک ملک سرمایه‌گذاری در برلین ارائه می‌دهد، شامل مشخصات آپارتمان، جزئیات تجهیزات، هزینه‌های اضافی، اطلاعات کارگزار، امکان وارد کردن جزئیات وام، و محاسبه شاخص‌های سرمایه‌گذاری مثل ROI، ROE، Cash Flow و Break-Even Point -->
