<template>
  <div class="grid grid-cols-1 gap-4 h-screen">
    <div class="flex justify-center pt-4">
      <img src="~assets/images/approve.svg" width="300px" height="300px">
    </div>
    <div class="flex justify-center p-5">
      <div
        class="w-full lg:w-1/2 p-4 rounded-lg"
        style="box-shadow: 2px 2px 2px 2px rgb(148, 146, 139); height: 11rem"
      >
        <div class="">
          <div class="md:px-10">
            <h1 class="text-center font-bold text-xl py-2">
              Verified!
            </h1>
            <p class="py-3 text-center text-md">
              Your account has been confirmed successfully and now you can use
              it!
            </p>
            <div class="flex justify-center">
              <div
                class="text-md font-medium bg-indigo-800 rounded-lg py-1 px-2"
              >
                <nuxt-link
                  to="/login"
                  class="text-white uppercase font-semibold"
                >
                  Log in Now
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
  middleware: 'confirm_account'
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
