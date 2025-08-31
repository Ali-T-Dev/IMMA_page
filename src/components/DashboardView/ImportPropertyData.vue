<template>
  <section class="card-bg mobile-box py-4 bg-[#f9fafb]" >
    <div class="w-full">
      <div class="px-4 pb-6">
        <h2 class="title">Welcome back!</h2>
        <p class="sub_title">Import your property data to start analysis</p>
      </div>
      <div class="card-style pb-8">
        <h3 class=" ml-2 text-base font-medium text-gray-700 px-2 py-2">Import Property Data</h3>
        <div class="card-style flex flex-col items-center">


          <div class="w-[95%] border-2 border-dashed border-blue-600 bg-blue-100 rounded-lg center-flex flex-col pb-2 pt-4 mb-4">
            <IconFileDashboerd/>
            <h4 class="text-gray-700 text-base font-medium ">Upload Excel or CSV</h4>
            <p class="text-gray-500 text-sm">Drag & drop or click to browse</p>
            <div class="py-4">
              <label for="file-upload" class="cursor-pointer font-normal text-sm px-4 py-2 bg-blue-600 text-white  rounded-full transform transition duration-200 ease-in-out hover:bg-blue-500">
                Choose File
              </label>
              <input
                type="file"
                id="file-upload"
                class="hidden"
                @change="handleFileChange"
              />
            </div>
          </div>

          <div class="w-[95%] border-2 border-dashed border-green-600 bg-green-50 rounded-lg center-flex flex-col pb-2 pt-4">
            <IconKeyboeardDashboard/>
            <h4 class="text-gray-700 text-base font-medium ">Manual Data Entry</h4>
            <p class="text-gray-500 text-sm">Enter property details manually</p>
            <div class="py-4">
              <label for="file-upload" class="cursor-pointer font-normal text-sm px-4 py-2 bg-green-700 text-white  rounded-full transform transition duration-200 ease-in-out hover:bg-green-600">
                Enter Data
              </label>
              <input
                type="file"
                id="file-upload"
                class="hidden"
                @change="handleFileChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import IconFileDashboerd from './Icons/IconFileDashboerd.vue';
import IconKeyboeardDashboard from './Icons/IconKeyboeardDashboard.vue';

</script>
