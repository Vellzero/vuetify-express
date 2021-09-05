<template>
  <div class="Crud">
    <CrudWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CrudWorld from '@/components/CrudWorld.vue'

export default {
  name: 'Crud',
  components: {
    CrudWorld
  }
}
</script>
