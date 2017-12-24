<template>
  <v-container flat>
    <v-layout row>
      <v-btn @click="copy()" absolute right icon :data-clipboard-text="code">
        <v-tooltip v-model="tooltip" disabled bottom close-delay="450">
          <v-icon slot="activator">content_copy</v-icon>
          <span>Copied!</span>
        </v-tooltip>
      </v-btn>
      <pre v-highlight :class="lang">{{code}}</pre>
    </v-layout>
  </v-container>
</template>

<script>
  require('clipboard')

  export default {
    props: {
      code: String,
      lang: String
    },
    data() {
      return {
        tooltip: false
      }
    },
    methods: {
      copy() {
        let self = this;
        self.tooltip = true;

        setTimeout(function() {
          self.tooltip = false;
        }, 3000)
      }
    }
  }
</script>
