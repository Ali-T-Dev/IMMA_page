<template>
  <section class="card-bg mobile-box px-2 py-2 shadow-lg bg-[#f9fafb]">
    <Form @submit="onSubmit" class="space-y-4 max-w-md mx-auto p-6">

      <div class="flex flex-col items-center">
        <label class="cursor-pointer">
          <div class="w-24 h-24 relative overflow-visible bg-gray-200 border-2 border-blue-600 rounded-full flex items-center justify-center mb-2">
            <img v-if="profilePreview" :src="profilePreview" alt="Profile Preview" class="w-full h-full object-cover"/>
            <span v-else class="text-gray-400 text-sm">
              <IconPersonLogin/>
            </span>
            <div class="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <IconCameraLogin/>
            </div>
          </div>
          <Field name="profile" type="file" class="hidden" @change="onFileChange"/>
        </label>
        <p class="text-blue-800 font-normal">Upload Profile Picture</p>
        <ErrorMessage name="profile" class="text-red-500 text-xs"/>
      </div>

      <div>
        <label class="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
        <Field name="fullName" type="text" placeholder="Enter your full name" class="bg-white w-full border border-gray-300 rounded px-3 py-2 text-base"/>
        <ErrorMessage name="fullName" class="text-red-500 text-xs"/>
      </div>

      <div>
        <label class="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
        <Field name="email" type="email" placeholder="Enter your email" class="bg-white w-full border border-gray-300 rounded px-3 py-2 text-base"/>
        <ErrorMessage name="email" class="text-red-500 text-xs"/>
      </div>

      <div>
        <label class="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
        <Field name="phone" type="text" placeholder="Enter your Phone Number" class="bg-white w-full border border-gray-300 rounded px-3 py-2 text-base"/>
        <ErrorMessage name="phone" class="text-red-500 text-xs"/>
      </div>

      <div class="relative">
        <label class="block text-gray-700 text-sm font-medium mb-1">Password</label>
        <input
          :type="showNumbers ? 'text' : 'password'"
          v-model="pin"
          placeholder="Create a password"
          class="bg-white w-full border border-gray-300 rounded px-3 py-2 text-base pr-10"
          @input="setFieldValue('password', pin)"
        />
        <button
          type="button"
          class="absolute inset-y-0 right-3 flex items-center text-gray-400"
          @click="toggleNumbers"
        >
          <svg v-if="!showNumbers" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a10.056 10.056 0 012.93-4.105m3.477-2.44A9.953 9.953 0 0112 5c4.478 0 8.269 2.943 9.543 7a10.05 10.05 0 01-1.85 3.037M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
          </svg>
        </button>
        <ErrorMessage name="password" class="text-red-500 text-xs"/>
        <p class="text-gray-400 text-xs mt-1">
          Must be at least 8 characters with 1 uppercase, 1 number
        </p>
      </div>

      <button type="submit" class="text-lg font-normal flex items-center justify-center my-4 w-full py-3 rounded-lg text-white bg-gradient-to-r from-blue-500 to-green-700">
        Create Account
        <IconArrowLogin/>
      </button>

      <div class="flex items-center my-4 text-gray-500 text-sm">
        <span class="flex-grow border-t border-gray-500"></span>
        <span class="mx-2 text-sm">or continue with</span>
        <span class="flex-grow border-t border-gray-500"></span>
      </div>
      <div class="flex justify-center gap-4 mt-2">
        <button type="button" class="w-full border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition">Google</button>
        <button type="button" class="w-full border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition">Apple</button>
      </div>

      <p class="text-center text-gray-500 text-sm mt-4">
        Already have an account? <a href="#" class="text-blue-600 hover:underline">Sign In</a>
      </p>

      <p class="text-center text-gray-400 text-xs mt-2">
        By signing up, you agree to our <a href="#" class="underline">Terms of Service</a> and <a href="#" class="underline">Privacy Policy</a>.
      </p>

    </Form>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Form, Field, ErrorMessage, useForm } from 'vee-validate';
import * as yup from 'yup';
import IconPersonLogin from './Icons/IconPersonLogin.vue';
import IconCameraLogin from './Icons/IconCameraLogin.vue';
import IconArrowLogin from './Icons/IconArrowLogin.vue';

const profilePreview = ref(null);

const pin = ref('');
const showNumbers = ref(false);

const schema = yup.object({
  profile: yup.mixed().required('Profile picture is required'),
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
});

const { handleSubmit, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    profile: null,
    fullName: '',
    email: '',
    phone: '',
    password: ''
  }
});

watch(pin, (newVal) => {
  setFieldValue('password', newVal);
});

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setFieldValue('profile', file);
    const reader = new FileReader();
    reader.onload = (event) => {
      profilePreview.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const toggleNumbers = (event) => {
  event.preventDefault();
  event.stopPropagation();
  showNumbers.value = !showNumbers.value;
};

const onSubmit = handleSubmit((formValues) => {
  console.log('Form submitted:', formValues);
});
</script>

