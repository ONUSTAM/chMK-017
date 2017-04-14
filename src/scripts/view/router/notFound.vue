<template lang="pug">
  div
    h1 Not Found
    button(@click="onTopPage").btn.btn-theme.re TOP page
</template>

<script>
export default {
  methods: {
    onTopPage () {
      location.href='/'
    }
  }
}
</script>

<style lang="css">
</style>
