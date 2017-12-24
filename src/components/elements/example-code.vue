<template>
  <v-container flat>
    <v-layout row>
      <v-btn class="codeToClipboard" :data-clipboard-text="code" ref="copyClipboard" absolute right icon>
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
  import Clipboard from 'clipboard';

  export default {
    props: {
      code: String,
      lang: String
    },
    data() {
      return {
        tooltip: false,
        clip: new Clipboard('.codeToClipboard')
      }
    }
  }
</script>
