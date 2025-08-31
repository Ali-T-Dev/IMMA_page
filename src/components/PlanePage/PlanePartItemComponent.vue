<template>
  <section class="card-bg mobile-box w-full bg-white mb-6 shadow-lg rounded-xl" >
    <div
      :class="['shadow-lg rounded-xl p-4 flex flex-col justify-between ',
       item.isPopular ? 'border-blue-500 shadow-lg' : 'border-gray-300',
        item.name === 'Free Plan' ? 'bg-blue-100 ' : '',
        item.name === 'Silver Plan' ? 'bg-gray-100' : '',
        item.name === 'Gold Plan' ? 'bg-blue-800 text-white' : ''
       ]"
      >
      <div >
        <div class="flex items-center justify-between">
          <h3 :class="[
            'text-lg font-medium',
            item.name === 'Free Plan' ? 'text-blue-800 ' : '',
            item.name === 'Silver Plan' ? 'text-gray-700' : '',
            item.name === 'Gold Plan' ? 'text-white' : ''
            ]">
              {{ item.name }}
            </h3>
            <p :class="['text-sm  py-1 px-2 rounded-full',
            item.tag === 'Basic' ? 'text-blue-800 bg-white' : '',
            item.tag === 'Popular' ? 'text-gray-600 bg-white' : '',
            item.tag === 'Premium' ? 'text-gray-600 bg-[#ffd700]' : '',
            ]">
            {{ item.tag }}
          </p>
        </div>
        <p
        :class="['text-2xl font-bold my-2',
          (item.price === 0 || item.price === 19) ? 'text-gray-700' :'',
          item.price === 49  ? ' text-white' :'',
        ]">
          ${{ item.price }}
          <span
          :class="['text-gray-500 text-sm font-normal',
          (item.price === 0 || item.price === 19) ? 'text-gray-500' :'',
          item.price === 49  ? ' text-white' :'',
        ]">
          /month</span>
        </p>

        <div v-for="(feature, index) in item.features" :key="index" class="flex items-center gap-2 text-sm font-normal leading-6">
          <component :is="feature.icon" />
          <span :class="feature.color">{{ feature.text }}</span>
        </div>

      </div>

      <button
        v-if="item.buttonText"
        :class="[
            'text-lg font-medium p-2 rounded-lg mt-6',
            item.buttonText === 'Current Plan' ? 'text-blue-800 bg-white border border-blue-600 ' : '',
            item.buttonText === 'Upgrade Now' && item.isPopular ? 'text-white bg-emerald-500' : '',
            item.buttonText === 'Upgrade Now' ? 'text-gray-600 bg-[#ffd700]' : ''
            ]">
        {{ item.buttonText }}
      </button>
    </div>
  </section>
</template>

<script setup>

defineProps({
  item: Object
});
</script>
