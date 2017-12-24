<template>
  <v-layout row wrap>
    <v-container>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>{{type.name}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <v-btn icon v-if="metadata.github" target="_blank" :href="metadata.github" slot="activator">
              <v-icon>code</v-icon>
            </v-btn>
            <span>Definition</span>
          </v-tooltip>
        </v-toolbar>
        <v-container>
          <div v-for="issue in openIssues" :key="issue.name">
            <v-alert color="error" :value="issue.acknowledged" v-if="issue.severity == 5">
              <v-btn ::href="issue.link" icon dark><v-icon>open_in_new</v-icon></v-btn>
              {{description(issue)}}
            </v-alert>
            <v-alert color="warning" :value="issue.acknowledged" v-if="issue.severity == 4" v-html="description(issue)"></v-alert>
          </div>
        </v-container>
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
        openIssues: [
          {
            type: 'crash',
            name: 'ByteBuffer Crash on Linux',
            link: 'https://github.com/vapor/core/issues/51',
            platforms: ['Linux', 'macOS', 'iOS'],
            acknowledged: true,
            since: '3.2.1-alpha.1',
            severity: 5,
          }
        ],
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
    },
    methods: {
      description(issue) {
        let known = "have problems";

        if(issue.type == 'crash') {
          known = "crash";
        }

        let platforms = "";

        for(let i = 0; i < issue.platforms.length; i++) {
          if(i == 0) {
            platforms += "on "
          } else if(i == issue.platforms.length - 1) {
            platforms += " and "
          } else {
            platforms += ", "
          }

          platforms += issue.platforms[i];
        }

        let affected = "";

        if(issue.since) {
          affected = `since ${issue.since}`;
        }

        return `This ${this.type.type} is known to ${known} ${platforms} ${affected}`;
      }
    }
  }
</script>
