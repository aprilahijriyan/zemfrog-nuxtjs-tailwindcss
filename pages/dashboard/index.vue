<template>
  <div class="flex flex-col gap-2">
    <Breadcrumbs :items="breadcrumbs" />
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  components: {},
  data () {
    return {
      breadcrumbs: [['/dashboard', 'Home']],
      cols: [],
      rows: []
    }
  }
}
</script>

<style>
</style>
