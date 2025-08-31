<template>
  <section class="card-bg mobile-box py-4 bg-[#f9fafb]">
    <div class="card-style flex flex-col items-center">

      <h2 class="text-base font-medium text-gray-800 py-4 flex justify-self-center w-full ml-12" >Property Details</h2>

      <div class="w-full center-flex flex-col px-4">
        <p class="form_title flex justify-self-center w-full px-2 mb-1">Property Image</p>

        <div class="w-[95%] border-2 border-dashed border-gray-300 rounded-lg center-flex flex-col pb-2 pt-4 mb-4">
            <IconImageDashboerd/>
            <p class="text-gray-500 text-sm">Upload property image</p>
            <div class="py-4">
              <label for="file-upload" class="cursor-pointer font-normal text-sm px-4 py-2 bg-gray-300 text-gray-700  rounded-full transform transition duration-200 ease-in-out hover:bg-gray-200">
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

          <div class="w-full center-flex flex-col px-2">
            <label for="address" class="form_title flex justify-self-center w-full my-2">َAddress</label>
            <input type="text" id="address" placeholder="Property address" class="w-full text-sm p-2 border border-gray-300 rounded-lg text-gray-500">

            <div class="flex justify-between gap-2">
              <div class="">
                <label for="Purchase Price" class="form_title flex justify-self-center w-full my-2  ">Purchese Price</label>
                <input type="number" name="Purchese Price" id="Purchase Price" placeholder="€" class="w-full text-sm p-2 border border-gray-300 rounded-lg text-gray-500">
              </div>

              <div class="">
                <label for="Total Rent" class="form_title flex justify-self-center w-full my-2  ">Total Rent</label>
                <input type="number" neme="Total Rent" id="Total Rent" placeholder="€/month" class="w-full text-sm p-2 border border-gray-300 rounded-lg text-gray-500">
              </div>
            </div>

            <div class="flex justify-between gap-2">
              <div class="">
                <label for="Area" class="form_title flex justify-self-center w-full my-2  ">Area (m²)</label>
                <input type="number" name="Area" id="Area" placeholder="m²" class="w-full text-sm p-2 border border-gray-300 rounded-lg text-gray-500">
              </div>

              <div class="">
                <label for="Rooms" class="form_title flex justify-self-center w-full my-2  ">Rooms</label>
                <input type="number" neme="Rooms" id="Rooms" placeholder="Number of rooms" class="w-full text-sm p-2 border border-gray-300 rounded-lg text-gray-500">
              </div>
            </div>

            <div class="flex w-full gap-2 mt-2  ">
              <div class="flex-1">
                <form>
                  <label for="Apartment" class="block mb-2 form_title font-medium text-gray-900">Property Type</label>
                  <select id="Apartment" class="w-full border border-gray-300 rounded-lg text-black text-sm p-2">
                    <option selected>Apartment</option>
                    <option value="House">House</option>
                    <option value="commercial">commercial</option>
                    <option value="land">land</option>
                  </select>
                </form>
              </div>

              <div class="flex-1">
                <label for="Floor" class="form_title block mb-2 font-medium text-gray-900">Floor</label>
                <input type="number" name="Floor" id="Floor" placeholder="Floor number" class="w-full text-sm p-2 border border-gray-300 rounded-lg text-gray-500">
              </div>
            </div>


            <div class="flex flex-col items-start w-full mt-2">

              <h2 class=" form_title">Rental Status</h2>

              <div class="flex items-center gap-6">
                <label class="flex items-center gap-2 text-base cursor-pointer">
                  <input type="radio" name="rental_status" value="Rented"
                    class="text-blue-600 focus:ring-blue-500">
                  <span>Rented</span>
                </label>

                <label class="flex items-center gap-2 text-base cursor-pointer">
                  <input type="radio" name="rental_status" value="Vacant"
                    class="text-blue-600 focus:ring-blue-500">
                  <span>Vacant</span>
                </label>
              </div>
            </div>

            <div class="w-full max-w-[360px] bg-white py-6 rounded-xl">
              <form class="space-y-8">

                <div>
                  <h2 class="mb-2 form_title font-medium text-gray-900">Costs</h2>

                  <div v-for="(cost, index) in costs" :key="index"
                      class="flex items-center gap-3 mb-3">

                    <input type="text" v-model="cost.name"
                          :id="'costName-' + index"
                          placeholder="Cost name"
                          class="flex-1 border w-[110px] border-gray-300 rounded-lg text-sm p-2">

                    <input type="number" v-model="cost.value"
                          :id="'costValue-' + index"
                          placeholder="Value"
                          class="flex-1 border w-[110px] border-gray-300 rounded-lg text-sm p-2">

                    <button type="button" @click="removeCost(index)"
                            class="p-2 text-red-600 hover:text-red-800">
                            <IconGarbegeBagDashboerd/>
                    </button>
                  </div>

                  <button type="button" @click="addCost"
                    class="flex text-blue-500 text-base">
                    <IconPlusDashboard/>
                    Add Cost
                  </button>
                </div>

                <div>
                  <h2 class="mb-2 form_title font-medium text-gray-900">Equipment</h2>
                  <textarea id="description" rows="4" placeholder="Property equipment and features"
                    class="w-full border border-gray-300 rounded-lg text-sm p-2"></textarea>
                </div>

                <div>
                  <h2 class="mb-2 form_title font-medium text-gray-900">Description</h2>
                  <textarea id="description" rows="4" placeholder="property description"
                    class="w-full border border-gray-300 rounded-lg text-sm p-2"></textarea>
                </div>
              </form>
            </div>

            <div class="w-full bg-[#f9fafb] p-4 rounded-xl shadow">
              <h2 class="mb-3 font-medium text-gray-900">Broker Information</h2>

              <div class="mb-3">
                <label for="brokerName" class="block text-sm font-base text-gray-700 mb-1">
                  Name
                </label>
                <input type="text" id="brokerName" v-model="broker.name"
                      placeholder="Broker name"
                      class="w-full border border-gray-300 bg-white rounded-lg text-sm p-2"/>
              </div>

              <div class="flex gap-2">
                <div class="mb-3">
                  <label for="brokerCommission" class="block text-sm font-base text-gray-700 mb-1">
                    Commission
                  </label>
                  <input type="number" id="brokerCommission" v-model="broker.commission"
                        placeholder="€"
                        class="w-full border border-gray-300 bg-white rounded-lg text-sm p-2"/>
                </div>

                <div class="mb-3">
                  <label for="brokerContact" class="block text-sm font-base text-gray-700 mb-1">
                    Contact
                  </label>
                  <input type="text" id="brokerContact" v-model="broker.contact"
                        placeholder="Email or phone"
                        class="w-full border border-gray-300 bg-white rounded-lg text-sm p-2"/>
                </div>
              </div>
            </div>

            <button type="submit" class="my-4 w-full py-3 rounded-lg text-white bg-gradient-to-r from-blue-500 to-green-700">
              save property
            </button>

          </div>

      </div>
    </div>
  </section>
</template>
<script setup>
import IconImageDashboerd from './Icons/IconImageDashboerd.vue';
import IconGarbegeBagDashboerd from './Icons/IconGarbegeBagDashboerd.vue';
import IconPlusDashboard from '@/components/DashboardView/Icons/IconPlusDashboard.vue';
import { reactive, ref } from "vue";

const costs = ref([
  { name: "", value: "" }
]);

function addCost() {
  costs.value.push({ name: "", value: "" });
}

function removeCost(index) {
  costs.value.splice(index, 1);
}
const broker = reactive({
  name: '',
  commission: '',
  contact: ''
});

</script>
