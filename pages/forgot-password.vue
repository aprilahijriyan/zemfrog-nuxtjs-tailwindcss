<template>
  <!-- component -->
  <div class="">
    <div class="flex flex-row items-center justify-center">
      <div class="lg:flex-1 lg:px-16 lg:py-6">
        <img
          src="~assets/images/forgot_password.svg"
          class="h-auto w-full object-cover hidden lg:block"
        >
      </div>
      <div class="flex-1">
        <div
          class="flex flex-col items-center justify-center bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md"
        >
          <div
            class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800"
          >
            Forgot Password
          </div>
          <div v-if="login_error">
            <div class="mt-3 p-2 border rounded-md border-red-400">
              <p class="text-sm text-red-500 font-semibold">
                Email does not exist
              </p>
            </div>
          </div>
          <div class="mt-5">
            <div class="mb-4">
              <p class="text-center text-md p-2 rounded-md bg-gray-200">
                Please enter your email address, we will send you a link to
                reset your password.
              </p>
            </div>
            <form action="#">
              <div class="flex flex-col mb-6">
                <label
                  for="email"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Email:</label>
                <div class="relative">
                  <div
                    class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>

                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="user@email.com"
                    @input="$v.email.$touch()"
                  >
                </div>
                <div class="flex flex-col">
                  <p
                    v-if="$v.email.$error && !login_error"
                    class="text-xs text-red-400"
                  >
                    <span
                      v-if="!$v.email.email"
                    >* Please enter your email correctly</span>
                    <span v-else-if="!$v.email.required">* Email required</span>
                  </p>
                </div>
              </div>
              <div class="flex w-full">
                <a
                  href="javascript:void(0)"
                  class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                  @click="doRequestPasswordReset"
                >
                  <span class="mr-2 uppercase">Send</span>
                  <span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </form>
          </div>
          <div class="flex justify-center items-center mt-6">
            <nuxt-link
              to="/register"
              class="font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
            >
              You don't have an account?
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  middleware: 'is_logged_in',
  data () {
    return {
      email: '',
      login_error: false
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    doResetData (all = true) {
      this.email = ''
      if (all) {
        this.login_error = false
      }
      this.$v.$reset()
    },
    doRequestPasswordReset () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.login_error = false
      } else {
        const data = new FormData()
        data.append('username', this.email)
        this.$axios
          .$post('/auth/jwt/forgot-password', data)
          .then((resp) => {
            this.$swal({
              title: 'The password reset request has been sent.',
              icon: 'info'
            })
            this.doResetData()
          })
          .catch((_err) => {
            const data = _err.response.data
            if (data && data.status_code === 404) {
              this.login_error = true
            }
            this.doResetData(false)
          })
      }
    }
  }
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
