<template lang="pug">
  div(md-theme="'default'").container-fulid#app
    div.container-fulid
      transition(name="fade",mode="out-in")
        router-view
    modal-fail
    modal-f5
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { INITIALIZE } from '../vuex/mutation-types'

export default {
  components: {
    modalFail: require('./components/modalFail.vue'),
    modalF5: require('./components/modalF5.vue'),
  },
  computed: {
    ...mapGetters(
      ['menu']
    ),
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      INITIALIZE,
    ]),
  },
  mounted () {
    // bootstrapSelect
    $('.selectpicker').selectpicker()
    this.INITIALIZE()
  },
  watch: {
    /**
     * [ルートの変更の検知]
     * @param to....
     * @param from..
     */
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
    menu (e) {
      this.$router.push(e)
    },
  }
}
</script>

<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
