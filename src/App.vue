<template>
  <v-app light>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :key="link.name" v-for="link in links" :href="link.link" slot="activator">{{link.name}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Vapor - Documentation',
        links: [
          {
            name: 'Slack',
            link: 'http://vapor.team'
          },
          {
            name: 'Docs',
            link: 'https://docs.vapor.codes/3.0/'
          },
          {
            name: 'Cloud',
            link: 'https://vapor.cloud'
          },
          {
            name: 'Packages',
            link: 'https://vapor.codes/catalog/'
          }
        ]
      }
    }
  }
</script>
