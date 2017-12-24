<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0"><a class="headline" :href="githubOrganization">{{organization}}</a> / <a :href="githubRepo">{{package}}</a></h3>
      <v-spacer></v-spacer>

      <v-chip v-if="hot" color="red" text-color="white">
        Popular <v-icon right>whatshot</v-icon>
      </v-chip>
      <v-chip color="orange" text-color="white">
        {{stars}} <v-icon right>star</v-icon>
      </v-chip>
    </v-card-title>

    <v-card-media v-if="logo" :src="logo" height="200px"></v-card-media>

    <v-container>
      <v-layout row wrap justify-center style="margin-bottom: 16px;">
        <v-btn success round small outline to="/faq/official" v-if="organization == 'vapor'">
          Vapor <v-icon right>check</v-icon>
        </v-btn>
        <v-btn primary round small outline to="/faq/community" v-else>
          Community <v-icon right>group</v-icon>
        </v-btn>

        <v-btn success round small outline to="/faq/reactive" v-if="reactive">
          Reactive <v-icon right>fast_forward</v-icon>
        </v-btn>
        <v-btn error round small outline to="/faq/reactive" v-else>
          Blocking <v-icon right>block</v-icon>
        </v-btn>

        <v-btn success round small outline to="/faq/services" v-if="reactive">
          Service <v-icon right>extension</v-icon>
        </v-btn>
      </v-layout>

      <!--<v-layout row wrap justify-center style="margin-bottom: 16px;">-->
        <!--<v-btn info round small outline v-for="category in categories" :key="category.name" :to="'categories/' + category.name">-->
          <!--{{category.name}} <v-icon right>{{category.icon}}</v-icon>-->
        <!--</v-btn>-->
      <!--</v-layout>-->

      <v-layout row>
        <p class="body-1">{{description}}</p>
      </v-layout>
    </v-container>

    <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        logo: 'https://cloud.githubusercontent.com/assets/1342803/24859350/7065f420-1df0-11e7-9796-577b04d6b35b.png',
        organization: this.$route.params.organization,
        package: this.$route.params.package,
        stars: 12068,
        reactive: true,
        categories: [
          {
            name: 'utility',
            icon: 'build'
          },
          {
            name: 'databases',
            icon: 'storage'
          },
          {
            name: 'crypto',
            icon: 'lock'
          }
        ],
        historicStars: 1192,// 2 weeks old
        description: "sdoawdjqwirj3 i4j12348912qwv 314 13rcmr8n 3h2t9u3ehf9uqeh9u324hcrt u3ehfg9ueqhfiueqfqeiuh fidbfadibg24iuhadbfdhfbq3ui erq"
      }
    },
    computed: {
      githubOrganization() {
        return `https://github.com/${this.organization}/`
      },
      githubRepo() {
        return `https://github.com/${this.organization}/${this.package}/`
      },
      hot() {
        return this.stars - this.historicStars > 25;
      }
    }
  }
</script>
