<template>
  <!-- component -->
  <ul class="flex text-gray-500 text-sm lg:text-base">
    <li
      v-for="([url, item], idx) in items"
      :key="item"
      class="inline-flex items-center"
    >
      <nuxt-link
        :to="url"
        :class="idx + 1 === items.length ? 'text-teal-400' : ''"
      >
        {{ item }}
      </nuxt-link>
      <div v-if="idx + 1 !== items.length">
        <svg
          class="h-5 w-auto text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>

<style>
</style>
