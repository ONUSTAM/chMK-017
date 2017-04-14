import * as types from '../mutation-types'
import LocalStorageCtrl from '../../localStorage/'
import onbeforeunload from '../../modules/onbeforeunload'

export function action ( {commit, state} ) {
  var localStorageCtrl = new LocalStorageCtrl()

  function modalF5Open(){
    $('#modalF5').modal('show')
  }

  onbeforeunload(modalF5Open)
  console.log(types.INITIALIZE)
  commit(types.INITIALIZE, {
    githubAccount: 'ONUSTAM',
  })
  commit(types.MENU, '')
}


export function mutation (state, e) {
// export default function (state) {
  state.githubAccount = e.githubAccount
}
