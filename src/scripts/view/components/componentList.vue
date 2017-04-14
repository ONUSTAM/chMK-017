<template lang="pug">
    div.components-list

      h3
        span.markLine Button
      ul.list-inline
        li
          p
            button.btn.btn-default.re .btn.btn-default
        li
          p
            button.btn.btn-info.re .btn.btn-info
        li
          p
            button.btn.btn-primary.re .btn.btn-primary
        li
          p
            button.btn.btn-success.re .btn.btn-success
        li
          p
            button.btn.btn-warning.re .btn.btn-warning
        li
          p
            button.btn.btn-danger.re .btn.btn-danger
        li
          p
            button.btn.btn-theme.re .btn.btn-theme

      h3
        span.markLine .active
      ul.list-inline
        li
          p
            button.active.btn.btn-default.re .btn.btn-default
        li
          p
            button.active.btn.btn-info.re .btn.btn-info
        li
          p
            button.active.btn.btn-primary.re .btn.btn-primary
        li
          p
            button.active.btn.btn-success.re .btn.btn-success
        li
          p
            button.active.btn.btn-warning.re .btn.btn-warning
        li
          p
            button.active.btn.btn-danger.re .btn.btn-danger
        li
          p
            button.active.btn.btn-theme.re .btn.btn-theme

      h3
        span.markLine :disabled
      ul.list-inline
        li
          p
            button(disabled).active.btn.btn-default.re :disabled
        li
          p
            button(disabled).active.btn.btn-info.re :disabled
        li
          p
            button(disabled).active.btn.btn-primary.re :disabled
        li
          p
            button(disabled).active.btn.btn-success.re :disabled
        li
          p
            button(disabled).active.btn.btn-warning.re :disabled
        li
          p
            button(disabled).active.btn.btn-danger.re :disabled
        li
          p
            button(disabled).active.btn.btn-theme.re :disabled

      h3
        span.markLine input-group
      div.input-group
        span.input-group-addon#sizing-addon2 @
        input(type="text", placeholder="Username" aria-describedby="sizing-addon2").form-control
        span.input-group-btn
          button(type="button").btn.btn-default Go!

      br

      div.input-group
        span.input-group-addon#sizing-addon2 @
        input(type="text", placeholder="Username" aria-describedby="sizing-addon2").form-control
        span.input-group-btn
          button(type="button").btn.btn-theme .btn-theme

      h3
        span.markLine input(type="text")
      div
        input(type="text").form-control.re

      h3
        span.markLine input(type="radio")
      div
        label.form-check-label
          input(type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1")
          |&nbsp;Option two can be something else and selecting it will deselect option one
        label.form-check-label
          input(type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2")
          |&nbsp;Option two can be something else and selecting it will deselect option one

      h3
        span.markLine .nav.nav-tabs
      div
        ul.nav.nav-tabs
          li(role="presentation").active
            a(href="") Home
          li(role="presentation")
            a(href="") Profile
          li(role="presentation")
            a(href="") Messages

      h3
        span.markLine selectpicker
      div
        ul.list-inline
          li
            select.selectpicker.re
              optgroup(label="Picnic")
                option Mustard  option
                option Ketchup  option
                option Relish  option
              optgroup(label="Picnic")
                option Tent  option
                option Flashlight  option
                option Toilet Paper  option

          li
            select(data-style="btn-info").selectpicker.re
              optgroup(label="Picnic")
                option Mustard  option
                option Ketchup  option
                option Relish  option
              optgroup(label="Picnic")
                option Tent  option
                option Flashlight  option
                option Toilet Paper  option

          li
            select(data-style="btn-primary").selectpicker.re
              optgroup(label="Picnic")
                option Mustard  option
                option Ketchup  option
                option Relish  option
              optgroup(label="Picnic")
                option Tent  option
                option Flashlight  option
                option Toilet Paper  option

          li
            select(data-style="btn-warning").selectpicker.re
              optgroup(label="Picnic")
                option Mustard  option
                option Ketchup  option
                option Relish  option
              optgroup(label="Picnic")
                option Tent  option
                option Flashlight  option
                option Toilet Paper  option

      div
        ul.list-inline
          li
            select(data-style="btn-theme").selectpicker.re
              optgroup(label="Picnic")
                option Mustard  option
                option Ketchup  option
                option Relish  option
              optgroup(label="Picnic")
                option Tent  option
                option Flashlight  option
                option Toilet Paper  option

      h3
        span.markLine panel
      div.panel.panel-default
        div.panel-heading
          p .panel-heading
        div.panel-body
          p .panel-body
        div.panel-footer
          p .panel-footer

      h3
        span.markLine .table-border
      div.panel.table-panel
        table.table.table-bordered
          tbody
            tr
              th 001
              td
                select.selectpicker.re
                  optgroup(label="Picnic")
                    option Mustard  option
                    option Ketchup  option
                    option Relish  option
                  optgroup(label="Picnic")
                    option Tent  option
                    option Flashlight  option
                    option Toilet Paper  option
              th label label
              td
                input(type="text").form-control.form-control-sm.re
            tr
              th 001
              td(colspan="3")
                ul.list-inline
                  li
                    input(type="text").form-control.form-control-sm.re

                  li
                    select.selectpicker.re
                      optgroup(label="Picnic")
                        option Mustard  option
                        option Ketchup  option
                        option Relish  option
                      optgroup(label="Picnic")
                        option Tent  option
                        option Flashlight  option
                        option Toilet Paper  option

                  li
                    input(type="text").form-control.form-control-sm.re

      h3
        span.markLine .table list
      div.panel.panel-default.table
        div.panel-body.table-list-outer
          table.table.table-list
            thead
              tr
                th no
                th name
                th label
                th date

            tbody
              tr
                td 001
                td first last
                td label label
                td.text-center 2016.01.22
              tr
                td 001
                td first last
                td label label
                td.text-center 2016.01.22
              tr
                td 001
                td first last
                td label label
                td.text-center 2016.01.22
              tr
                td 001
                td first last
                td label label
                td.text-center 2016.01.22
              tr
                td 001
                td first last
                td label label
                td.text-center 2016.01.22
              tr
                td 001
                td first last
                td label label
                td.text-center 2016.01.22
</template>
<script>
export default {
}
</script>

<style lang="css">
</style>
