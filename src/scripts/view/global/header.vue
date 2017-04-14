<template lang="pug">
  div
    nav.navbar.navbar-default.navbar-fixed-top
      div.container
        //- Brand and toggle get grouped for better mobile display
        div.navbar-header
          button(type="button", data-toggle="collapse", data-target="#bs-example-navbar-collapse-1", aria-expanded="false").navbar-toggle.collapsed
            span.sr-only Toggle navigation
            span.icon-bar
            span.icon-bar
            span.icon-bar
          a( @click="MENU('/')").navbar-brand graminum

        //- Collect the nav links, forms, and other content for toggling
        div.collapse.navbar-collapse#bs-example-navbar-collapse-1
          ul.nav.navbar-nav
            li( v-bind:class="{ active: menu === 'github' }")
              a(@click="MENU('github')") GITHUB
          ul.nav.navbar-nav.navbar-right
            li
              form.navbar-form.navbar-left
                div.input-group
                  input(type="text", name="", placeholder="Search", aria-describedby="sizing-addon2").form-control.re
                  span.input-group-btn
                    button(type="button" name="button").btn.btn-default.re
                      span.glyphicon.glyphicon-search

            li.dropdown
              a(href="#" data-toggle="dropdown", role="button", aria-haspopup="true", aria-expanded="false").dropdown-toggle
                span.glyphicon.glyphicon-cog
              ul.dropdown-menu
                li
                  a(@click="MENU('layout')") Layout
                li
                  a(@click="MENU('validationSample')") Validation Sample
                li(role="separator").divider
                li
                  a(@click="MENU('copywriter')").text-center
                    span.glyphicon.glyphicon-copyright-mark
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { MENU } from '../../vuex/mutation-types'

export default {
  computed: {
    ...mapGetters(
      ['menu']
    ),
  },
  methods: {
    ...mapActions([
      MENU
    ]),
  }
}
</script>

<style lang="css">
</style>
