<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex v-for="project in projects" :key="project.name" md3>
        <v-container>
          <v-card>
            <v-card-media
              :src="project.logo"
              height="125px"
              contain
            ></v-card-media>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{project.organization}} / {{project.name}}</div>
                <div>{{project.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat primary :to="'/' + project.organization + '/' + project.name + '/package'">Add</v-btn>
              <v-btn flat secondary :to="'/' + project.organization + '/' + project.name + '/docs'">Docs</v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            logo: "https://cloud.githubusercontent.com/assets/1342803/26107881/b59e7e22-3a42-11e7-82b7-fe869cfdb0b9.png",
            organization: 'vapor',
            name: 'vapor',
            description: 'The Vapor framework'
          },
          {
            logo: "https://cloud.githubusercontent.com/assets/1342803/24859350/7065f420-1df0-11e7-9796-577b04d6b35b.png",
            organization: 'vapor',
            name: 'core',
            description: 'Utilities for the Vapor framework'
          },
          {
            logo: "https://cloud.githubusercontent.com/assets/1342803/24859350/7065f420-1df0-11e7-9796-577b04d6b35b.png",
            organization: 'vapor',
            name: 'async',
            description: 'Reactive streams and futures'
          },
          {
            logo: "https://camo.githubusercontent.com/bbb41274ad71a49af3a56c62d83fb56083cf5b85/687474703a2f2f6f70656e6b697474656e2e6f72672f6261636b67726f756e642d6f70656e6b697474656e2e737667",
            organization: 'OpenKitten',
            name: 'MongoKitten',
            description: 'High performance pure swift MongoDB driver'
          },
          {
            logo: "https://vapor.codes/images/mongo.png",
            organization: 'vapor',
            name: 'mongo-driver',
            description: 'MongoDB integrations for Fluent'
          },
          {
            logo: "https://vapor.codes/images/redis.png",
            organization: 'vapor',
            name: 'redis',
            description: 'High performance Redis driver'
          },
          {
            logo: "https://vapor.codes/images/mysql.png",
            organization: 'vapor',
            name: 'mysql',
            description: 'Pure swift reactive MySQL driver'
          },
          {
            logo: "https://vapor.codes/images/mysql.png",
            organization: 'vapor',
            name: 'mysql-driver',
            description: 'MySQL integrations for Fluent'
          }
        ]
      }
    }
  }
</script>
