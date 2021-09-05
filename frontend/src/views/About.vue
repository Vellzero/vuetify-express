<template>
  <div class="About">
    <AboutWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutWorld from '@/components/AboutWorld.vue'

export default {
  name: 'About',
  components: {
    AboutWorld
  }
}
</script>
