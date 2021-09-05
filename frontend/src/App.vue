<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>
        
        
        <v-btn :href = "'/'" text> Home</v-btn>
        <v-btn :href = "'/todo'" text> Todo</v-btn>
        <v-btn :href = "'/dmap'" text> KaKaoMap</v-btn>
        <v-btn :href = "'/board'" text> Board</v-btn>
        <v-btn :href = "'/note'" text> NOTES</v-btn>
        <v-btn :href = "'/next'" text> NEXT PJT</v-btn>
        <v-btn :href = "'/about'" text> about!! </v-btn>
        <v-btn :href = "'/crud'" text> crud </v-btn>
        <v-spacer></v-spacer>
        <v-btn :href = "'/login'" text> Login</v-btn>
        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <div id="app">
                  
                <router-view></router-view>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
          
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


</script>
