<template lang="pug">
  div.index
    header-nav
    br
    br
    div.container
      canvas#core
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { MENU } from '../../vuex/mutation-types'

import Core from '../../modules/core/core'

export default {
  components: {
    headerNav: require('../global/header.vue'),
    componentList: require('../components/componentList.vue')
  },
  data () {
    return {

    }
  },
  computed: {

  },
  mounted: function () {
    var core = new Core()
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
