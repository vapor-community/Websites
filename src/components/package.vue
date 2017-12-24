<template>
  <v-content>
    <v-layout row wrap>
      <router-view></router-view>
    </v-layout>
    <v-bottom-nav absolute :value="true" :active.sync="view" color="transparent">
      <v-btn flat color="teal" value="package">
        <span>Package</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="docs">
        <span>Docs</span>
        <v-icon>school</v-icon>
      </v-btn>
      <v-btn flat :href="github" color="teal">
        <span>Source</span>
        <v-icon>code</v-icon>
      </v-btn>
      <v-btn flat :href="github + 'issues/'" color="teal">
        <span>Bugs</span>
        <v-icon>bug_report</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-content>
</template>

<script>
  export default {
    data() {
      return {
        view: this.$route.name,
        github: 'https://github.com/vapor/vapor/',
        types: [

        ]
      }
    }
  }
</script>
