<template>
  <div class="About">
    <NoteWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NoteWorld from '@/components/NoteWorld.vue'

export default {
  name: 'Note',
  components: {
    NoteWorld
  }
}
</script>
