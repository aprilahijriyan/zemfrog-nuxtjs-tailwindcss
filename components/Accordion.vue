<template>
  <div class="">
    <div class="tab__header">
      <a
        href="#"
        class="tab__link block flex justify-between"
        @click.prevent="active = !active"
      >
        <div class="flex items-center">
          <div class="ml-1"><i class="fa fa-code-branch" /></div>
          <span class="ml-4">{{ title }}</span>
        </div>
        <span v-show="!active" class="down-arrow">&#9660;</span>
        <span v-show="active" class="up-arrow">&#9650;</span>
      </a>
    </div>
    <div v-show="active" class="tab__content mt-2">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data () {
    return {
      active: false
    }
  }
}
</script>

<style>
</style>
