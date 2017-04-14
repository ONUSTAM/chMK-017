import * as types from '../mutation-types'

/**
 * menu.js
 * @param  {object} commit vuex mutation
 * @param  {object} state  vuex state
 * @param  {string} menu   routes name
 * @commit [string]        [description]
 */
export function action ( {commit, state }, menu ) {
  commit(types.MENU, menu)
}


export function mutation (state, menu) {
  state.menu = menu
}
