<template>
  <div class="">
    <div class="flex flex-row items-center justify-center fixed">
      <div class="lg:flex-1 lg:px-16 lg:py-6">
        <img
          src="~assets/images/verified.svg"
          class="w-full object-cover hidden lg:block"
          height="200px"
        >
      </div>
      <div class="flex-1">
        <div
          class="flex flex-col items-center justify-center bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md"
        >
          <div
            class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800"
          >
            Change Password
          </div>
          <div class="mt-5">
            <div class="mb-4">
              <p
                class="text-center text-md p-2 rounded-md border border-red-500"
              >
                Please enter a new password for your account.
              </p>
            </div>
            <form action="#">
              <div class="flex flex-col mb-6">
                <label
                  for="password"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password:</label>
                <div class="relative">
                  <div
                    class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                  >
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    name="password"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="123"
                    @input="$v.password.$touch()"
                  >
                </div>
                <div class="flex flex-col">
                  <p v-if="$v.password.$error" class="text-xs text-red-400">
                    <span
                      v-if="!$v.password.min_length"
                    >* Minimum password length is 8</span>
                    <span
                      v-else-if="!$v.password.required"
                    >* Password required</span>
                  </p>
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label
                  for="password_confirm"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password Confirmation:</label>
                <div class="relative">
                  <div
                    class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                  >
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="password_confirm"
                    v-model="password_confirm"
                    type="password"
                    name="password_confirm"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="123"
                    @input="$v.password_confirm.$touch()"
                  >
                </div>
                <div class="flex flex-col">
                  <p
                    v-if="$v.password_confirm.$error"
                    class="text-xs text-red-400"
                  >
                    <span
                      v-if="!$v.password_confirm.min_length"
                    >* Minimum password length is 8</span>
                    <span
                      v-else-if="!$v.password_confirm.required"
                    >* Password confirmation required</span>
                    <span
                      v-else-if="!$v.password_confirm.is_match"
                    >* Password confirmation does not match</span>
                  </p>
                </div>
              </div>
              <div class="flex w-full">
                <a
                  href="javascript:void(0)"
                  class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                  @click="doChangePassword"
                >
                  <span class="mr-2 uppercase">Change</span>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  middleware: ['is_logged_in', 'password_reset'],
  data () {
    return {
      password: '',
      password_confirm: ''
    }
  },
  validations: {
    password: {
      required,
      min_length: minLength(8)
    },
    password_confirm: {
      required,
      min_length: minLength(8),
      is_match: sameAs('password')
    }
  },
  methods: {
    doChangePassword () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const data = new FormData()
        data.append('password', this.password)
        this.$axios
          .post(
            '/auth/jwt/password-reset/' + this.$nuxt.context.params.token,
            data
          )
          .then((_resp) => {
            this.$swal({
              title: 'Password changed successfully.',
              icon: 'info',
              confirmButtonText: 'Login Now',
              allowOutsideClick: false
            }).then((isConfirm) => {
              if (isConfirm) {
                this.$router.push('/login')
              }
            })
          })
      }
    }
  }
}
</script>

<style>
</style>
