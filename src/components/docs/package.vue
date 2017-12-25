<template>
  <v-layout row>
    <v-container>
      <v-flex sm10 offset-sm1>
        <v-card>
          <v-card-title primary-title>
            <h3 class="headline"><a class="headline" target="_blank" :href="githubOrganization">{{metadata.organization}}</a> / <a target="_blank" :href="githubRepo">{{metadata.package}}</a></h3>
            <v-spacer></v-spacer>
            <v-icon>search</v-icon>
            <h3 class="headline">{{docs.completeness}}%</h3>
          </v-card-title>

          <v-container>
            <v-layout>
              <v-flex xs3>
                <v-select
                  :items="types"
                  v-model="searchType"
                  label="Type"
                  single-line
                  bottom
                ></v-select>
              </v-flex>
              <v-flex xs8 offset-xs1>
                <v-text-field
                  append-icon="search"
                  label="Search"
                  single-line
                  v-model="search"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>

          <v-data-table
            :items="types"
            item-key="name"
            hide-actions
            class="elevation-1"
            :search="search"
          >
            <template slot="headers" slot-scope="props">
              <tr>
                <th></th>
                <th class="text-xs-right">Name</th>
                <th class="text-xs-right">Type</th>
                <th class="text-xs-right">Completeness</th>
              </tr>
            </template>
            <template slot="items" slot-scope="props">
              <tr>
                <td>
                  <v-btn icon><v-icon>visibility</v-icon></v-btn>
                </td>
                <td class="text-xs-right">{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.type }}</td>
                <td class="text-xs-right">{{ props.item.completeness }}</td>
              </tr>
            </template>
          </v-data-table>

          <v-card-actions>
            <v-btn flat color="teal" :to="'/catalog/' + organization + '/' + package" value="package">
              <span>Package</span>
              <v-icon>home</v-icon>
            </v-btn>
            <v-btn flat color="teal" value="docs">
              <span>Docs</span>
              <v-icon>school</v-icon>
            </v-btn>
            <v-btn flat target="_blank" :href="githubRepo" color="teal">
              <span>Source</span>
              <v-icon>code</v-icon>
            </v-btn>
            <v-btn flat target="_blank" :href="githubRepo + 'issues/'" color="teal">
              <span>Bugs</span>
              <v-icon>bug_report</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        search: '',
        searchType: 'all',
        types: [
          'all', 'protocols', 'classes', 'structs', 'enums', 'types'
        ],
        metadata: {
          organization: 'vapor',
          package: 'core',
          module: 'bits',
          github: 'https://github.com/vapor/core/blob/d960863febf2e26e32afd0f10539a4476f3636ef/Sources/Bits/Bytes.swift#L3',
        },
        docs: {
          completeness: 55
        },
        types: [
          {
            type: 'typealias',
            name: 'ByteBuffer',
            completeness: 100
          }
        ]
      }
    },
    computed: {
      githubOrganization() {
        return `https://github.com/${this.metadata.organization}/`
      },
      githubRepo() {
        return `https://github.com/${this.metadata.organization}/${this.metadata.package}/`
      },
    }
  }
</script>
