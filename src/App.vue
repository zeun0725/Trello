<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'
export default {
  name: 'app',
  components: { Navbar },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
