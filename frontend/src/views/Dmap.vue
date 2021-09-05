<template>
  <div class="map">
    <Dmap msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Dmap from '@/components/Dmap.vue'

export default {
  name: 'map',
  components: {
    Dmap
  }
}
</script>
