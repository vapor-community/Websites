<template>
  <v-container flat>
    <v-layout row>
      <v-btn class="codeToClipboard" @click="changeMessage" :data-clipboard-text="code" ref="copyClipboard" absolute right icon>
        <v-tooltip bottom>
          <v-icon slot="activator">content_copy</v-icon>
          <span v-html="copyText"></span>
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
        clip: new Clipboard('.codeToClipboard'),
        copyText: 'Copy this example'
      }
    },
    methods: {
      changeMessage() {
        let self = this;
        let oldText = self.copyText;
        this.copyText = 'Copied!';

        setTimeout(function () {
          self.copyText = oldText
        }, 3000)
      }
    }
  }
</script>
