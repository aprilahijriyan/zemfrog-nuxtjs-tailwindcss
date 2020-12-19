<template>
  <nav
    class="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10 shadow-md"
  >
    <div class="flex items-center">
      <button class="mr-2" aria-label="Open Menu" @click="drawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <img
        src="~assets/images/zemfrog-logo.png"
        alt="Logo"
        class="h-auto"
        width="150px"
      >
    </div>
    <div class="flex items-center">
      <div class="hidden md:block md:flex md:justify-between md:bg-transparent">
        <!-- <button
          v-popover:profile-menu.bottom
          class="flex items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <popover name="profile-menu" class="shadow-md">
          <div class="flex flex-col">
            <a
              href="#"
              class="p-2 hover:bg-indigo-500 hover:text-white"
            >Profile</a>
            <a
              href="#"
              class="p-2 hover:bg-indigo-500 hover:text-white"
            >Profile</a>
            <a
              href="#"
              class="p-2 hover:bg-indigo-500 hover:text-white"
            >Profile</a>
          </div>
        </popover> -->
        <a
          href="javascript:void(0)"
          class="flex items-center p-2 font-medium mr-2 text-center border border-red-500 text-red-500 rounded-md transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline"
          @click="doLogout"
        >
          <p class="font-bold">Logout</p></a>
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
        @keydown.esc="isOpen = false"
      >
        <div
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
          @click="isOpen = false"
        />
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span
        class="flex w-full items-center p-4 border-b"
        @click="isOpen = false"
      >
        <img
          src="~assets/images/zemfrog-logo.png"
          alt="Logo"
          class="h-auto w-auto mx-auto object-cover"
        >
      </span>
      <!-- <span
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        @click="isOpen = false"
      ><span class="mr-2">
         <svg
           fill="none"
           stroke="currentColor"
           stroke-linecap="round"
           stroke-linejoin="round"
           stroke-width="2"
           viewBox="0 0 24 24"
           class="w-6 h-6"
         >
           <path
             d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
           />
         </svg>
       </span>
        <span>Home</span>
      </span> -->
    </aside>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler (isOpen) {
        if (process.client) {
          if (isOpen) {
            document.body.style.setProperty('overflow', 'hidden')
          } else {
            document.body.style.removeProperty('overflow')
          }
        }
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.isOpen) {
        this.isOpen = false
      }
    })
  },
  methods: {
    drawer () {
      this.isOpen = !this.isOpen
    },
    doLogout () {
      this.$auth
        .logout()
        .then((_resp) => {
          this.$router.push('/login')
          this.$axios.setToken(false)
        })
        .catch((_err) => {
          console.log("can't logout")
        })
    }
  }
}
</script>
