<template lang="pug">
  div.container
    div.panel.panel-default
      div.panel-body
        div.row
          div.col-xs-3
            p ひらがな
          div.col-xs-9
            p
              input(type="text", v-model="hiragana").form-control.form-control-sm.re
          div.col-xs-3
            p カタカナ
          div.col-xs-9
            p
              input(type="text", v-model="katakana").form-control.form-control-sm.re
          div.col-xs-3
            p 日本語
          div.col-xs-9
            p
              input(type="text", v-model="japanese").form-control.form-control-sm.re
      div.panel-footer
        button.btn.btn-theme.re test

    div.panel.panel-default
      div.panel-body
        div
          button(@click="VALIDATION_SAMPLE").btn.btn-theme.re test
      div
        table.table
          tbody
            tr(v-for="item in spLabel")
              th {{ item.text }}
                br
                | {{ item.Id }}
              td {{ item.label }}
                br
                input(type="text" v-model="item.label").form-control.form-control-sm.re

    pre {{ spLabel }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { VALIDATION_SAMPLE } from '../../vuex/mutation-types'

export default {
  computed: {
    ...mapGetters(
      ['spLabel']
    ),
  },
  date () {
    return {
      japanese: null,
      katakana: null,
      hiragana: null
    }
  },
  methods: {
    ...mapActions([
      VALIDATION_SAMPLE,
    ]),
  },

}
</script>

<style lang="css">
</style>
