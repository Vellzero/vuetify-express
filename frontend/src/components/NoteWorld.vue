<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Note
        </h1>
          <embed type="text/html" src="http://localhost:8080" width="1000" height="500">
          <p>Your browser does not support iframes.</p>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'NoteWorld',
    data: () => ({
    }),
  }
</script>
