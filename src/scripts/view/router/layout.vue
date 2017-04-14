<template lang="pug">
  div
    div.themePanel

      div.leftPanel
        div.leftPanel-inner
          div.pox
            h4 h4 text
            p
              input(type="text").form-control.form-control-sm.re
            p
              input(type="text").form-control.form-control-sm.re
            p.text-right
              a(href="#") link text
            p
              button.btn.btn-theme.btn-block.re .btn.btn-theme
          div.pox
            h4 h4 text
            div.lists
              label 2017.03.99
              p
                span.glyphicon.glyphicon-triangle-right
                | text text text text text text text text text text text
            div.lists
              label 2017.03.99
              p
                span.glyphicon.glyphicon-triangle-right
                | text text text text text text text text text text text
      div.rightPanel
        header-nav
        div.images
        div.container
          h1
            span.md-display-4 Layout
          h3 やること
          ul
            li 思うがままに作る
            li プログラム的なことはこだわって作る
            li UIも好き勝手に作る
            li pug
          component-list
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { MENU } from '../../vuex/mutation-types'

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
  methods: {
    ...mapActions([
      MENU
    ])
  },
  mounted: function() {
    // bootstrapSelect
    $('.selectpicker').selectpicker()
  },
}
</script>

<style lang="css">
</style>
