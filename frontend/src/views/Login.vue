<template>
  <div class="Login">
    <LoginWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginWorld from '@/components/LoginWorld.vue'

export default {
  name: 'Login',
  components: {
    LoginWorld
  }
}
</script>
