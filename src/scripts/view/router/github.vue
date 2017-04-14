<template lang="pug">
  div
    header-nav

    div.container
      h3.text-center
        a(:href="githubAccountURL" target="_blank").lnk GitHub Repositories

      ul.list-group
        li(v-for="repo in github").list-group-item.clearfix
          h3
            a(:href="repo.html_url" target="_blank")
              span.markLine {{ repo.name }}
          p.row
            label.col-xs-12.col-sm-2 clone url
            span(style="word-break: break-all;").col-xs-12.col-sm-10 {{ repo.clone_url }}
          p.row
            label.col-xs-12.col-sm-2 update
            span.col-xs-12.col-sm-10 {{ repo.updated_at | dateFormat }}
          p.row
            label.col-xs-12.col-sm-2 created at
            span.col-xs-12.col-sm-10 {{ repo.created_at | dateFormat }}
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { GITHUB_LIST } from '../../vuex/mutation-types'

export default {
  components: {
    headerNav: require('../global/header.vue'),
  },
  computed: {
    ...mapGetters(
      ['githubAccount', 'githubList']
    ),
    github () {
      return (this.githubList)? this.githubList : null
    },
    githubAccountURL () {
      return 'https://github.com/' + this.githubAccount
    }
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      GITHUB_LIST
    ]),
  },
  mounted: function() {
    console.log('github');
    this.GITHUB_LIST()
  },
}
</script>

<style lang="css">
</style>
