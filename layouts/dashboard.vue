<template>
  <div>
    <Navbar />
    <div class="py-20 px-8">
      <Nuxt />
    </div>
  </div>
</template>

<script>
// import {  } from "@";
export default {
  middleware: 'auth'
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
