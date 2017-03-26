<template>
  <div id="route" class="in">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    url: String
  },
  data () {
    return {
      token: ''
    }
  }
}
</script>

<style>
</style>
