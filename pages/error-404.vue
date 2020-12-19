<template>
  <div class="grid grid-cols-1 gap-4 h-screen">
    <div class="flex justify-center pt-4">
      <img
        src="~assets/images/404_page_not_found.svg"
        width="300px"
        height="300px"
      >
    </div>
    <div class="flex justify-center p-5">
      <div
        class="w-full lg:w-1/2 p-4 rounded-lg"
        style="box-shadow: 2px 2px 2px 2px rgb(148, 146, 139); height: 11rem"
      >
        <div class="">
          <div class="md:px-10">
            <h1 class="text-center font-bold text-xl py-2">
              OOoooopppsss!
            </h1>
            <p class="py-3 text-center text-md">
              The page you are looking for can not be found. Maybe with others?
              :(
            </p>
            <div class="flex justify-center">
              <div
                class="text-md font-medium bg-indigo-800 rounded-lg py-1 px-2"
              >
                <nuxt-link to="/" class="text-white uppercase font-semibold">
                  Go home
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   layout: 'error-layout'
}
</script>

<style>
</style>
