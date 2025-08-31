<template>
    <section class="card-bg mobile-box p-4 bg-[#f9fafb] border border-gray-100">
     <div class="pb-6">
        <h2 class="title text-xl font-bold">Choose Your Plan</h2>
        <p class="text-gray-500 text-sm">Select the plan that fits your investment needs</p>
      </div>
      <div class="grid grid-cols-1">
          <PlanePartItemComponent
            v-for="(plan, index) in plans"
            :key="index"
            :item="plan"
          />
        </div>
        <div class="">
          <p class="text-center text-gray-400 text-xs mt-2">By subscribing, you agree to our <a href="#" class="text-blue-700 underline">Terms of Service</a></p>
        </div>
    </section>
</template>

<script setup>
import PlanePartItemComponent from './PlanePartItemComponent.vue';
import IcongoldCheckPlane from './Icons/iconGoldCheckPlane.vue';
import IconGreenCheckPlane from './Icons/IconGreenCheckPlane.vue';
import IconCrossPlane from './Icons/IconCrossPlane.vue';
const plans = [
  {
    name: 'Free Plan',
    tag: 'Basic',
    price: 0,
    features: [
      { text: 'Basic ROI/ROE calculations', color: 'text-gray-800', icon: IconGreenCheckPlane },
      { text: 'Limited property management (3 properties)', color: 'text-gray-800', icon: IconGreenCheckPlane },
      { text: 'Map access', color: 'text-gray-400', icon: IconCrossPlane },
      { text: 'Property comparison', color: 'text-gray-400', icon: IconCrossPlane },
      { text: 'White-label reports', color: 'text-gray-400', icon: IconCrossPlane }
    ],
    buttonText:'Current Plan'
  },
  {
    name: 'Silver Plan',
    tag: 'Popular',
    price: 19,
    features: [
      { text: 'Advanced ROI/ROE calculations', color: 'text-gray-700', icon: IconGreenCheckPlane },
      { text: 'Unlimited property management', color: 'text-gray-700', icon: IconGreenCheckPlane },
      { text: 'Basic map access', color: 'text-gray-700', icon: IconGreenCheckPlane },
      { text: 'Property comparison (up to 5)', color: 'text-gray-700', icon: IconGreenCheckPlane },
      { text: 'White-label reports', color: 'text-gray-400', icon: IconCrossPlane }
    ],
    buttonText: 'Upgrade Now',
    isPopular: true
  },
  {
    name: 'Gold Plan',
    tag: 'Premium',
    price: 49,
    features: [
      { text: 'Premium ROI/ROE calculations',  color: 'text-white', icon: IcongoldCheckPlane },
      { text: 'Unlimited property management', color: 'text-white', icon: IcongoldCheckPlane },
      { text: 'Advanced map access with filters', color: 'text-white', icon: IcongoldCheckPlane },
      { text: 'Unlimited property comparison', color: 'text-white', icon: IcongoldCheckPlane },
      { text: 'White-label reports', color: 'text-white', icon: IcongoldCheckPlane }
    ],
    buttonText: 'Upgrade Now'
  }
];
</script>
