<template>
  <v-layout row wrap>
    <v-container>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>{{type.name}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <v-btn icon v-if="metadata.github" :href="metadata.github" slot="activator">
              <v-icon>code</v-icon>
            </v-btn>
            <span>Definition</span>
          </v-tooltip>
        </v-toolbar>
        <v-container fluid>
          <div v-for="docs in documentation">
            <p class="d-block" v-if="docs.type == 'text'" v-html="docs.content"></p>
            <example-code :lang="docs.lang" class="d-block" v-if="docs.type == 'example'" :code="docs.content"></example-code>
          </div>
        </v-container>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
  import ExampleCode from '../elements/example-code.vue';

  export default {
    components: {
      ExampleCode
    },
    data() {
      return {
        metadata: {
          organization: 'vapor',
          package: 'core',
          module: 'bits',
          github: 'https://github.com/vapor/core/blob/d960863febf2e26e32afd0f10539a4476f3636ef/Sources/Bits/Bytes.swift#L3',
        },
        type: {
          name: this.$route.params.type,
          type: "typealias",
          documentation: {
            quality: 0,
            examples: 0,
            text: 0
          }
        },
        documentation: [
          {
            type: "text",
            content: "I love ByteBuffer! Here's some swift code"
          },
          {
            type: "example",
            content: "data.withByteBuffer { print(Array($0)) }\nlet app = Application()",
            lang: 'swift'
          },
          {
            type: 'text',
            content: 'Here is some leaf code'
          },
          {
            type: "example",
            content: "#for(user in users){ #(user.username) }",
            lang: 'leaf'
          }
        ]
      }
    }
  }
</script>
