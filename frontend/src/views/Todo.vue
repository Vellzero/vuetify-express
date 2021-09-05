<template>
  <div class="About">
    <TodoHome msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoHome from '@/components/TodoHome.vue'

export default {
  name: 'About',
  components: {
    TodoHome
  }
}
</script>
