import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import * as types from './mutation-types'
import * as getters from './getters'

// mutations
import * as menu from './mutations/menu'
import * as initialize from './mutations/initialize'
import * as githubList from './mutations/githubList'
import * as validationSample from './mutations/validationSample'
import * as failMessage from './mutations/failMessage'

const ACTION = 'action'
const MUTATION = 'mutation'
const api = {
  [types.FAIL_MESSAGE]     : failMessage,
  [types.INITIALIZE]       : initialize,
  [types.MENU]             : menu,
  [types.GITHUB_LIST]      : githubList,
  [types.VALIDATION_SAMPLE]: validationSample,
}

function settingMutation (method) {
  return _.reduce(api, function(result, type, key){
    result[key] = type[method]
    return result
  }, {})
}

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  actions: settingMutation(ACTION),
  mutations: settingMutation(MUTATION)
})
