<template lang="pug">
  div
    h1 Exceptions
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
