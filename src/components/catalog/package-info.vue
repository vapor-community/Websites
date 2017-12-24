<template>
  <div>{{package}}</div>
</template>

<script>
  export default {
    data() {
      return {
        organization: this.$route.params.organization,
        package: this.$route.params.package,
      }
    }
  }
</script>
