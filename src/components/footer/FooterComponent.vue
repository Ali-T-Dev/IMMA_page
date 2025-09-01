<template>
  <nav class="px-6 py-5 center-flex border border-gray-200 w-[370px] rounded-b-xl mx-auto">
    <ul class="center-flex justify-around font-semibold text-gray-600 w-full">
      <li>
        <RouterLink to="/" class="nav-link">Dashboard</RouterLink>
      </li>
      <li>
        <RouterLink to="/Analysis" class="nav-link">Analysis</RouterLink>
      </li>
      <li>
        <RouterLink to="/Map" class="nav-link">Map</RouterLink>
      </li>
      <li>
        <RouterLink to="/Plans" class="nav-link">Plans</RouterLink>
      </li>
    </ul>
  </nav>
</template>
