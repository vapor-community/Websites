<template>
  <pre v-highlight :class="lang">{{code}}</pre>
</template>

<script>
  export default {
    props: {
      code: String,
      lang: String
    }
  }
</script>
