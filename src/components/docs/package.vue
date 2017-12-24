<template>
  <v-content>
    <v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent">
      <v-btn flat color="teal" value="recent">
        <span>Package</span>
        <v-icon></v-icon>
      </v-btn>
      <v-btn flat color="teal" value="favorites">
        <span>Docs</span>
        <v-icon>school</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="nearby">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-content>
</template>

<script>
  export default {
    data() {
      return {
        types: [

        ]
      }
    }
  }
</script>
