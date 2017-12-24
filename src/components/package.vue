<template>
  <v-layout row wrap>
    <v-flex sm8 offset-sm2>
      <v-breadcrumbs>
        <v-icon slot="divider">forward</v-icon>
        <v-breadcrumbs-item v-for="crumb in crumbs" :key="crumb.text">
          {{ crumb.text }}
        </v-breadcrumbs-item>
      </v-breadcrumbs>
      <v-content sm10 offset-sm1>
        <router-view></router-view>
      </v-content>
    </v-flex>
    <v-bottom-nav absolute :value="true" :active.sync="view" color="transparent">
      <v-btn flat color="teal" to="package" value="package">
        <span>Package</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat color="teal" to="docs" value="docs">
        <span>Docs</span>
        <v-icon>school</v-icon>
      </v-btn>
      <v-btn flat target="_blank" :href="github" color="teal">
        <span>Source</span>
        <v-icon>code</v-icon>
      </v-btn>
      <v-btn flat target="_blank" :href="github + 'issues/'" color="teal">
        <span>Bugs</span>
        <v-icon>bug_report</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-layout>
</template>

<script>
  export default {
    data() {
      let organization = this.$route.params.organization;
      let pkg = this.$route.params.package;

      return {
        view: this.$route.name,
        organization: organization,
        package: pkg,
        github: `https://github.com/${organization}/${pkg}/`,
        types: [

        ]
      }
    },
    computed: {
      crumbs() {
        return [
          {
            text: this.$route.name,
            link: `/${this.$route.name}/`
          },
          {
            text: this.organization,
            link: `/${this.$route.name}/${this.organization}`,
          },
          {
            text: this.package,
            link: `/${this.$route.name}/${this.organization}/${this.package}`,
          }
        ]
      }
    }
  }
</script>
