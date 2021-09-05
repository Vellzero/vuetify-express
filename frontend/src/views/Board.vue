<template>
  <div class="board">
    <BoardWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BoardWorld from '@/components/BoardWorld.vue'
import http from '../plugins/axios.js'

export default {
  name: 'Board',
  components: {
    BoardWorld
  },
  methods : {},
  created(){
    console.log(http);
  },
}
</script>
