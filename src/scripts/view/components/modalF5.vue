<template lang="pug">
  div(class="modal fade bd-example-modal-sm" id="modalF5" tabindex="-1")
    .modal-dialog.modal-sm
      .modal-content
        .modal-body
          p
            |F5 ReLoad ?
        .modal-footer
          button(type="button" class="btn btn-default re" data-dismiss="modal") Cancel
          button(type="button" class="btn btn-primary re" @click="onReload") Reload
</template>

<script>
export default {
  methods: {
    onReload () {
      location.href='/'
    }
  }
}
</script>

<style lang="css">
</style>
