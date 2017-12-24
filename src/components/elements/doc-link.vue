<template>
  <router-link :to="'/docs/types/' + type">
    <code>{{type}}</code>
  </router-link>
</template>

<script>
  export default {
    props: {
      type: String
    }
  }
</script>
