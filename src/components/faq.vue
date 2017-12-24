<template>
  <v-layout row wrap>
    <v-progress-linear style="margin: 0px;" :active="loading" height="6" indeterminate color="primary"></v-progress-linear>
    <v-container v-show="!loading">
      <v-flex xs12>
        <h3 class="title">{{title}}</h3>
        <p class="body-1">
          <p>As part of the Vapor 3 ecosystem we embrace reactiveness.</p>
          <p>Reactiveness means your Vapor applications will be more resilient to the producer-consumer problem that has long plagued web applications. Vapor achieves this by moving from "push" streams (aka, fire hose streams) to "pull" streams. At a high level, this means better performance and less memory usage during peak demand.</p>
          <p>Learn more at <a href="http://reactive-streams.org">reactive-streams.org</a>.</p>
          <p>As part of our API design we strive to minimize the impact on code.</p>
          <h3 id="reducing-code-impact">Reducing code impact</h3>
          <p>Most of our code impact is reduced using protocols.
            By conforming Futures and Streams to the <doc-link type="Codable"></doc-link> protocol we can use reactiveness throughout all components of Vapor 3.</p>
          <p>This allows for reactive templating with less code than before reactiveness was introduced.</p>
          <h2 id="rules">Rules</h2>
          <p>The following rules are critical to reactive programming with Vapor 3:</p>
          <h3 id="information-flow">Information flow</h3>
          <p>Stream data must be asynchronously available. This means that when input is received, the information stays intact until new data is requested or the sending stream is cancelled/closed.</p>
          <p>Output to another stream must stay intact (in the case of <doc-link type="ByteBuffer"></doc-link>, must not be deallocated or reused) until a new request for data has been made.</p>
          <h3 id="upstream">Upstream</h3>
          <p>Requesting data from upstream must only be done if you do not have enough information to complete a request from downstream.</p>
          <h3 id="downstream">Downstream</h3>
          <p>You <em>must not</em> feed more data to downstream than was requested.</p>
          <h3 id="blocking">Blocking</h3>
          <p>You <em>must not</em> block within a stream using <doc-link type="sleep"></doc-link> or blocking sockets.</p>
        </p>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
  import DocLink from './elements/doc-link.vue';

  export default {
    components: {
      DocLink
    },
    data() {
      return {
        loading: false,
        title: "Reactive programming",
        article: ""
      }
    }
  }
</script>
