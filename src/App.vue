<template>
  <v-app light>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-and-down">
        <v-btn flat :key="link.name" v-for="link in links" target="_blank" :href="link.link">{{link.name}}</v-btn>
      </v-toolbar-items>
      <v-badge v-if="profile" overlap :color="urgency" v-model="profile.notifications.length > 0">
        <v-icon dark slot="badge">notifications</v-icon>
        <v-avatar class="indigo">
          <img v-if="profile.avatar" :src="profile.avatar">
          <v-icon v-else dark>account_circle</v-icon>
        </v-avatar>
      </v-badge>
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
        profile: {
          pennies: 215,
          avatar: 'https://avatars0.githubusercontent.com/u/1951674?s=460&v=4',
          notifications: [

          ]
        },
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
    },
    computed: {
      urgency() {
        let level = 0;

        for(let i = 0; i < this.profile.notifications.length; i++) {
          let currentLevel = this.profile.notifications[i].level;

          if(currentLevel > level) {
            level = currentLevel;
          }
        }

        if(level == 0) {
          return 'grey';
        } else if(level == 1) {
          return 'yellow'
        } else if(level == 2) {
          return 'orange'
        } else if(level == 3) {
          return 'red'
        }
      }
    }
  }
</script>
