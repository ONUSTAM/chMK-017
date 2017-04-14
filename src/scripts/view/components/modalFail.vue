<template lang="pug">
  div(class="modal fade" id="modalFail" tabindex="-1")
    .modal-dialog
      .modal-content
        .modal-header
          button(type="button" class="close" data-dismiss="modal")
            span &times;
        .modal-body
          p {{ failMessage }}
        .modal-footer
          button(type="button" class="btn btn-default" data-dismiss="modal") 閉じる
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { FAIL_MESSAGE } from '../../vuex/mutation-types'

export default {
  computed: {
    ...mapGetters(
      ['failMessage']
    ),
  },
  data () {
    return {}
  }
}
</script>

<style lang="css">
</style>
