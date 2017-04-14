<template lang="pug">
  div.index
    header-nav

    div.container
      br
      h2.text-center graminume
      pre.re {{ copywriter }}
      p.text-center © 2017
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { MENU } from '../../vuex/mutation-types'

export default {
  components: {
    headerNav: require('../global/header.vue')
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(
      ['copywriter']
    ),
  },
  methods: {
    ...mapActions([
      MENU
    ])
  }
}
</script>

<style lang="css">
</style>
